console.log("WebArtino JS: Status: Initialised");
export const webBody = "webBody";
/*export const WebArtinoButtonTypes = {
    defaultButton: defaultButton,
    roundedButton: roundedButton,
    darkButton: darkButton,
    lightButton: lightButton,
    HTMLbutton: HTMLbutton
}
export const insertionZones = {
   webBody: webBody
}*/
export const webText = "p";
export const HTMLbutton = "buttonHTML";
export const webButton = "buttonWebArtino";
export const roundedButton = "roundedButton";
export const darkButton = "darkButton";
export const lightButton = "lightButton";
export const webLayout = "div";
export const webHead1 = "h1";
export const webHead2 = "h2";
export const webHead3 = "h3";
export const webHead4 = "h4";
export const webHead5 = "h5";
export const webHead6 = "h6";
export const webImage = "img";
export var auto = "WebArtinoElementId" + String(Math.floor(Math.random() * 1000000000000000000));
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
    writeHTML: function writeHTML(element, html) {
        if (html === undefined) {
            console.error("WebArtino Exception: HTML text or Element can never be undefined!");
        }else{
            return element.innerHTML = html;
        }
        console.log("WebArtino Usage Tracked: Used the writeHTML method");
    },
    getBody: function getBody() {
        return document.body;
    } ,
    // Gets the HTML content inside a particular element
    getHTML: function getHTML(element) {
        if (element === undefined) {
            console.error("WebArtino Exception: Cannot get the html text of undefined element!");
        }else{
            return element.innerHTML;
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
    //Changes the title of your html page
    setTitle: function setTitle(title) {
        if (title === undefined) {
           this.logError("WebArtino Exception: The title of HTML document can never be undefined!");
        }else {
            document.title = title;
        }
    },
   // Sets the image for your webImage element
   setImage: function setImage(element, src) {
       if (element === undefined) {
           this.logError("WebArtino Exception: The element can never be undefined!")
   }else if(src === undefined) {
          this.logError("WebArtino Exception: The URL can never be undefined")
   }else{
       element.src = src;
   }
},
   getBody: function getBody() {
     return document.body;
   },
  removeElem: function removeElem(element) {
     if (element === undefined) {
         this.logError("WebArtino Exception: The element can never be undefined!")
     }else{
         element.remove();
     }
  },

  createElem: function createElem(element, text, id, target) {
      if (element === undefined) {
          this.logError("WebArtino Exception: The Tag of element can never be undefined!");       
        }else if(element === webText) {
         if (text === undefined) {
             this.logError("The text of webText can never be undefined!")
         }else {
             if (id === undefined) {
                 this.logError("The ID of webText can never be undefined!")
             }else{
                 if (target === undefined) {
                     this.logError("The target of webText can never be undefined!")
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
                    target.appendChild(webP);
                    return this.byId(id);    
                    }
                 }
             }
         }
        }else if(element === HTMLbutton) {
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
                   target.appendChild(webP);
                   return this.byId(id);   
                   }
                }
            }
        }else if(element === webImage) {
            if(id === undefined) {
               this.logError("The ID of webImage element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of webImage element can never be undefined");
             }else{
                 if (target === webBody) {
                       const webP = document.createElement("img")
                   webP.src = text;
                   webP.id = id;
                   webP.alt = "WebArtino WebImage Element";
                   document.body.appendChild(webP);
                   return this.byId(id);  
                   }else{
                       const webP = document.createElement("img")
                   webP.src = text;
                   webP.id = id;
                   webP.alt = "WebArtino WebImage Element";
                   target.appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if(element === webHead1) {
          if(id === undefined) {
               this.logError("The ID of webHead element can never be undefined!")
               return undefined;
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of webHead element can never be undefined");
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
                   target.appendChild(webP)
                   return this.byId(id);   
                   }
            }  
        }
    }else if(element === webHead2) {
           if(id === undefined) {
               this.logError("The ID of webHead element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of webHead element can never be undefined");
             }else{
                 if (target === webBody) {
                       const webP = document.createElement("h2")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "1.5em";
                   document.body.appendChild(webP)
                   return this.byId(id);  
                   }else{
                       const webP = document.createElement("h2")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "1.5em";
                   target.appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if(element === webHead3) {
        if(id === undefined) {
               this.logError("The ID of webHead element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of webHead element can never be undefined");
             }else{
                 if (target === webBody) {
                       const webP = document.createElement("h3")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "1.17em";
                   document.body.appendChild(webP);
                   return this.byId(id);
                   }else{
                       const webP = document.createElement("h3")
                   webP.innerHTML = text;
                   webP.id = id;
                   webP.style.fontSize = "1.17em";
                   target.appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if(element === webHead4) {
          if(id === undefined) {
               this.logError("The ID of webHead element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of webHead element can never be undefined");
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
                   target.appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if(element === webHead5) {
            if(id === undefined) {
               this.logError("The ID of webHead element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of webHead element can never be undefined");
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
                   target.appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if(element === webHead6) {
        if(id === undefined) {
               this.logError("The ID of webHead element can never be undefined!")
            }else{
             if (target === undefined) {
               this.logError(undefined);
               this.logError("The target of webHead element can never be undefined");
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
                   target.appendChild(webP);
                   return this.byId(id);    
                   }
            }
        }
    }else if (element === webLayout) {
        if(id === undefined) {
            this.logError("The ID of webLayout element can never be undefined!")
         }else{
          if (target === undefined) {
            this.logError(undefined);
            this.logError("The target of webLayout element can never be undefined");
          }else{
              if (target === webBody) {
                    const webP = document.createElement("div")
                webP.id = id;
                webP.style.width = "100%";
                webP.style.height = "fit-content";
                document.body.appendChild(webP);
                return this.byId(id);  
                }else{
                    const webP = document.createElement("div")
                    webP.id = id;
                    webP.style.width = "100%";
                    webP.style.height = "fit-content";
                target.appendChild(webP);
                return this.byId(id);    
                }
         }
     }
    }else if (element === webButton) {
    if(id === undefined) {
        this.logError("The ID of webButton element can never be undefined!")
     }else{
      if (target === undefined) {
        this.logError(undefined);
        this.logError("The target of webButton element can never be undefined");
      }else{
          if (target === webBody) {
                const webP = document.createElement("button")
                webP.style.fontWeight = "bold";
                webP.style.backgroundColor = "#ff0077";
                webP.style.color = "white";
                webP.style.height = "40px";
                webP.style.border = "18px";
                webP.style.fontSize = ""
                webP.innerHTML = text;
                if (text.length >= 7) {
                    webP.style.width = "fit-content";
                    document.body.appendChild(webP);
                }else{
                    webP.style.width = "10em";
                    document.body.appendChild(webP);
                }  
                return this.byId(id);
            }else{
                const webP = document.createElement("button")
                webP.style.fontWeight = "bold";
                webP.style.backgroundColor = "#ff0077";
                webP.style.color = "white";
                webP.style.height = "40px";
                webP.innerHTML = text;
                webP.style.border = "none";
                webP.style.fontSize = "18px";
                if (text.length >= 7) {
                    webP.style.width = "fit-content";
                    target.appendChild(webP);
                }else{
                    webP.style.width = "10em";
                    target.appendChild(webP);
                }
            return this.byId(id);    
            }
     }
 }
}else{
        this.logError("WebArtino Elements Exception: Unable to create a element called " + element);
        }
    }
}