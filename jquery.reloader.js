;(function (window, document, $, undefined) {
    if (!$) {
        return undefined;
    }
    let loaderUrl = '/preloader.svg';
    $.fn.extend({
        loader: function (enable) {
            if (enable) {
                $(this).css('position', 'relative');
                $(this).append(
                    '<div id="form_loader" style="position: absolute;z-index: 999;display: flex;flex-direction: column;justify-content: center;text-align: center;width: 100%;height: 100%;background: rgba(0,0,0,.15);left: 0;top: 0;">' +
                    '<img src="' + loaderUrl + '" alt="">' +
                    '</div>'
                );
            } else {
                $('#form_loader').remove();
                $(this).css('position', 'auto');
            }
        },
        reloadObj: function () {
            let className = '';
            this[0].classList.forEach((item) => {
                className += '.' + item;
            });
            $(className).loader(true);
            $.ajax({
                url: window.location.href,
                dataType: 'html',
                success: function (resp) {
                    $(document).find(className).html($(resp).find(className).html());
                    $(className).loader(false);
                }
            });
        }
    });
}(window, document, window.jQuery));