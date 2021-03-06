"use strict";

//引入的包根据实际情况而定
var LoadViewController = require('./app/LoadViewController'),
    IndexViewController = require('./app/IndexViewController');

/*本地调试无网络时可释放此项；已集成fx，touch模块；*/
// require('zepto');

/*可按需加载Zepto模块*/
// require('./app/fx_methods');//以动画形式的 show, hide, toggle, 和 fade*()方法.依赖fx模块。

//页面级对象池
var pagePool = {
    loadView: null,
    indexView: null
};

var init = function() {
    //load页面
    var loadPageBack = function() {
        pagePool.loadView = pagePool.loadView || new LoadViewController();
            
        var loadView = pagePool.loadView;
        loadView.show();
        loadView.onhide = indexPageBack;

        loadView.load();
    };

    //index页面
    var indexPageBack = function() {
        pagePool.indexView = pagePool.indexView || new IndexViewController();
            
        var indexView = pagePool.indexView;
        indexView.show();
        //indexView.onhide = gamePageBack;
    };

    loadPageBack();
};

//$(window).on('load', init);
init();
