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

        var side_menu_width = 360;


        // open / close side menu
        $(all_currency_side_menu_open_btn).click(function () {
            //find out how much should table shift, depending of screen width
            var paddings = side_menu_set_left();

            $(all_currency_side_menu).toggleClass('open');
            // fade toggle direction_widget, fade out when side widget open, and fade in when it closed
            // $(direction_widget).slideToggle(100);
            // toggle class side_menu_opened to resize block often operation/частые операции
            // $(often_operation).toggleClass('side_menu_opened');
            // toggle class side_menu_opened to change table
            $(table_wrap).toggleClass('side_menu_opened');

            $(often_operation).css({marginLeft: paddings.table });
            $(table_wrap).css({paddingLeft: paddings.table});
            $(direction_widget).css({paddingLeft: paddings.table});

        });

        // open / close side menu tabs
        $(all_currency_side_menu_tabs).click(function () {
            $(this).parent().find('.wrap').slideToggle().parent().find(this).toggleClass('open');
        });

        //function to set side menu 'left' property, to adaptive slide on every screen
        var side_menu_set_left_check_ = false;
        var result = {};
        function side_menu_set_left() {
            // side menu width = 360px;

            if(!side_menu_set_left_check_){
                var window_width = window.outerWidth;
                // hole window minus container width and divide it on 2 - to find out padding left
                // then set side menu left property to this value, fo appropriate left padding...
                result.table = (window_width - 1170)/2-370;
                result.often = (window_width - 1170)/2-442;
                result.table = Math.abs(result.table);
                result.often = Math.abs(result.often);
                console.log(result.table);
                console.log(result.often);
                side_menu_set_left_check_ = !side_menu_set_left_check_;
            }else{
                result.table = 0;
                result.often = 0;
                side_menu_set_left_check_ = !side_menu_set_left_check_;
            }
            return result;
        }
        // execute first time




    });


}());