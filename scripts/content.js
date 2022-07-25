"use strict";

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  const url = new URL(tab.url)
  const domain = url.hostname
  // `domain` now has a value like "example.com"

  /** @summary IFF we are on SupportRent or CMW. 
   * Otherwise, don't do the thing. */
  if(domain === "support.qa-smartrent.com" || 
     domain === "support.smartrent.com"|| 
     domain === "control.smartrent-qa.com" || 
     domain === "control.smartrent.com"){
    /* for smartrent CMW && SupportRent only */
    const Elements = { 
      divs: document.getElementsByTagName("div"), // Retrive an array of divs
      h1: document.getElementsByTagName("h1"),
      h2: document.getElementsByTagName("h2"), 
      h3: document.getElementsByTagName("h3"), 
      h4: document.getElementsByTagName("h4"), 
      h5: document.getElementsByTagName("h5"),
      input: document.getElementsByTagName("input")
    };
    
    const Listeners = [ 
      document.onload(stripInlineStyleColors())
    ];
    
    const Functions = {
      stripInlineStyleColors: () => {
        const bundle= { 
          divs: Elements.divs,
          h1: Elements.h1,
          h2: Elements.h2,
          h3: Elements.h3,
          h4: Elements.h4,
          h5: Elements.h5,
          input: Elements.input
        }
    
        for(const [key,value] of Object.entries(bundle) ){
           value.removeProperty("background-color"); // Remove inline tag
           value.removeProperty("color");  // Remove text color
           value.removeProperty("box-shadow");  // Remove box shadow
        }
    
      }
    };
  }
});
