//第一个ajax发送时  开启进度条
$(document).ajaxStart(function () {
  NProgress.start();
});

//所有的ajax请求完成时调用  关闭进度条
$(document).ajaxStop(function () {
  
  //模拟网络延迟
  setTimeout(function () {
    NProgress.done();
  },500)
});
