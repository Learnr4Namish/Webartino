export var WebArtino = {
    //Show Alert message by using "WebArtino.showAlertMessage(<Here goes your message>);"
    showAlertMessage: function showMessage(message) {
        if (message === undefined) {
            console.error("WebArtino Exception: Alert message can never be undefined!");
        }else{
            alert(message)
        }
     },
     //Returns the raw code document.getElementById();
    byId: function byId(elementId) {
      if (elementId === undefined) {
          console.error("WebArtino Exception: Element Id can never be undefined!");
      }else{
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
    },
     // Returns the raw code document.getElementsByTagName();
    byTag: function byTag(elementsTag) {
      if (elementsTag === undefined) {
          console.error("WebArtino Exception: Element tag can never be undefined!");
      }else{
          return document.getElementsByTagName(elementsTag);
      }
    },
    //Returns document.querySelector();
    byQuery: function byQuery(elementQuery) {
        if (elementQuery === undefined) {
            console.error("WebArtino Exception: Element query can never be undefined!");
        }else{
            return document.querySelector(elementQuery);
        }
    },
    // Writes the html content inside a particular element
    writeHTML: function writeHTML(elementId, html) {
        if (html === undefined) {
            console.error("WebArtino Exception: HTML text or Element Id can never be undefined!");
        }else{
            return document.getElementById(elementId).innerHTML = html;
        }
    },
    // Gets the HTML content inside a particular element
    getHTML: function getHTML(elementId) {
        if (elementId === undefined) {
            console.error("WebArtino Exception: Cannot get the html text of undefined element!");
        }else{
            return document.getElementById(elementId).innerHTML;
        }
    },
    // Opens a new page in the same tab
    openLink: function openLink(URL) {
        if (URL === undefined) {
           console.error("WebArtino Exception: URL can never be undefined!");
        }else{
            location.href = URL;
        }
    },
    /* Opens a new page in a new tab or a new browser window depending upon your
    browser configuration*/
    openNewLink: function openNewLink(URL) {
       if (URL === undefined) {
           console.error("WebArtino Exception: URL can never be undefined!");
       }else{
           window.open(URL);
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
    
}