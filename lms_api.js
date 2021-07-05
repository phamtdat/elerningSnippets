/**
 * SCO communicate with server through the LMS API. This API should be provided by the client.
 * In case of our android / ios native apps where we use webView, we need to provide the API with hooks to
 * corresponding native implementations to the API functions. On android for example, the hooks are done by creating
 * a JavascriptInteface (android native class with @JavascriptInterface annotation) which functions can be called
 * by the content loaded by the webView.
 */
window.API = (function(){
    return {
        // SCORM 1.2
        LMSInitialize: function(param) {
            // todo: return corresponding android/ios native hook
            return "true";
        },
        LMSFinish: function(param) {
            // todo: return corresponding android/ios native hook
            return "true";
        },
        LMSGetValue: function(element) {
            // todo: return corresponding android/ios native hook
            return "";
        },
        LMSSetValue: function(element, value) {
            // todo: return corresponding android/ios native hook
            return "true";
        },
        LMSCommit: function(param) {
            // todo: return corresponding android/ios native hook
            return "true";
        },
        LMSGetLastError: function() {
            // todo: return corresponding android/ios native hook
            return "0";
        },
        LMSGetErrorString: function(errorCode) {
            // todo: return corresponding android/ios native hook
            return "No error";
        },
        LMSGetDiagnostic: function(errorCode) {
            // todo: return corresponding android/ios native hook
            return "No error";
        },
        // SCORM 2004
        Initialize: function(param) {
            return this.LMSInitialize(param)
        },
        Terminate: function(param) {
            return this.LMSFinish(param)
        },
        GetValue: function(element) {
            return this.LMSGetValue(element)
        },
        SetValue: function(element, value) {
            return this.LMSSetValue(element, value)
        },
        Commit: function(param) {
            return this.LMSCommit(param)
        },
        GetLastError: function() {
            return this.LMSGetLastError()
        },
        GetErrorString: function(errorCode) {
            return this.LMSGetErrorString(errorCode)
        },
        GetDiagnostic: function(errorCode) {
            return this.LMSGetDiagnostic(errorCode)
        },
    };
})();
