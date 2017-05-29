var browser = function() {
    // Return cached result if avalible, else get result then cache it.
    if (browser.prototype._cachedResult)
        return browser.prototype._cachedResult;

    // Opera
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    return browser.prototype._cachedResult =
        isOpera ? 'Opera' :
        isFirefox ? 'Firefox' :
        isSafari ? 'Safari' :
        isChrome ? 'Chrome' :
        isIE ? 'IE' :
        isEdge ? 'Edge' :
        "Don't know";
};

// Browser download links
var browserLinks = {  
    Opera : "https://www.opera.com/",
	Firefox : "https://www.mozilla.org/firefox/",
	Safari : "https://support.apple.com/downloads/safari",
	Chrome : "https://www.google.com/chrome/",
	IE : "https://www.microsoft.com/en-us/download/internet-explorer.aspx",
	Edge : "https://www.microsoft.com/windows/microsoft-edge"
};

// Get browser link
var browserLink = browserLinks[browser()];

// Attach browser link
document.querySelector(".browser-image a").href = browserLink;

// Display browser name
document.querySelector(".browser-name").innerHTML = browser();

// Display browser image
document.querySelector(".browser-image img").src = "logos/" + browser() + ".png";