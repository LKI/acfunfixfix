// 显示状态
function showStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

// 网页加载完毕后，再执行播放器替换
document.addEventListener('DOMContentLoaded', function() {
  // 因为当前js操作的是popup.html
  // 要对当前chrome tab进行操作就要调用chrome api执行fix.js
  chrome.tabs.executeScript(null, {file: "fix.js"});
  showStatus("开始加载（长时间没反应的话重新再点一次我）");
});
