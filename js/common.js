var $$ = {
    iScroll: function (elem) {
        var myScroll;

        function loaded() {
            myScroll = new iScroll(elem, {checkDOMChanges: true});
        }

        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);
        document.addEventListener('DOMContentLoaded', loaded, false);
    },

    iScrollForms: function (elem) {
        var myScroll;

        function loaded() {
            myScroll = new iScroll(elem, {
                useTransform: false,
                onBeforeScrollStart: function (e) {
                    var target = e.target;
                    while (target.nodeType != 1) target = target.parentNode;

                    if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
                        e.preventDefault();
                }
            });
        };

        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);
        document.addEventListener('DOMContentLoaded', loaded, false);
    },
    swiper: function () {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            }
        })
    },
    writeMeta: function () {
        var pixelRatio = 1 / window.devicePixelRatio;
        document.write('<meta name="viewport" content="width=device-width,initial-scale=' + pixelRatio + ',minimum-scale=' + pixelRatio + ',maximum-scale=' + pixelRatio + '" />');
    },
    iScrollTabs: function (elem) {
        var myScroll;

        function loaded() {
            myScroll = new iScroll(elem, {
                useTransform: false,
                onBeforeScrollStart: function (e) {
                    var target = e.target;
                    while (target.nodeType != 1) target = target.parentNode;

                    if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
                        e.preventDefault();
                }
            });
        };

        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        }, false);
        document.addEventListener('DOMContentLoaded', loaded, false);

        $(".controlItem").on("click", function () {
            var _index = $(this).index();

            $(this).addClass("active").siblings(".controlItem").removeClass("active");
            $(".controlCont").eq(_index).addClass("active").siblings(".controlCont").removeClass("active");

            myScroll.refresh();
        })
    },
    gameList: function () {
        $("#gameKind").on('click', function () {
            layer.open({
                title: ['游戏分类',],
                content: '<ul>\n' +
                    '    <li class="gameKind"><a href="">全部</a></li>\n' +
                    '    <li class="gameKind"><a href="">老虎机</a></li>\n' +
                    '    <li class="gameKind"><a href="">棋牌游戏</a></li>\n' +
                    '    <li class="gameKind"><a href="">真人视讯</a></li>\n' +
                    '    <li class="gameKind"><a href="">体育竞技</a></li>\n' +
                    '    <li class="gameKind"><a href="">彩票</a></li>\n' +
                    '    <li class="gameKind"><a href="">其他</a></li>\n' +
                    '</ul>',
                area: '21rem'
                , btn: '确定',
                closeBtn: false,
                shadeClose: true,
                scrollbar: false,
            });
        })
    },
    copyLine: function () {
        $(document).ready(function () {
            var clipboard = new Clipboard('.btn_share');
            clipboard.on('success', function (e) {
                parent.layer.msg("链接复制成功!", {
                    // icon : 1,
                    time: 1500
                })
            })
        })
    },
    autoComplete: function () {
        $("#autocomplete").autocomplete({
            minLength: 0,
            source: function (request, response) {
                var results = $.ui.autocomplete.filter($.cookie('localHistory') ? $.cookie('localHistory').split(',') : [], request.term);
                response(results.slice(0, 7));
            }
        }).focus(function () {
            $(this).autocomplete("search");
        });
    },
/*    getCookie: function () {
        $("#search").on('click', function () {
            var content = $('#autocomplete').val();
            var historyArray = $.cookie('localHistory') ? $.cookie('localHistory').split(',') : [];
            historyArray.push(content);
            $.unique(historyArray);
            var historyString = historyArray.join(",");
            $.cookie('localHistory', historyString);
            location.reload();
        })
    },*/
    getCookie:function (){
        $('form').on('submit', function() {
            var content = $('#autocomplete').val();
            var historyArray = $.cookie('localHistory') ? $.cookie('localHistory').split(',') : [];
            historyArray.push(content);
            $.unique(historyArray);
            var historyString = historyArray.join(",");
            $.cookie('localHistory', historyString);
            location.reload();
            return false;
        })
    }
}
