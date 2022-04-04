console.log("WebArtino JS: Status: Initialised");
export const defaultButton = "WebArtino Button Class: Default Button";
export const roundedButton = "WebArtino Button Class: Rounded Button";
export const darkButton = "WebArtino Button Class: Dark Button";
export const lightButton = "WebArtino Button Class: Light Button";
export const HTMLbutton = "WebArtino HTML Button class: Default HTML button";
export const webBody = "webBody";
export const WebArtinoButtonTypes = {
    defaultButton: defaultButton,
    roundedButton: roundedButton,
    darkButton: darkButton,
    lightButton: lightButton,
    HTMLbutton: HTMLbutton
}
export const insertionZones = {
   webBody: webBody
}
export var auto = "WebArtinoElementId" + String(Math.floor(Math.random() * 10));
export const WebArtino = {
    //Show Alert message by using "WebArtino.showAlertMessage(<Here goes your message>);"
    showAlertMessage: function showMessage(message) {
        if (message === undefined) {
            console.error("WebArtino Exception: Alert message can never be undefined!");
        }else{
            alert(message)
            console.log("WebArtino Usage Tracked: Showed the alert message as '" + message + "'");
            console.log("WebArtino Usage Tracked: Used showAlertMessage method");
        }
     },

     //Returns the raw code document.getElementById();
    byId: function byId(elementId) {
      if (elementId === undefined) {
          console.error("WebArtino Exception: Element Id can never be undefined!");
      }else{
          console.log("WebArtino Usage Tracked: Used the byId method.");
          console.log("WebArtino Usage Tracked: Got the element having id as " + elementId);
          return document.getElementById(elementId);
      }
    },
    // Returns the raw code document.getElementsByClassName();
    byClass: function byClass(elementsClass) {
       if (elementClass === undefined) {
           console.error("WebArtino Exception: Element Class can never be undefined!");
       }else{
           return document.getElementsByClassName(elementsClass);
       }
       console.log("WebArtino Usage Tracked: Used the byClass method");
    },
     // Returns the raw code document.getElementsByTagName();
    byTag: function byTag(elementsTag) {
      if (elementsTag === undefined) {
          console.error("WebArtino Exception: Element tag can never be undefined!");
      }else{
          return document.getElementsByTagName(elementsTag);
      }
    console.log("WebArtino Usage Tracked: Used the byTag method");
    },
    //Returns document.querySelector();
    byQuery: function byQuery(elementQuery) {
        if (elementQuery === undefined) {
            console.error("WebArtino Exception: Element query can never be undefined!");
        }else{
            return document.querySelector(elementQuery);
        }
        console.log("WebArtino Usage Tracked: Used the byQuery method");
    },
    // Writes the html content inside a particular element
    writeHTML: function writeHTML(elementId, html) {
        if (html === undefined) {
            console.error("WebArtino Exception: HTML text or Element Id can never be undefined!");
        }else{
            return document.getElementById(elementId).innerHTML = html;
        }
        console.log("WebArtino Usage Tracked: Used the writeHTML method");
    },
    getBody: function getBody() {
        return document.body;
    } ,
    // Gets the HTML content inside a particular element
    getHTML: function getHTML(elementId) {
        if (elementId === undefined) {
            console.error("WebArtino Exception: Cannot get the html text of undefined element!");
        }else{
            return document.getElementById(elementId).innerHTML;
        }
        console.log("WebArtino Usage Tracked: Used the getHTML method")
    },
    // Opens a new page in the same tab
    openLink: function openLink(URL) {
        if (URL === undefined) {
           console.error("WebArtino Exception: URL can never be undefined!");
        }else{
            location.href = URL;
        }
        console.log("WebArtino Usage tracked: Used the openLink method");
    },
    /* Opens a new page in a new tab or a new browser window depending upon your
    browser configuration*/
    openNewLink: function openNewLink(URL) {
       if (URL === undefined) {
           console.error("WebArtino Exception: URL can never be undefined!");
       }else{
           window.open(URL);
           console.log("WebArtino Usage Tracked: Used the openNewLink method");
       }
    },
    // Closes the new tab opened
    closeLink: function closeLink() {
        window.close();
    },
    // Logs a new console message
    logMessage: function logMessage(logMessage) {
      if (logMessage === undefined) {
          console.error("WebArtino Exception: Log message can never be undefined!");
      }else{
          console.log(logMessage)
      }
    },
    // Logs an error message in the console
    logError: function logError(errorMessage) {
      if (errorMessage === undefined) {
          console.error("WebArtino Exception: Error message can never be undefined!");
      }else{
          console.error(errorMessage)
      }
    },
    // Logs a warning in the console
    logWarning: function logWarning(warningMessage) {
        if (warningMessage === undefined) {
            console.error("WebArtino Exception: Warning message can never be undefined");
        }else{
            console.warn(warningMessage);
        }
    },
    // Clears all the logs in the console
    clearLogs: function clearLogs() {
        console.clear();
    },
    // Lists all the items in an array using for loop as the raw code
    listAll: function listAll(array) {
        if (array === undefined) {
            WebArtino.logError("WebArtino Exception: Array can never be undefined!");
        }else{
            for (var i = 0; i <= array.length; i++) {
                return array[i];
            }
        }
    },
    newElem: function newElem(elemTag) {
        if (elemTag === undefined) {
            console.error("WebArtino Exception: Element tag can never be undefined!");
        }else{
            return document.createElement(elemTag);
        }
    },
    //Reloads the page
    reloadPage: function reloadPage() {
        location.reload();
        WebArtino.logMessage("Successfully reloaded the page!");
    },
    setTitle: function setTitle(title) {
        if (title === undefined) {
           this.logError("WebArtino Exception: The title of HTML document can never be undefined!");
        }else {
            document.title = title;
        }
    },
   
   setImage: function setImage(elementId, src) {
       if (elementId === undefined) {
           this.logError("WebArtino Exception: The id of element can never be undefined!")
   }else if(src === undefined) {
          this.logError("WebArtino Exception: The URL can never be undefined")
   }else{
       this.byId(elementId).src = src;
   }
},
 
  removeElem: function removeElem(elementId) {
     if (elementId === undefined) {
         this.logError("WebArtino Exception: The Id of the element can never be undefined!")
     }else{
         this.byId(elementId).remove();
     }
  },

  createElem: function createElem(element, text, id, target) {
      if (element === undefined) {
          this.logError("WebArtino Exception: The Tag of element can never be undefined!");       
        }else if(element === "p") {
         if (text === undefined) {
             this.logError("The text of p can never be undefined!")
         }else {
             if (id === undefined) {
                 this.logError("The ID of p can never be undefined!")
             }else{
                 if (target === undefined) {
                     this.logError("The target of p can never be undefined!")
                 }else{
                    if (target === webBody) {
                        const webP = document.createElement("p")
                    webP.innerHTML = text;
                    webP.id = id;
                    webP.style.fontSize = "18px";
                    document.body.appendChild(webP);
                    return this.byId(id);
                    }else{
                        const webP = document.createElement("p")
                    webP.innerHTML = text;
                    webP.id = id;
                    webP.style.fontSize = "18px";
                    this.byId(target).appendChild(webP);
                    return this.byId(id)    
                    }
                 }
             }
         }
        }else if(element === "button") {
            if (id === undefined) {
                this.logError("The ID of button can never be undefined!")
            }else{
                if (target === undefined) {
                    this.logError("The target of button can never be undefined!")
                }else{
                   if (target === webBody) {
                       const webP = document.createElement("button")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "18px";
                   document.body.appendChild(webP);
                   return this.byId(id);   
                   }else{
                       const webP = document.createElement("button")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "18px";
                   this.byId(target).appendChild(webP);
                   return this.byId(id);   
                   }
                }
            }
        }else if(element === "img") {
            if(id === undefined) {
               this.logError("The ID of image element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of Image element can never be undefined");
             }else{
                 if (target === webBody) {
                       const webP = document.createElement("img")
                   webP.src = text;
                   webP.id = id;
                   webP.alt = "WebArtino Image Element";
                   document.body.appendChild(webP);
                   return this.byId(id);  
                   }else{
                       const webP = document.createElement("img")
                   webP.src = text;
                   webP.id = id;
                   webP.alt = "WebArtino Image Element";
                   this.byId(target).appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if(element === "h1") {
          if(id === undefined) {
               this.logError("The ID of h1 element can never be undefined!")
               return undefined;
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of h1 element can never be undefined");
               return undefined;  
             }else{
                 if (target === webBody) {
                       const webP = document.createElement("h1")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "2em";
                   document.body.appendChild(webP)
                   }else{
                       const webP = document.createElement("h1")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "2em";
                   this.byId(target).appendChild(webP)
                   return this.byId(id);   
                   }
            }  
        }
    }else if(element === "h2") {
           if(id === undefined) {
               this.logError("The ID of h2 element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of h2 element can never be undefined");
             }else{
                 if (target === webBody) {
                       const webP = document.createElement("h2")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.stylr.fontSize = "1.5em";
                   document.body.appendChild(webP)
                   return this.byId(id);  
                   }else{
                       const webP = document.createElement("h2")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "1.5em";
                   this.byId(target).appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if(element === "h3") {
        if(id === undefined) {
               this.logError("The ID of h3 element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of h3 element can never be undefined");
             }else{
                 if (target === webBody) {
                       const webP = document.createElement("h3")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.stylr.fontSize = "1.17em";
                   document.body.appendChild(webP);
                   return this.byId(id);
                   }else{
                       const webP = document.createElement("h3")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "1.17em";
                   this.byId(target).appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if(element === "h4") {
          if(id === undefined) {
               this.logError("The ID of h4 element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of h4 element can never be undefined");
             }else{
                 if (target === webBody) {
                       const webP = document.createElement("h4")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "1em";
                   document.body.appendChild(webP);
                   return this.byId(id);
                   }else{
                       const webP = document.createElement("h4")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "1em";
                   this.byId(target).appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if(element === "h5") {
            if(id === undefined) {
               this.logError("The ID of h5 element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of h5 element can never be undefined");
             }else{
                 if (target === webBody) {
                       const webP = document.createElement("h5")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "0.83em";
                   document.body.appendChild(webP);
                   return this.byId(id);
                   }else{
                       const webP = document.createElement("h4")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "0.83em";
                   this.byId(target).appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if(element === "h6") {
        if(id === undefined) {
               this.logError("The ID of h6 element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of h6 element can never be undefined");
             }else{
                 if (target === webBody) {
                       const webP = document.createElement("h6")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "0.83em";
                   document.body.appendChild(webP);
                   return this.byId(id);  
                   }else{
                       const webP = document.createElement("h6")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "0.83em";
                   this.byId(target).appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else{
         this.logError("WebArtino Elements Exception: Unable to create a element called " + element);
        }
    }
}