/*
    Inline Notification Message (non-popup)
    Date: 2015-07-16    
*/
var growl = {

    types     : ['info','success','warning','error'],
    defaultId : 'message',
    userId    : 'message2',
    timeoutHandle : null,

    toggle : function() {
        var theId = (growl.userId) ? growl.userId : growl.defaultId;
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
    message : function(message, timeout, whichClass) {
        var theId = (growl.userId) ? growl.userId : growl.defaultId;
        var thing = document.getElementById(theId);
		console.log(thing.classList);
        if (message) {
            thing.innerHTML = message;
        }
        if (whichClass) { 
            // http://www.mzcart.com/javascript-how-to-addremove-css-class-from-a-dom-element/
            thing.classList.add(whichClass);
        } else {
            thing.classList.add(types[0]); // 'info'
        }
        if (timeout) {
            if (timeout > 0) {
                growl.timeoutHandle =  window.setTimeout(growl.toggle, timeout);
            }
        } else {
            alert("Set the timeout for myMessage()\-1=No timeout.");
        }
        growl.toggle();
    },

    clearTimeout : function() {
        if (growl.timeoutHandle) {
            window.clearTimeout(growl.timeoutHandle);
        }
    }
};