//5.如果当前用户没有登录 需要拦截到登陆页面
//前端是不知道用户是否登录了的 但是后台知道
//注意:需要将登陆页 排除在外面 就是登录页可以不登录就访问的

if(location.href.indexOf("login.html") === -1 ) {
  //如果索引为-1,说明在地址栏参数中没有login.html 需要登录拦截
  $.ajax({
    type:"get",
    url:"/employee/checkRootLogin",
    dataType:"json",
    success:function (info) {
      if (info.href === 400 ) {
        //当前用户没登录  拦截到登陆页
        location.href = "login.html";
      }
      if (info.success ) {
        //当前用户已登录 不需要拦截 让用户访问页面
        console.log("当前用户已登录");
      }
    }
  });
}



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
  $('.icon-menu').click(function() {
    $('.lt_aside').toggleClass("hidemenu");
    $('.lt_main').toggleClass("hidemenu");
    $('.lt_topbar').toggleClass("hidemenu");
    console.log("1");
  });
  
  
  //3.点击头部退出按钮  显示退出模态框
  $('.lt_topbar .icon-logout').click(function () {
    //显示模态框
    $('#logoutModal').modal("show");

  });

  //4.点击模态框中的退出按钮  需要进行退出操作(ajax)
  $('#logoutBtn').click(function() {
    //发送ajax请求退出操作 让后台销毁当前用户的登录状态
    $.ajax({
      type:"get",
      url:"/employee/employeeLogout",
      dataType:"json",
      success:function (info) {
        if(info.success) {
          location.href = "login.html";
        }
      }

    })

  });
});



