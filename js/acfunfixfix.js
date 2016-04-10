 (function() {
 	if (!document.domain) {
 		alert("你拖到书签栏使用了么？书签栏应该是在浏览器地址栏下方的位置。如果你确定你是在书签栏使用的，那么可能你的浏览器太辣鸡（比如360），换个现代的浏览器吧（火狐、谷歌、IE11都行的）");
 		return
 	}
 	if (document.domain.toLowerCase().indexOf("liriansu.com") > 0) {
 		alert("你应该是加到收藏夹或者拖到书签栏，而不是点我");
 		return
 	}
 	if (document.domain.toLowerCase().indexOf("acfun.tv") < 0 && document.domain.toLowerCase().indexOf("bilibili.com") < 0 && document.domain.toLowerCase().indexOf("acfun.tudou.com")) {
 		alert("进AcFun再说...");
 		return
 	}
 	$.info("AcFun Fix: 欢迎使用 AcFun Fix 2015.02.19 E-mail:cctvyay@163.com");
 	var b = $("a.active.primary").data("from");
 	window._getPlayer = function() {
 		return document.getElementById("ACFlashPlayer-re") ? document.getElementById("ACFlashPlayer-re") : (document.getElementById("not-ACFlashPlayer-re") ? document.getElementById("not-ACFlashPlayer-re") : document.getElementById("area-player"));
 	};
 	window.c = function(d, e) {
 		player = _getPlayer();
 		if (player.id == 'area-player') {
 			$(player).html('<div class="inner ui-draggable"><iframe id="ACFlashPlayer-re" ></iframe></div>');
 			player = document.getElementById("ACFlashPlayer-re");
 		};
 		player.outerHTML = '<object style="visibility:visible;width:100%;height:100%" id="not-ACFlashPlayer-re" data="' + d + '" src="' + d + '" allowscriptaccess="always" allowfullscreen="true" allowfullscreeninteractive="true" type="application/x-shockwave-flash"><param value="true" name="allowFullscreenInteractive"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param value="' + e + '" name="flashvars"><param name=movie value="' + d + '"></object>'
 	};
 	if (!document.getElementById("video-download") && b != "iqiyi" && b != "pps") {
 		$("#txt-title-view").append('<span id="video-download"><a class="btn primary" href="http://www.talkshowcn.com/page/acfun_danmu.html?vid='+$("a.active.primary").data("vid")+'&p='+(location.href.match(/_(\d+)/)?location.href.match(/_(\d+)/)[1]:"1")+'" title="视频下载" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-download"></i>详细信息及下载</a></span>')
 	}
 	if (b == "youku2") {
 		b = "youku"
 	}
 	if (b == "qq2") {
 		b = "qq"
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
		"zhuzhan": "主站"
 	};
	if(typeof(sourceList[b]) == "undefined"){
		$.ajax({
			url: "http://www.acfun.tv/video/getVideo.aspx?id="+$("a.active.primary").data("vid"),
			async: false,
			success:function(data){
				$("a.active.primary").data("from",data.sourceType);
				$("a.active.primary").data("sid",data.sourceId);
				b = data.sourceType;
			}
		});
	};
 	if (b != "letv" && b != "zhuzhan") {
		if(b == "iqiyi"||b == "pps"){
			$.info("由于一些版权方面的原因，爱奇艺源停止替换播放器。请各位理解。");
		}else{
			c("http://static.skydust.net/private/acfun/AcPlayer201412121_D.swf", "oldcs=1&host=http://www.talkshowcn.com&vid=" + $("a.active.primary").data("vid") + "|" + b + "|" + $("a.active.primary").data("sid"));
			$("#video-download").append('<a class="btn primary" onclick="$(_getPlayer()).prop(\'outerHTML\',$(_getPlayer()).prop(\'outerHTML\').replace(/acfun.tv/,\'talkshowcn.com\'))" style="float:none;color:#fff;margin-left:8px;" target="_blank"><i class="icon icon-refresh"></i>若解析失败点这儿刷新几次</a>');
			$.info("视频源类型：" + sourceList[b]);
		}
 	}else{
		$.info("乐视云源本程序不会进行任何处理，出现问题是 AcFun 的问题，请联系客服。");
	}
 	window.setCookie = function(d, f) {
 		var e = 365;
 		var g = new Date();
 		g.setTime(g.getTime() + e * 24 * 60 * 60 * 1000);
 		document.cookie = d + "=" + escape(f) + ";expires=" + g.toGMTString()
 	};

 	function a(e) {
 		var d, f = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
 		if (d = document.cookie.match(f)) {
 			return unescape(d[2])
 		} else {
 			return null
 		}
 	}
 })();
