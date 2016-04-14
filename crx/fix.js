// 在播放器替换前、和替换后都在console中输出日志
console.log("Chrome插件 - AcFun Fix Fix");
console.log("读取远端AcFun Fix Fix脚本中");

//直接加载远程AcFun Fix Fix脚本
var f = document.createElement('script');
f.src = 'http://www.liriansu.com/acfunfixfix/js/acfunfixfix.js?ran=' + new Date().getTime();
document.body.appendChild(f);

// 脚本加载完成
console.log("远端AcFun Fix Fix脚本加载完毕")
