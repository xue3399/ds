/*最终购买输出*/
//加入购物车  计算
$(function(){
	var $product = $(".content");

	$("#cart").click(function(){

		var pro_name = $product.find("strong:nth-of-type(2)").text();
		//alert(pro_name)
		var pro_size = $product.find(".pro_size strong").text();
		var pro_color =  $(".content_blue span:first-of-type").text();
		var pro_num = $product.find("#num_sort").val();
		var pro_price = $product.find(".pro_price").text();
		var dialog = " 感谢您的购买。\n您购买的\n"+
			"产品是："+pro_name+"；\n"+
			"尺寸是："+pro_size+"；\n"+
			"颜色是："+pro_color+"；\n"+
			"数量是："+pro_num+"；\n"+
			"总价是："+pro_price +"元。";
		if( confirm(dialog) ){
			alert("您已经下单!");
		}
		return false;//避免页面跳转
	})
})