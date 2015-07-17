/*
    Inline Notification Message (non-popup)
    Date: 2015-07-16    
*/
var growl = {

    types     : ['info','success','warning','error'],
    defaultId : 'message',
    timeoutHandle : null,

    toggle : function(id) {
        var theId = (id) ? id : growl.defaultId;
        console.log("toggle() theId: " + theId);
        var thing = document.getElementById(theId);
        if ( thing.style.visibility === 'visible' ) {
            thing.style.visibility = 'collapse';
            thing.style.display = 'none';
        } else {
            thing.style.visibility = 'visible';
            thing.style.display = 'block';
        }
    },
    //
    //
    message : function(parms) {
        var theId = (parms.id) ? parms.id : growl.defaultId;
        var thing = document.getElementById(theId);
        if (parms.message) {
            thing.innerHTML = parms.message;
        }
        if (parms.whichClass) { 
            // http://www.mzcart.com/javascript-how-to-addremove-css-class-from-a-dom-element/
            thing.classList.toggle(parms.whichClass);
        } else {
            thing.classList.add(growl.types[0]); // 'info'
        }
        if (parms.timeout) {
            if (parms.timeout > 0) {
                growl.timeoutHandle =  window.setTimeout(growl.toggle, parms.timeout);
            }
        } else {
            alert("Set the timeout for myMessage()\-1=No timeout.");
        }
        growl.toggle(theId);
    },

    setMessage : function(parms) {
        var theId = (parms.id) ? parms.id : growl.defaultId;
        var thing = document.getElementById(theId);
        if (parms.message) {
            thing.innerHTML = parms.message;
        }
        if (parms.whichClass) { 
            // http://www.mzcart.com/javascript-how-to-addremove-css-class-from-a-dom-element/
            thing.classList.toggle(parms.whichClass);
        } else {
            thing.classList.add(growl.types[0]); // 'info'
        }
    },

    clearTimeout : function() {
        if (growl.timeoutHandle) {
            window.clearTimeout(growl.timeoutHandle);
        }
    }
};