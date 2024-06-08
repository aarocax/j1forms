export { translator, language };

import { language_es } from "./language_es";
import { language_en } from "./language_en";

function translator(phrase: string) {
  var t =
    window.location.href.indexOf("?lang=en") === -1 ? language_es : language_en;
  return phrase in t ? t[phrase] : phrase;
}

function language() {
  return window.location.href.indexOf("?lang=en") === -1 ? "es" : "en";
}
