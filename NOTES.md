#NOTES on Messages.js#
Date: 2015-07-14


* toggle()
* message({id:elementId, message:messageString, timeout:timeoutInt, whichClass:type})
* clearTimeout()

```Message is displayed in the <div id="message" class="message info"></div>```
* id 'message' is the default id
* class 'message' hides the block and defines the size, margin and padding
* class 'info' defines the background-color

**To change the id, message, timeout, and background-color**
* The object is hidden ('block:none' & 'visibility:collapse') by default.
* For a different object, change the *elementId*. The 'message' id is the default.
* To change the text, change *messageString*. There is no default.
* This object will automatically toggle the message off after *timeoutInt*. A timeout of -1 turns the timeout off. Time is in milliseconds.
* Use *type* to reassign the style/color - ['info','success','warning','error'].
