/*
	Inline Notification Message (non-popup)
	Date: 2013-12-30	
*/
var myMessages = ['info','success','warning','error'];
var myMessagesDefault = 'message';
var myMessagesTimeoutHandle = undefined;

function myMessageToggle() {
	var thing = document.getElementById(myMessagesDefault);
	if ( thing.style.visibility == 'visible' ) {
		thing.style.visibility = 'collapse';
		thing.style.display = 'none';
	} else {
		thing.style.visibility = 'visible';
		thing.style.display = 'block';
	}
}
//
//
function myMessage(message, timeout, whichClass) {
	var thing = document.getElementById(myMessagesDefault);
	if (message) {
		myMessageToggle();
		thing.innerHTML = message;
	}
	if (whichClass) { 
        // http://www.mzcart.com/javascript-how-to-addremove-css-class-from-a-dom-element/
        thing.classList.add(whichClass);
    } else {
        thing.classList.add('info');
    }
	if (timeout) {
		if (timeout > 0) {
			myMessagesTimeoutHandle =  window.setTimeout(myMessageToggle, timeout);
		}
	} else {alert("Set the timeout for myMessage()\-1=No timeout.");}
}

function myMessageClear() {
	if (myMessagesTimeoutHandle) {
		window.clearTimeout(myMessagesTimeoutHandle);
	}
}
