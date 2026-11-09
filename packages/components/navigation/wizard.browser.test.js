import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import View from "@lightstart/light";
import wizardDef from "./wizard.js";

const waitFor = async (predicate, label, timeout = 5000) => {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (predicate()) return;
    await new Promise((r) => setTimeout(r, 20));
  }
  throw new Error(`timed out waiting for ${label}`);
};

const settle = () => new Promise((r) => setTimeout(r, 100));

describe("lc-wizard focus and progress", () => {
  let el;
  let outside;

  before(async () => {
    if (!customElements.get("lc-wizard")) View.define("lc-wizard", wizardDef);
    outside = document.createElement("button");
    outside.textContent = "outside";
    el = document.createElement("lc-wizard");
    el.setAttribute("total-steps", "3");
    for (let i = 1; i <= 3; i++) {
      const step = document.createElement("div");
      step.slot = `step-${i}`;
      step.textContent = `Content ${i}`;
      el.append(step);
    }
    document.body.append(outside, el);
    await waitFor(() => el.querySelector("[part~=lc-wizard-btn-next]"), "next button");
  });

  after(() => {
    el.remove();
    outside.remove();
  });

  const next = () => el.querySelector("[part~=lc-wizard-btn-next]");
  const back = () => el.querySelector("[part~=lc-wizard-btn-back]");
  const bar = () => el.querySelector("[part~=lc-wizard-progress]");
  const inside = () => el.contains(document.activeElement);

  it("keeps focus inside the wizard when Next is activated", async () => {
    next().focus();
    next().click();
    await settle();
    assert.equal(el.currentStep, 2);
    assert.ok(inside(), `focus fell to ${document.activeElement.tagName}`);
  });

  it("keeps focus inside the wizard when Back is activated", async () => {
    back().focus();
    back().click();
    await settle();
    assert.equal(el.currentStep, 1);
    assert.ok(inside(), `focus fell to ${document.activeElement.tagName}`);
  });

  it("keeps focus inside at the last step and back at the first", async () => {
    next().focus();
    next().click();
    await settle();
    next().focus();
    next().click();
    await settle();
    assert.equal(el.currentStep, 3);
    assert.ok(inside(), "focus fell at the last step");
    back().focus();
    el.goToStep(1);
    await settle();
    assert.ok(inside(), "focus fell at the first step");
  });

  it("keeps focus inside after nextStep, prevStep and goToStep from a button", async () => {
    for (const change of [() => el.nextStep(), () => el.prevStep(), () => el.goToStep(3)]) {
      next().focus();
      change();
      await settle();
      assert.ok(inside(), "focus fell to body");
    }
    el.goToStep(1);
    await settle();
  });

  it("does not take focus when the step changes from outside", async () => {
    outside.focus();
    el.nextStep();
    await settle();
    assert.equal(document.activeElement, outside);
    el.goToStep(1);
    await settle();
    assert.equal(document.activeElement, outside);
  });

  it("exposes the progress as a named progressbar with a localized value text", async () => {
    el.goToStep(2);
    await settle();
    const progress = bar();
    assert.equal(progress.getAttribute("role"), "progressbar");
    assert.equal(progress.getAttribute("aria-valuemin"), "0");
    assert.equal(progress.getAttribute("aria-valuemax"), "3");
    assert.equal(progress.getAttribute("aria-valuenow"), "2");
    assert.equal(progress.getAttribute("aria-valuetext"), "Step 2 of 3");
    assert.ok(progress.getAttribute("aria-label"), "the progressbar has a name");
  });

  it("announces the step through the counter when the progress bar is hidden", async () => {
    el.showProgress = false;
    el.goToStep(1);
    await settle();
    assert.equal(bar(), null);
    const counter = el.querySelector("[part~=lc-wizard-step-counter]");
    assert.equal(counter.getAttribute("role"), "status");
    el.showProgress = true;
    await settle();
  });
});
