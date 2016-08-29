(function () {

    $(document).ready(function () {

        // our side menu all currencies
        var all_currency_side_menu = $('.side_all_currency_widget');
        // button to open side menu with all currencies
        var all_currency_side_menu_open_btn = $('.open_icon_wrapper');
        // side menu all currencies tabs
        var all_currency_side_menu_tabs = $('.body_toggle');
        // direction widget
        var direction_widget = $('.direction_widget');
        // often operation block/частые операции
        var often_operation = $('.often_questions');
        // table wrap
        var table_wrap = $('.table_wrap');
        // all currencies side menu selector when its open
        var all_currency_side_menu_open = $('.side_all_currency_widget');


        // open / close side menu
        $(all_currency_side_menu_open_btn).click(function () {
            $(all_currency_side_menu).toggleClass('open');
            // fade toggle direction_widget, fade out when side widget open, and fade in when it closed
            $(direction_widget).slideToggle(100);
            // toggle class side_menu_opened to resize block often operation/частые операции
            $(often_operation).toggleClass('side_menu_opened');
            // toggle class side_menu_opened to change table
            $(table_wrap).toggleClass('side_menu_opened');

            side_menu_set_left($(all_currency_side_menu_open));
        });

        // open / close side menu tabs
        $(all_currency_side_menu_tabs).click(function () {
            $(this).parent().find('.wrap').slideToggle().parent().find(this).toggleClass('open');
        });

        //function to set side menu 'left' property, to adaptive slide on every screen
        var side_menu_set_left_check_ = false;
        function side_menu_set_left(elem) {
            if(!side_menu_set_left_check_){
                var window_width = window.outerWidth;
                // hole window minus container width and divide it on 2 - to find out padding left
                // then set side menu left property to this value, fo appropriate left padding...
                var left_property = (window_width - 1170)/2;
                $(elem).css({'left': left_property});
                side_menu_set_left_check_ = !side_menu_set_left_check_;
            }else{
                $(elem).css({'left': -360});
                side_menu_set_left_check_ = !side_menu_set_left_check_;
            }

        }
        // execute first time




    });


}());