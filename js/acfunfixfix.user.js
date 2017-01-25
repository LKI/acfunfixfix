// ==UserScript==
// @name        AcFun Fix Fix
// @namespace   http://www.liriansu.com/acfunfixfix/
// @description Acfun Fix Fix, 基于AcFun Fix的播放器修复黑科技
// @include     http://www.acfun.cn/v/*
// @include     http://acfun.cn/v/*
// @include     http://hengyang.acfun.cn/v/*
// @include     http://wenzhou.acfun.cn/v/*
// @include     http://acfun.tudou.com/v/*
// @version     1.0.0.2
// @grant       none
// @run-at      document-end
// ==/UserScript==

// 油猴脚本主体来自原AcFun Fix，http://www.talkshowcn.com/js/acfunfix.html
// 最近修改者：@补档君 ，新浪微博http://weibo.com/AcUid1024796
// 反馈请戳 https://github.com/LKI/acfunfixfix/issues/new
(function ($) {
  window._doFix = function () {
    var f = document.createElement('script');
    f.src = 'http://www.liriansu.com/acfunfixfix/js/acfunfixfix.js?ran=' + new Date().getTime();
    document.body.appendChild(f);
    //直接加载远程脚本，防止本地脚本失效。
  };
  _waitInt = setInterval(function () {
    if (document.getElementById('ACFlashPlayer-re') && window.$) {
      clearInterval(_waitInt);
      _doFix();
  }}, 500);
}) (function ($) {
    return document.querySelector($);
});
