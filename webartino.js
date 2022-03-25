export var WebArtino = {
    showAlertMessage: function showMessage(message) {
        if (message === undefined) {
            console.error("WebArtino Exception: Alert message can never be undefined!");
        }else{
            alert(message)
        }
     },
    byId: function byId(elementId) {
      if (elementId === undefined) {
          console.error("WebArtino Exception: Element Id can never be undefined!");
      }else{
          return document.getElementById(elementId);
      }
    },
    byClass: function byClass(elementsClass) {
       if (elementClass === undefined) {
           console.error("WebArtino Exception: Element Class can never be undefined!");
       }else{
           return document.getElementsByClassName(elementsClass);
       }
    },
    byTag: function byTag(elementsTag) {
      if (elementsTag === undefined) {
          console.error("WebArtino Exception: Element tag can never be undefined!");
      }else{
          return document.getElementsByTagName(elementsTag);
      }
    },
    byQuery: function byQuery(elementQuery) {
        if (elementQuery === undefined) {
            console.error("WebArtino Exception: Element query can never be undefined!");
        }else{
            return document.querySelector(elementQuery);
        }
    },
    writeHTML: function writeHTML(elementId, html) {
        if (html === undefined) {
            console.error("WebArtino Exception: HTML text or Element Id can never be undefined!");
        }else{
            return document.getElementById(elementId).innerHTML = html;
        }
    },
    getHTML: function getHTML(elementId) {
        if (elementId === undefined) {
            console.error("WebArtino Exception: Cannot get the html text of undefined element!");
        }else{
            return document.getElementById(elementId).innerHTML;
        }
    },
    openLink: function openLink(URL) {
        if (URL === undefined) {
           console.error("WebArtino Exception: URL can never be undefined!");
        }else{
            location.href = URL;
        }
    },
    openNewLink: function openNewLink(URL) {
       if (URL === undefined) {
           console.error("WebArtino Exception: URL can never be undefined!");
       }else{
           window.open(URL);
       }
    },
    logMessage: function logMessage(logMessage) {
      if (logMessage === undefined) {
          console.error("WebArtino Exception: Log message can never be undefined!");
      }else{
          console.log(logMessage)
      }
    },
    logError: function logError(errorMessage) {
      if (errorMessage === undefined) {
          console.error("WebArtino Exception: Error message can never be undefined!");
      }else{
          console.error(errorMessage)
      }
    },
    logWarning: function logWarning(warningMessage) {
        if (warningMessage === undefined) {
            console.error("WebArtino Exception: Warning message can never be undefined");
        }else{
            console.warn(warningMessage);
        }
    },
    clearLogs: function clearLogs() {
        console.clear();
    },
    listAll: function(array) {
        if (array === undefined) {
            WebArtino.logError("WebArtino Exception: Array can never be undefined!");
        }else{
            for (var i = 0; i <= array.length; i++) {
                return array[i];
            }
        }
    }
}