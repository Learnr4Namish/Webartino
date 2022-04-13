import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
console.log("WebArtino JS: Status: Initialised");
export const webBody = document.body;
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
export const simpleWebButton = "Simple Web Button";
export const webLayout = "div";
export const webHead1 = "h1";
export const webHead2 = "h2";
export const webHead3 = "h3";
export const webHead4 = "h4";
export const webHead5 = "h5";
export const webHead6 = "h6";
export const webImage = "img";
export const webCode = "code";
export const webList = "webList";
export const googleLoginButton = "googleLoginButton";
export const webCircleButton = "webCircleButton";
/*
@deprecated
export var auto = "WebArtinoElementId" + String(Math.floor(Math.random() * 1000000000000000000));
Don't use this! This has become deprecated and no longer used!
*/
export const WebArtino = {
    setWebStyle: function() {
    const linkRe = document.createElement("link");
    linkRe.rel = "stylesheet";
    linkRe.href = "https://webartino.pages.link/webartino.css";
    document.head.appendChild(linkRe);
     document.body.className = "material-body-noto";
    },
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
  //@deprecated Has become deprecated since version 2.0! Please use WebArtinoUI.create() method instead!
  createElem: function createElem(element, text, id, target) {
      this.logWarning("WebArtino Deprecated method Usage: You are using a deprecated WebArtino method! Please change it to new one!");
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
                webP.style.width = "fit-content";
                webP.style.height = "fit-content";
                document.body.appendChild(webP);
                return this.byId(id);  
                }else{
                    const webP = document.createElement("div")
                    webP.id = id;
                    webP.style.width = "fit-content";
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
                webP.id = id;
                webP.style.backgroundColor = "#ff0077";
                webP.style.color = "white";
                webP.style.height = "40px";
                webP.style.border = "none";
                webP.style.fontSize = "16px";
                webP.style.borderRadius = "5px";
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
                webP.id = id;
                webP.style.backgroundColor = "#ff0077";
                webP.style.color = "white";
                webP.style.height = "40px";
                webP.innerHTML = text;
                webP.style.border = "none";
                webP.style.fontSize = "16px";
                webP.style.borderRadius = "5px";
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
}
else{
    //In development!
        }
    },
    setClass: function setClass(element, className){
      if (element === undefined) {
          this.logError("WebArtino Exception: Element can never be undefined!");
      }else if(className === undefined) {
          this.logError("WebArtino Exception: Class Name(String) can never be undefined!");
      }else{
        element.className = className;
      }
    },
    makeBold: function makeBold(element) {
        if (element === undefined) {
            this.logError("WebArtino Exception: Element can never be undefined!");
        }else{
            element.style.fontWeight = "bold";
        }
    }
}
export const WebArtinoUI = {
    create: function createElem(element, text, id, target) {
        if (element === undefined) {
            WebArtino.logError("WebArtino Exception: The Tag of element can never be undefined!");       
          }else if(element === webText) {
           if (text === undefined) {
               WebArtino.logError("The text of webText can never be undefined!")
           }else {
               if (id === undefined) {
                   WebArtino.logError("The ID of webText can never be undefined!")
               }else{
                   if (target === undefined) {
                       WebArtino.logError("The target of webText can never be undefined!")
                   }else{
                      if (target === webBody) {
                          const webP = document.createElement("p")
                      webP.innerHTML = text;
                      webP.id = id;
                      webP.style.fontSize = "18px";
                      document.body.appendChild(webP);
                      return WebArtino.byId(id);
                      }else{
                          const webP = document.createElement("p")
                      webP.innerHTML = text;
                      webP.id = id;
                      webP.style.fontSize = "18px";
                      target.appendChild(webP);
                      return WebArtino.byId(id);    
                      }
                   }
               }
           }
          }else if(element === HTMLbutton) {
              if (id === undefined) {
                  WebArtino.logError("The ID of button can never be undefined!")
              }else{
                  if (target === undefined) {
                      WebArtino.logError("The target of button can never be undefined!")
                  }else{
                     if (target === webBody) {
                         const webP = document.createElement("button")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "18px";
                     document.body.appendChild(webP);
                     return WebArtino.byId(id);   
                     }else{
                         const webP = document.createElement("button")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "18px";
                     target.appendChild(webP);
                     return WebArtino.byId(id);   
                     }
                  }
              }
          }else if(element === webImage) {
              if(id === undefined) {
                 WebArtino.logError("The ID of webImage element can never be undefined!")
              }else{
               if (target === undefined) {
                 WebArtino.logError(undefined);
                 WebArtino.logError("The target of webImage element can never be undefined");
               }else{
                   if (target === webBody) {
                         const webP = document.createElement("img")
                     webP.src = text;
                     webP.id = id;
                     webP.alt = "WebArtino WebImage Element";
                     document.body.appendChild(webP);
                     return WebArtino.byId(id);  
                     }else{
                         const webP = document.createElement("img")
                     webP.src = text;
                     webP.id = id;
                     webP.alt = "WebArtino WebImage Element";
                     target.appendChild(webP);
                     return WebArtino.byId(id);    
                     }
              }
          }
      }else if(element === webHead1) {
            if(id === undefined) {
                 WebArtino.logError("The ID of webHead element can never be undefined!")
                 return undefined;
              }else{
               if (target === undefined) {
                 WebArtino.logError(undefined);
                 WebArtino.logError("The target of webHead element can never be undefined");
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
                     return WebArtino.byId(id);   
                     }
              }  
          }
      }else if(element === webHead2) {
             if(id === undefined) {
                 WebArtino.logError("The ID of webHead element can never be undefined!")
              }else{
               if (target === undefined) {
                 WebArtino.logError(undefined);
                 WebArtino.logError("The target of webHead element can never be undefined");
               }else{
                   if (target === webBody) {
                         const webP = document.createElement("h2")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "1.5em";
                     document.body.appendChild(webP)
                     return WebArtino.byId(id);  
                     }else{
                         const webP = document.createElement("h2")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "1.5em";
                     target.appendChild(webP);
                     return WebArtino.byId(id);    
                     }
              }
          }
      }else if(element === webHead3) {
          if(id === undefined) {
                 WebArtino.logError("The ID of webHead element can never be undefined!")
              }else{
               if (target === undefined) {
                 WebArtino.logError(undefined);
                 WebArtino.logError("The target of webHead element can never be undefined");
               }else{
                   if (target === webBody) {
                         const webP = document.createElement("h3")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "1.17em";
                     document.body.appendChild(webP);
                     return WebArtino.byId(id);
                     }else{
                         const webP = document.createElement("h3")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "1.17em";
                     target.appendChild(webP);
                     return WebArtino.byId(id);    
                     }
              }
          }
      }else if(element === webHead4) {
            if(id === undefined) {
                 WebArtino.logError("The ID of webHead element can never be undefined!")
              }else{
               if (target === undefined) {
                 WebArtino.logError(undefined);
                 WebArtino.logError("The target of webHead element can never be undefined");
               }else{
                   if (target === webBody) {
                         const webP = document.createElement("h4")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "1em";
                     document.body.appendChild(webP);
                     return WebArtino.byId(id);
                     }else{
                         const webP = document.createElement("h4")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "1em";
                     target.appendChild(webP);
                     return WebArtino.byId(id);    
                     }
              }
          }
      }else if(element === webHead5) {
              if(id === undefined) {
                 WebArtino.logError("The ID of webHead element can never be undefined!")
              }else{
               if (target === undefined) {
                 WebArtino.logError(undefined);
                 WebArtino.logError("The target of webHead element can never be undefined");
               }else{
                   if (target === webBody) {
                         const webP = document.createElement("h5")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "0.83em";
                     document.body.appendChild(webP);
                     return WebArtino.byId(id);
                     }else{
                         const webP = document.createElement("h4")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "0.83em";
                     target.appendChild(webP);
                     return WebArtino.byId(id);    
                     }
              }
          }
      }else if(element === webHead6) {
          if(id === undefined) {
                 WebArtino.logError("The ID of webHead element can never be undefined!")
              }else{
               if (target === undefined) {
                 WebArtino.logError(undefined);
                 WebArtino.logError("The target of webHead element can never be undefined");
               }else{
                   if (target === webBody) {
                         const webP = document.createElement("h6")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "0.83em";
                     document.body.appendChild(webP);
                     return WebArtino.byId(id);  
                     }else{
                         const webP = document.createElement("h6")
                     webP.innerHTML = text;
                     webP.id = id;
                     webP.style.fontSize = "0.83em";
                     target.appendChild(webP);
                     return WebArtino.byId(id);    
                     }
              }
          }
      }else if (element === webLayout) {
          if(id === undefined) {
              WebArtino.logError("The ID of webLayout element can never be undefined!")
           }else{
            if (target === undefined) {
              WebArtino.logError(undefined);
              WebArtino.logError("The target of webLayout element can never be undefined");
            }else{
                if (target === webBody) {
                      const webP = document.createElement("div")
                  webP.id = id;
                  webP.style.width = "fit-content";
                  webP.style.height = "fit-content";
                  document.body.appendChild(webP);
                  return WebArtino.byId(id);  
                  }else{
                      const webP = document.createElement("div")
                      webP.id = id;
                      webP.style.width = "fit-content";
                      webP.style.height = "fit-content";
                  target.appendChild(webP);
                  return WebArtino.byId(id);    
                  }
           }
       }
      }else if (element === webButton) {
      if(id === undefined) {
          WebArtino.logError("The ID of webButton element can never be undefined!")
       }else{
        if (target === undefined) {
          WebArtino.logError(undefined);
          WebArtino.logError("The target of webButton element can never be undefined");
        }else{
            if (target === webBody) {
                  const webP = document.createElement("button")
                  webP.style.fontWeight = "bold";
                  webP.id = id;
                  webP.style.backgroundColor = "#ff0077";
                  webP.style.color = "white";
                  webP.style.height = "40px";
                  webP.style.border = "none";
                  webP.style.fontSize = "16px";
                  webP.style.borderRadius = "5px";
                  webP.innerHTML = text;
                  if (text.length >= 7) {
                      webP.style.width = "fit-content";
                      document.body.appendChild(webP);
                  }else{
                      webP.style.width = "10em";
                      document.body.appendChild(webP);
                  }  
                  return WebArtino.byId(id);
              }else{
                  const webP = document.createElement("button")
                  webP.style.fontWeight = "bold";
                  webP.id = id;
                  webP.style.backgroundColor = "#ff0077";
                  webP.style.color = "white";
                  webP.style.height = "40px";
                  webP.innerHTML = text;
                  webP.style.border = "none";
                  webP.style.fontSize = "16px";
                  webP.style.borderRadius = "5px";
                  if (text.length >= 7) {
                      webP.style.width = "fit-content";
                      target.appendChild(webP);
                  }else{
                      webP.style.width = "10em";
                      target.appendChild(webP);
                  }
              return WebArtino.byId(id);    
              }
       }
   }
  }
  else if(element === roundedButton){
    if(id === undefined) {
        WebArtino.logError("The ID of roundedButton element can never be undefined!")
     }else{
      if (target === undefined) {
        WebArtino.logError(undefined);
        WebArtino.logError("The target of roundedButton element can never be undefined");
      }else{
          if (target === webBody) {
                const webP = document.createElement("button")
                webP.style.fontWeight = "bold";
                webP.id = id;
                webP.style.backgroundColor = "#ff0077";
                webP.style.color = "white";
                webP.style.height = "40px";
                webP.style.border = "none";
                webP.style.fontSize = "16px";
                webP.style.borderRadius = "100%";
                webP.innerHTML = text;
                if (text.length >= 7) {
                    webP.style.width = "fit-content";
                    document.body.appendChild(webP);
                }else{
                    webP.style.width = "10em";
                    document.body.appendChild(webP);
                }  
                return WebArtino.byId(id);
            }else{
                const webP = document.createElement("button")
                webP.style.fontWeight = "bold";
                webP.id = id;
                webP.style.backgroundColor = "#ff0077";
                webP.style.color = "white";
                webP.style.height = "40px";
                webP.innerHTML = text;
                webP.style.border = "none";
                webP.style.fontSize = "16px";
                webP.style.borderRadius = "100%";
                if (text.length >= 7) {
                    webP.style.width = "fit-content";
                    target.appendChild(webP);
                }else{
                    webP.style.width = "10em";
                    target.appendChild(webP);
                }
            return WebArtino.byId(id);    
            }
     }
 }
          }else if(element === simpleWebButton) {
            if(id === undefined) {
                WebArtino.logError("The ID of simpleWebButton element can never be undefined!")
             }else{
              if (target === undefined) {
                WebArtino.logError(undefined);
                WebArtino.logError("The target of simpleWebButton element can never be undefined");
              }else{
                  if (target === webBody) {
                        const webP = document.createElement("button")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.backgroundColor = "#ff0077";
                        webP.style.color = "white";
                        webP.style.height = "40px";
                        webP.style.border = "none";
                        webP.style.fontSize = "16px";
                        webP.style.borderRadius = "0";
                        webP.innerHTML = text;
                        if (text.length >= 7) {
                            webP.style.width = "fit-content";
                            document.body.appendChild(webP);
                        }else{
                            webP.style.width = "10em";
                            document.body.appendChild(webP);
                        }  
                        return WebArtino.byId(id);
                    }else{
                        const webP = document.createElement("button")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.backgroundColor = "#ff0077";
                        webP.style.color = "white";
                        webP.style.height = "40px";
                        webP.innerHTML = text;
                        webP.style.border = "none";
                        webP.style.fontSize = "16px";
                        webP.style.borderRadius = "0";
                        if (text.length >= 7) {
                            webP.style.width = "fit-content";
                            target.appendChild(webP);
                        }else{
                            webP.style.width = "10em";
                            target.appendChild(webP);
                        }
                    return WebArtino.byId(id);    
                    }
             }
         }
          }else if(element === lightButton) {
            if(id === undefined) {
                WebArtino.logError("The ID of lightButton element can never be undefined!")
             }else{
              if (target === undefined) {
                WebArtino.logError(undefined);
                WebArtino.logError("The target of lightButton element can never be undefined");
              }else{
                  if (target === webBody) {
                        const webP = document.createElement("button")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.backgroundColor = "#ffffff";
                        webP.style.color = "black";
                        webP.style.height = "40px";
                        webP.style.border = "none";
                        webP.style.fontSize = "16px";
                        webP.style.borderRadius = "5px";
                        webP.innerHTML = text;
                        if (text.length >= 7) {
                            webP.style.width = "fit-content";
                            document.body.appendChild(webP);
                        }else{
                            webP.style.width = "10em";
                            document.body.appendChild(webP);
                        }  
                        return WebArtino.byId(id);
                    }else{
                        const webP = document.createElement("button")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.backgroundColor = "#ffffff";
                        webP.style.color = "black";
                        webP.style.height = "40px";
                        webP.innerHTML = text;
                        webP.style.border = "none";
                        webP.style.fontSize = "16px";
                        webP.style.borderRadius = "5px";
                        if (text.length >= 7) {
                            webP.style.width = "fit-content";
                            target.appendChild(webP);
                        }else{
                            webP.style.width = "10em";
                            target.appendChild(webP);
                        }
                    return WebArtino.byId(id);    
                    }
             }
         }
          }else if(element === darkButton) {
            if(id === undefined) {
                WebArtino.logError("The ID of darkButton element can never be undefined!")
             }else{
              if (target === undefined) {
                WebArtino.logError(undefined);
                WebArtino.logError("The target of darkButton element can never be undefined");
              }else{
                  if (target === webBody) {
                        const webP = document.createElement("button")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.backgroundColor = "#000000";
                        webP.style.color = "white";
                        webP.style.height = "40px";
                        webP.style.border = "none";
                        webP.style.fontSize = "16px";
                        webP.style.borderRadius = "5px";
                        webP.innerHTML = text;
                        if (text.length >= 7) {
                            webP.style.width = "fit-content";
                            document.body.appendChild(webP);
                        }else{
                            webP.style.width = "10em";
                            document.body.appendChild(webP);
                        }  
                        return WebArtino.byId(id);
                    }else{
                        const webP = document.createElement("button")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.backgroundColor = "#000000";
                        webP.style.color = "white";
                        webP.style.height = "40px";
                        webP.innerHTML = text;
                        webP.style.border = "none";
                        webP.style.fontSize = "16px";
                        webP.style.borderRadius = "5px";
                        if (text.length >= 7) {
                            webP.style.width = "fit-content";
                            target.appendChild(webP);
                        }else{
                            webP.style.width = "10em";
                            target.appendChild(webP);
                        }
                    return WebArtino.byId(id);    
                    }
             }
         }
          }else if(element === webCircleButton) {
            if(id === undefined) {
                WebArtino.logError("The ID of webCircleButton element can never be undefined!")
             }else{
              if (target === undefined) {
                WebArtino.logError(undefined);
                WebArtino.logError("The target of webCircleButton element can never be undefined");
              }else{
                  if (target === webBody) {
                        const webP = document.createElement("button")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.backgroundColor = "#ff0077";
                        webP.style.color = "white";
                        webP.style.height = "120px";
                        webP.style.border = "none";
                        webP.style.fontSize = "16px";
                        webP.style.borderRadius = "0";
                        webP.innerHTML = text;
                        if (text.length >= 7) {
                            webP.style.width = "fit-content";
                            document.body.appendChild(webP);
                        }else{
                            webP.style.width = "10em";
                            document.body.appendChild(webP);
                        }  
                        return WebArtino.byId(id);
                    }else{
                        const webP = document.createElement("button")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.backgroundColor = "#ff0077";
                        webP.style.color = "white";
                        webP.style.height = "120px";
                        webP.innerHTML = text;
                        webP.style.border = "none";
                        webP.style.fontSize = "16px";
                        webP.style.borderRadius = "100";
                        if (text.length >= 7) {
                            webP.style.width = "fit-content";
                            target.appendChild(webP);
                        }else{
                            webP.style.width = "10em";
                            target.appendChild(webP);
                        }
                    return WebArtino.byId(id);    
                    }
             }
         }
          }else if(element === googleLoginButton) {
            if(id === undefined) {
                WebArtino.logError("The ID of googleLoginButton element can never be undefined!")
             }else{
              if (target === undefined) {
                WebArtino.logError(undefined);
                WebArtino.logError("The target of googleLoginButton element can never be undefined");
              }else{
                  if (target === webBody) {
                        const webP = document.createElement("button")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.backgroundColor = "#ff0077";
                        webP.style.color = "white";
                        webP.style.height = "40px";
                        webP.style.border = "none";
                        webP.style.fontSize = "16px";
                        webP.style.borderRadius = "0";
                        webP.innerHTML = "LOGIN WITH GOOGLE";
                        if (text.length >= 7) {
                            webP.style.width = "fit-content";
                            document.body.appendChild(webP);
                        }else{
                            webP.style.width = "10em";
                            document.body.appendChild(webP);
                        }  
                        return WebArtino.byId(id);
                    }else{
                        const webP = document.createElement("button")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.backgroundColor = "#ff0077";
                        webP.style.color = "white";
                        webP.style.height = "40px";
                        webP.innerHTML = "LOGIN WITH GOOGLE";
                        webP.style.border = "none";
                        webP.style.fontSize = "16px";
                        webP.style.borderRadius = "0";
                        if (text.length >= 7) {
                            webP.style.width = "fit-content";
                            target.appendChild(webP);
                        }else{
                            webP.style.width = "10em";
                            target.appendChild(webP);
                        }
                    return WebArtino.byId(id);    
                    }
             }
         }
        }
          else if(element === webBulletList) {
            if(id === undefined) {
                WebArtino.logError("The ID of webBulletList element can never be undefined!")
             }else{
              if (target === undefined) {
                WebArtino.logError(undefined);
                WebArtino.logError("The target of webBulletList element can never be undefined");
              }else{
                  if (target === webBody) {
                        const webP = document.createElement("ul")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.listStyle = "disc inside";
                        document.body.appendChild(webP);
                        return WebArtino.byId(id);
                    }else{
                        const webP = document.createElement("ul")
                        webP.style.fontWeight = "bold";
                        webP.id = id;
                        webP.style.listStyle = "disc inside";
                        target.appendChild(webP);
                    return WebArtino.byId(id);    
                    }
             }
         }
          }
      },
      insertListItem: function insertListItem(list, item) {
         if (list.tagName === "ul") {
             WebArtino.logMessage("WebArtino Usage Tracked | Used the insertListItem Method");
            list.innerHTML += item;
            }else{
             WebArtino.logError("WebArtino| WebArtinoUI: Fatal Exception: The insertListItem method can only be used on webList element!");
         }
      },
      readyHTML: function readyHTML(element){
          if (element === "undefined") {
              WebArtino.logMessage("WebArtino Fatal Exception: readyHTML carries the element parameter bu null specified!");
          }else{
              return element;
          }
      }
}
export const WebFirebaseConfig = {
        apiKey: null,
        authDomain: null,
        projectId: null,
        storageBucket: null,
        messagingSenderId: null,
        appId: null
}
export const WebFirebase = {
    init: function init() {
        const app = initializeApp(WebFirebaseConfig);
        return app;
    },
    sendAnalytics: function sendAnalytics() {
        const analytics = getAnalytics(app);
    },
    authErrorCode: null,
    authErrorMessage: null,
    userUid: null,
    userEmail: null,
    createUser(email, password) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            this.userUid = user.uid;
            this.userEmail = user.email;
            return true;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            this.authErrorCode = errorCode;
            this.authErrorMessage = errorMessage;
            this.userUid = null;
            this.userEmail = null;
            WebArtino.showAlertMessage("WebFirebase Exception: Please check your email address and password!")
            return false;
              });
    },
    signIn(email, password) {
        const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    this.userUid = user.uid;
    this.userEmail = user.email;
    return true;
  })
  .catch((error) => {
    const errorCode = error.code;
            const errorMessage = error.message;
            this.authErrorCode = errorCode;
            this.authErrorMessage = errorMessage;
            this.userUid = null;
            this.userEmail = null;
            WebArtino.showAlertMessage("WebFirebase Exception: Please check your email address and password!")
            return false;
  });
    },

}