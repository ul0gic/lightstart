/**
 * @file @lightstart/light/i18n: the translation a host's components read, as
 * `@lightstart/light/navigation` is the router they read. A component asks for
 * the sentence a key has, the language the reader is in and the languages on
 * offer, and may change the language; whatever library holds the sentences
 * plugs in with `configureTranslation`. Without one, a component keeps its own
 * words and the language is the document's. A render that asks for a sentence
 * or the language draws again when the language changes.
 */
import { signal } from "../signals/index.js";

/** What a translation library answers the engine. */
                              
                                                                                                                       
                                                                               
                                                                      
                     
                                                            
                        
                                                                            
                                                         
                                                                        
                                        
 

const documentLanguage = ()         => {
  const lang = (globalThis                                                           ).document?.documentElement?.lang;
  return typeof lang === "string" && lang.length > 0 ? lang : "en";
};

class Plain                        {
  translate(_key        , _params                          )                     {
    return undefined;
  }

  language()         {
    return documentLanguage();
  }

  languages()           {
    return [documentLanguage()];
  }

  setLanguage(_language        )       {
    return;
  }

  subscribe(_fn            )             {
    return () => {};
  }
}

/** A provider's members, the plain ones where it has none. */
class Provided                        {
                   provider                      ;

  constructor(provider                      ) {
    this.provider = provider;
  }

  translate(key        , params                          )                     {
    return this.provider.translate !== undefined ? this.provider.translate(key, params) : undefined;
  }

  language()         {
    return this.provider.language !== undefined ? this.provider.language() : documentLanguage();
  }

  languages()           {
    return this.provider.languages !== undefined ? this.provider.languages() : [this.language()];
  }

  setLanguage(language        )                          {
    if (this.provider.setLanguage !== undefined) return this.provider.setLanguage(language);
  }

  subscribe(fn            )             {
    return this.provider.subscribe !== undefined ? this.provider.subscribe(fn) : () => {};
  }
}

let host              = new Plain();
let unsubscribe             = () => {};
/** Bumped on every change of language, so a render that read the translation follows it. */
const changes = signal(0);

const changed = ()       => {
  changes.value = changes.peek() + 1;
};

/**
 * Hand the engine a translation library: a plain object or a class instance
 * whose members live on its prototype. Missing members keep the plain
 * behaviour. Its changes of language draw the renders that read it again.
 */
export const configureTranslation = (provider                      )       => {
  unsubscribe();
  host = new Provided(provider);
  unsubscribe = host.subscribe(changed);
  changed();
};

/** The translation as components read it: each read follows the changes of language. */
class Reading                        {
  translate(key        , params                          )                     {
    void changes.value;
    return host.translate(key, params);
  }

  language()         {
    void changes.value;
    return host.language();
  }

  languages()           {
    void changes.value;
    return host.languages();
  }

  setLanguage(language        )                          {
    return host.setLanguage(language);
  }

  subscribe(fn            )             {
    return host.subscribe(fn);
  }
}

/** The translation components read. */
export const translation              = new Reading();
