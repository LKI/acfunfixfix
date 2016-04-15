chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == "complete" && tab.url.indexOf("acfun.") > 0) {
    chrome.tabs.executeScript(tabId, {
      file: 'fix.js'
    });
  }
});
