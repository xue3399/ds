/**
 * Created by Administrator on 2017/10/11.
 */
//01 新闻滚动
$(function(){
    var $this = $(".scrollNews");
    var scrollTimer;
    $this.hover(function(){
        clearInterval(scrollTimer);
    },function(){
        scrollTimer = setInterval(function(){
            scrollNews( $this );
        }, 3000 );
    }).trigger("mouseleave");
});

function scrollNews(obj){
    var $self = obj.find("ul:first");
    var lineHeight = $self.find("li:first").height(); //获取行高
    $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
        $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
    })
}

//02 模块展开和折叠
$(function(){
    $(".module_up_down").toggle(function(){
        var $self = $(this);
        $self.prev().slideToggle(600,function(){
            $("img",$self).attr("src","images/up.gif");
        });
    },function(){
        var $self = $(this);
        $self.prev().slideToggle(600,function(){
            $("img",$self).attr("src","images/down.gif");
        });
    })
})

//精品分类下拉显示隐藏
$(function () {
    $(".expanded span").click(function () {
        $(this).siblings().toggleClass("none");

    })
})








//imghover

$(function(){
    $(".list ul li").each(function(index){
        var position = $(this).position();
        var li_left = position.left; //左座标
        var li_top = position.top;   //上座标
        var img_width = $(this).find("img").width();  //图片宽度
        var img_height = $(this).find("img").height();  //图片高度
        var spanHtml = '<span style="position:absolute; top: '+li_top+'px; left: '+li_left+'px; width:'+img_width+'px; height: '+img_height+'px; cursor: pointer;" class="imageMask"></span>';
        $(spanHtml).hover(function(){
            $(this).addClass("imageOver");
        },function(){
            $(this).removeClass("imageOver");
        }).appendTo( $(this).find("a") );
    })
})


//imgslide

$(function(){
    var page = 1;                               //默认当前的页面是1
    var i = 4; 								    //每版4个图片
    var len = $(".list_content ul li").length;  //li的数量
    var page_count = Math.ceil(len / i) ;       //总页数(只要不是整数，就往大的方向取最小的整数)
    var none_unit_width = $(".list").width();   //获取框架内容的宽度,不带单位
    var $parent = $(".list_content");           //获取li的宽度和(实际宽度)
    //向右 按钮
    $(".goRight").click(function(){

        if( !$parent.is(":animated") ){
            if(page == page_count ){//已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
                $parent.animate({left:0}, 800); //通过改变left值，跳转到第一个版面
                page = 1;
            }else{
                $parent.animate({ left:'-='+none_unit_width}, 800);  //通过改变left值，达到每次换一个版面
                page++;
            }
        }
    });
    //往左 按钮
    $(".goLeft").click(function(){
        if( !$parent.is(":animated") ){
            if( page == 1 ){//已经到第一个版面了,如果再向前，必须跳转到最后一个版面。
                $parent.animate({ left : '-='+none_unit_width*(page_count-1)}, 800); //通过改变left值，跳转到最后一个版面
                page = page_count;
            }else{
                $parent.animate({ left : '+='+none_unit_width }, 800);  //通过改变left值，达到每次换一个版面
                page--;
            }
        }
    });
});










