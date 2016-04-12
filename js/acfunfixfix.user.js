// ==UserScript==
// @name        AcFun Fix Fix
// @namespace   http://www.liriansu.com/acfunfixfix/
// @description Acfun Fix Fix, 基于AcFun Fix的播放器修复黑科技
// @include     http://www.acfun.tv/v/*
// @include     http://acfun.tv/v/*
// @include     http://hengyang.acfun.tv/v/*
// @include     http://wenzhou.acfun.tv/v/*
// @include     http://acfun.tudou.com/v/*
// @version     1.0.0.2
// @grant       none
// @run-at      document-end
// ==/UserScript==

// 油猴脚本主体来自原AcFun Fix作者，http://www.talkshowcn.com/js/acfunfix.html
// 本油猴脚本由原作者授权 @补档君 修改，新浪微博http://weibo.com/AcUid1024796
// 项目重启和主催 @浮云总是梦，新浪微博http://weibo.com/309288216
// 反馈请戳https://github.com/LKI/acfunfixfix/issues/new
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
