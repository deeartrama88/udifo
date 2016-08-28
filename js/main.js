(function () {

    $(document).ready(function () {

        // our side menu all currencies
        var all_currency_side_menu = $('.side_all_currency_widget');
        // button to open side menu with all currencies
        var all_currency_side_menu_open_btn = $('.open_icon_wrapper');
        // side menu all currencies tabs
        var all_currency_side_menu_tabs = $('.body_toggle');



        // open - close side menu
        $(all_currency_side_menu_open_btn).click(function () {
            $(all_currency_side_menu).toggleClass('open');
        });

        // open - close side menu tabs
        $(all_currency_side_menu_tabs).click(function () {
             $(this).parent().find('.wrap').slideToggle().parent().find(this).toggleClass('open');
        });



    });


}());