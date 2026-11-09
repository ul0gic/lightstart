/**
 * The widths the showcase renders a component at. One table, read by the
 * showcase and by the standalone preview, so the two cannot offer different
 * sizes.
 *
 * Width `0` means the stage takes whatever room it has.
 */
export const VIEWPORT_PRESETS: {
    label: string;
    width: number;
    icon: string;
}[];
export const VIEWPORT_MAX: 1920;
export function viewportCss(width: number): string;
export function viewportLabel(width: number): string;
export function viewportFromSlider(value: number): number;
export function sliderFromViewport(width: number): number;
