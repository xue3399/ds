/*点击左侧产品小图片切换大图*/
$(function(){
	$(".pro_detail_left ul li img").livequery("click",function(){ 
		  var imgSrc = $(this).attr("src");  //图片路径
		  var i = imgSrc.lastIndexOf(".");   //返回.最后出现的位置
		  var unit = imgSrc.substring(i);    //文件扩展名
		  imgSrc = imgSrc.substring(0,i);    //文件主名
		  var imgSrc_small = imgSrc + "_small"+ unit;
		  var imgSrc_big = imgSrc + "_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
	});
});