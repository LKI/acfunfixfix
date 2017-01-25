(function() {
  if (!document.domain) {
    alert("你拖到书签栏使用了么？书签栏应该是在浏览器地址栏下方的位置。如果你确定你是在书签栏使用的，那么可能你的浏览器太辣鸡（比如360），换个现代的浏览器吧（火狐、谷歌、IE11都行的）");
    return
  }
  if (document.domain.toLowerCase().indexOf("liriansu.com") > 0) {
    alert("把这个链接加到收藏夹或者拖到书签栏，而不是点我");
    return
  }
  window._log = function(msg) {
    if ($.info.show) {
      $.info.show(msg);
    } else {
      $.info(msg);
    }
  }
  window._getPlayer = function() {
    return document.getElementById("ACFlashPlayer") || document.getElementById("ACFlashPlayer-re") || document.getElementById("not-ACFlashPlayer-re") || document.getElementById("area-player");
  };
  if (null == _getPlayer()) {
    alert("没有找到可以转换的播放器，可能是你没进AcFun视频页面，也有可能是个Bug");
    return
  }
  _log("欢迎使用 AcFun Fix Fix 2017-01-25");
  _log("天下漫友是一家，缺B乐，[]~(￣▽￣)~*乾杯");
  var source = $("a.active.primary").data("from");
  window.setupPlayer = function(d, e) {
    player = _getPlayer();
    if (player.id == 'area-player') {
      $(player).html('<div class="inner ui-draggable"><iframe id="ACFlashPlayer-re" ></iframe></div>');
      player = document.getElementById("ACFlashPlayer-re") || document.getElementById("ACFlashPlayer");
    };
    player.outerHTML = '<object style="visibility:visible;width:100%;height:100%" id="not-ACFlashPlayer-re" data="' + d + '" src="' + d + '" allowscriptaccess="always" allowfullscreen="true" allowfullscreeninteractive="true" type="application/x-shockwave-flash"><param value="true" name="allowFullscreenInteractive"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="' + e + '" name="flashvars"><param name=movie value="' + d + '"></object>'
  };
  if (!document.getElementById("video-download") && source != "iqiyi" && source != "pps") {
    $("#txt-title-view").append('<span id="video-download"><a class="btn primary" href="http://www.liriansu.com/acfunfixfix/danmaku.html?vid='+$("a.active.primary").data("vid")+'&p='+(location.href.match(/_(\d+)/)?location.href.match(/_(\d+)/)[1]:"1")+'" title="视频下载" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-download"></i>详细信息及下载</a></span>')
  }
  if (source == "youku2") {
    source = "youku"
  }
  if (source == "qq2") {
    source = "qq"
  }
  sourceList = {
    "sina": "新浪视频",
    "youku": "优酷网",
    "tudou": "土豆网",
    "qq": "腾讯视频",
    "pps": "PPS.tv",
    "ku6": "酷六网",
    "letv": "乐视云",
    "letv2": "乐视网",
    "sohu": "搜狐视频",
    "iqiyi": "爱奇艺",
    "56": "56网",
    "pptv": "PPTV",
    "zhuzhan": "主站",
    "ac": "主站"
  };
  if(typeof(sourceList[source]) == "undefined"){
    $.ajax({
      url: "http://www.acfun.cn/video/getVideo.aspx?id="+$("a.active.primary").data("vid"),
      async: false,
      success:function(data){
        $("a.active.primary").data("from",data.sourceType);
        $("a.active.primary").data("sid",data.sourceId);
        source = data.sourceType;
      }
    });
  };
  if (source != "letv" && source != "zhuzhan" && source != "ac") {
    setupPlayer("http://www.talkshowcn.com/AcPlayer201412121.swf", "oldcs=1&host=http://www.talkshowcn.com&vid=" + $("a.active.primary").data("vid") + "|" + source + "|" + $("a.active.primary").data("sid"));
    if (!document.getElementById("refresh-player")) {$("#video-download").append('<a id="refresh-player" class="btn primary" onclick="$(_getPlayer()).prop(\'outerHTML\',$(_getPlayer()).prop(\'outerHTML\'))" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-refresh"></i>解析失败请点我刷新</a>');};
    _log("视频源类型：" + sourceList[source]);
  }else{
    _log("本程序不会对 乐视云源和主站视频源 进行任何处理，出现问题是 AcFun 的问题，请联系客服。");
  }
})();
