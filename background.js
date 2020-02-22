
var context_id = -1;
      
chrome.input.ime.onFocus.addListener(function(context) {
    context_id = context.contextID;
});

chrome.input.ime.onKeyEvent.addListener(
    function(engineID, keyData) {
        if (keyData.type == 'keydown' && keyData.key == 'a') {
            chrome.input.ime.commitText({
                'contextID': context_id,
                'text': 'b'
            });
            return true;
        }
        else {
            return false;
        }
    }
);

