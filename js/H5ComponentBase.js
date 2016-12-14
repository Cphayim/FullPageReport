/**
 * 基本图文组件对象
 * @param {String} name 组件名
 * @param {Object} cfg 配置项
 */
var H5ComponentBase = function(name, cfg) {
    var cfg = cfg || {};
    var id = ('h5_c_' + Math.random()).replace('.', '_');

    //把当前的组件类型添加到样式中进行标记
    var claName = 'h5_component_name_' + name + ' h5_component_' + cfg.type;
    var component = $('<div class="h5_component ' + claName + '" id="' + id + '"></div>');
    //设置文本
    cfg.text && component.text(cfg.text);
    //设置宽高与CSS
    cfg.width && component.width(cfg.width / 2);
    cfg.height && component.height(cfg.height / 2);
    cfg.css && component.css(cfg.css);
    //设置背景图片
    cfg.bg && component.css('backgroundImage', 'url(' + cfg.bg + ')');
    //是否水平居中
    if (cfg.center === true) {
        component.css({
            marginLeft: (-1 * cfg.width / 4) + 'px',
            left: '50%'
        });
    }
	
    component.on('onLoad', function() {
        component.addClass(claName + '_load');
        component.removeClass(claName + '_leave');
        cfg.animateIn && component.animate(cfg.animateIn);
        return false;//阻止冒泡
    });
    component.on('onLeave', function() {
        component.addClass(claName + '_leave');
        component.removeClass(claName + '_load');
        cfg.animateOut && component.animate(cfg.animateOut);
        return false;
    });
    return component;
}