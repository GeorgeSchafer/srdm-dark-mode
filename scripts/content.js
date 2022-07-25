"use strict";

function doTheThing(tab,url){

  /**
   * @const Elements
   * Here we are finding
   */
  const Elements = { 
    divs: document.getElementsByTagName("div"),
    h1: document.getElementsByTagName("h1"),
    h2: document.getElementsByTagName("h2"), 
    h3: document.getElementsByTagName("h3"), 
    h4: document.getElementsByTagName("h4"), 
    h5: document.getElementsByTagName("h5"),
    input: document.getElementsByTagName(`input[type="text"]`)
  };
  
  const Listeners = [ 
    document.onload(stripInlineStyleColors()) 
  ];
  
  const Functions = {
    stripInlineStyleColors: () => {
      const bundle = { 
        divs: Elements.divs,
        h1: Elements.h1,
        h2: Elements.h2,
        h3: Elements.h3,
        h4: Elements.h4,
        h5: Elements.h5,
        input: Elements.input
      }
  
      for(const [key,value] of Object.entries(bundle) ){
        value.forEach( (index) => {
          index.removeProperty("background-color");
          index.removeProperty("color");
          index.removeProperty("box-shadow");
        } )
      }
    }
  };
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  const url = new URL(tab.url)
  const domain = url.hostname
  // `domain` now has a value like "example.com"

  const SRDomain = (
    domain === "support.qa-smartrent.com" || 
    domain === "support.smartrent.com"|| 
    domain === "control.smartrent-qa.com" || 
    domain === "control.smartrent.com"
  );

  /** @summary IFF we are on SupportRent or CMW. 
   * Otherwise, don't do the thing. */
  if( SRDomain ){
    doTheThing(tab,url);
  }

});