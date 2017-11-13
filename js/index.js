/**
 * Created by Administrator on 2017/10/11.
 */
//01 ���Ź���
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
    var lineHeight = $self.find("li:first").height(); //��ȡ�и�
    $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
        $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo��ֱ���ƶ�Ԫ��
    })
}

//02 ģ��չ�����۵�
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

//��Ʒ����������ʾ����
$(function () {
    $(".expanded span").click(function () {
        $(this).siblings().toggleClass("none");

    })
})








//imghover

$(function(){
    $(".list ul li").each(function(index){
        var position = $(this).position();
        var li_left = position.left; //������
        var li_top = position.top;   //������
        var img_width = $(this).find("img").width();  //ͼƬ���
        var img_height = $(this).find("img").height();  //ͼƬ�߶�
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
    var page = 1;                               //Ĭ�ϵ�ǰ��ҳ����1
    var i = 4; 								    //ÿ��4��ͼƬ
    var len = $(".list_content ul li").length;  //li������
    var page_count = Math.ceil(len / i) ;       //��ҳ��(ֻҪ����������������ķ���ȡ��С������)
    var none_unit_width = $(".list").width();   //��ȡ������ݵĿ��,������λ
    var $parent = $(".list_content");           //��ȡli�Ŀ�Ⱥ�(ʵ�ʿ��)
    //���� ��ť
    $(".goRight").click(function(){

        if( !$parent.is(":animated") ){
            if(page == page_count ){//�Ѿ������һ��������,�������󣬱�����ת����һ�����档
                $parent.animate({left:0}, 800); //ͨ���ı�leftֵ����ת����һ������
                page = 1;
            }else{
                $parent.animate({ left:'-='+none_unit_width}, 800);  //ͨ���ı�leftֵ���ﵽÿ�λ�һ������
                page++;
            }
        }
    });
    //���� ��ť
    $(".goLeft").click(function(){
        if( !$parent.is(":animated") ){
            if( page == 1 ){//�Ѿ�����һ��������,�������ǰ��������ת�����һ�����档
                $parent.animate({ left : '-='+none_unit_width*(page_count-1)}, 800); //ͨ���ı�leftֵ����ת�����һ������
                page = page_count;
            }else{
                $parent.animate({ left : '+='+none_unit_width }, 800);  //ͨ���ı�leftֵ���ﵽÿ�λ�һ������
                page--;
            }
        }
    });
});










