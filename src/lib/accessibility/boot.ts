import { A11Y_STORAGE_KEY } from "@/lib/accessibility/settings";

/**
 * Inline script for the root layout: re-applies a visitor's saved settings to <html> before anything paints, so a
 * reload never flashes the defaults. Mirrors `applyA11ySettings` and must stay in step with it.
 */
export const A11Y_BOOT_SCRIPT = `(function(){try{var s=JSON.parse(localStorage.getItem(${JSON.stringify(A11Y_STORAGE_KEY)})||"null");if(!s)return;var h=document.documentElement;function f(a,on){if(on)h.setAttribute(a,"")}function v(a,x,off){if(x!==undefined&&x!==off)h.setAttribute(a,String(x))}if(typeof s.fontScale==="number"&&s.fontScale!==1)h.style.setProperty("--a11y-font-scale",String(s.fontScale));v("data-a11y-letter-spacing",s.letterSpacing,0);v("data-a11y-line-height",s.lineHeight,0);v("data-a11y-font-weight",s.fontWeight,0);f("data-a11y-highlight-titles",s.highlightTitles===true);f("data-a11y-highlight-links",s.highlightLinks===true);f("data-a11y-dyslexia",s.dyslexiaFont===true);v("data-a11y-contrast",s.contrast,"none");v("data-a11y-saturation",s.saturation,"none");f("data-a11y-filters",(s.contrast&&s.contrast!=="none")||(s.saturation&&s.saturation!=="none"));f("data-a11y-reduce-motion",s.stopAnimations===true);f("data-a11y-big-cursor",s.bigCursor===true);f("data-a11y-reading-guide",s.readingGuide===true);f("data-a11y-screen-reader",s.screenReader===true)}catch(e){}})();`;
