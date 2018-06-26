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


//公共功能
$(function() {
  //1.左侧二级菜单切换显示
  $('.lt_aside .category').click(function () {
    $('.lt_aside .child').stop().slideToggle();
  });
  //2.左侧整个侧边栏显示隐藏功能
  $('.lt_topbar .icon_menu').click(function() {
    $('.lt_aside').toggleClass("hidemenu");
    $('.lt_main').toggleClass("hidemenu");
    $('.lt_topbar').toggleClass("hidemenu");
  });
  
  //3.点击头部退出按钮  显示退出模态框
  $('.lt_topbar .icon-logout').click(function () {
    //显示模态框
    $('#logoutModal').modal("show");
    
  });
  
  //4.点击模态框中的退出按钮  需要进行退出操作(ajax)
  $('#lougoutBtn').click(function() {
    //发送ajax请求
    
  })
  
  
  
});
