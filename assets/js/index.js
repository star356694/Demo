function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



//顯示視窗前呼叫
$("#ooo").on("show.bs.modal",function(e){
  console.log('顯示視窗前呼叫');
});

//轉場特效結束，已完全呈現時呼叫
$("#ooo").on("shown.bs.modal",function(e){
  console.log('轉場特效結束，已完全呈現時呼叫');
});

//關閉視窗前呼叫
$("#ooo").on("hide.bs.modal",function(e){
  console.log('關閉視窗前呼叫');
});

//轉場特效結束，已完全隱藏時呼叫
$("#ooo").on("hidden.bs.modal",function(e){
  console.log('轉場特效結束，已完全隱藏時呼叫');
});

//隱藏視窗
$("#ooo").modal('hide');

//開啟視窗
$("#ooo").modal('show');

//切換視窗顯示、不顯示
$("#ooo").modal('toggle');

//判斷視窗是否開啟中
if($("#ooo").hasClass('in')){
  console.log('視窗目前是開啟的狀態..');
}