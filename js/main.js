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
        // TAB НАПРАВЛЕНИЯ
        var direction_tab = $('.direction_tab_widget');
        // FAQ wraper
        var faq_wrapper = $('.faq_wrapper');
        // all currencies side menu selector when its open
        var all_currency_side_menu_open = $('.side_all_currency_widget');
        // BIG NEWS BLOCK ( AT NEWS PAGE, 2 BIG NEWS)
        var big_news = $('.big_news');
        // contacts block
        var contacts_ = $('.contacts_wrapper');

        var side_menu_width = 360;


        // open / close side menu and set left padding to all elements
        $(all_currency_side_menu_open_btn).on('click',function () {
            //find out how much should table shift, depending of screen width
            var paddings = side_menu_set_left();

            // $(all_currency_side_menu).toggleClass('open');
            if($(all_currency_side_menu).hasClass('open'))
                $(all_currency_side_menu).removeClass('open');
            else
                $(all_currency_side_menu).addClass('open');
            // toggle class side_menu_opened to change table
            // $(table_wrap).toggleClass('side_menu_opened');
            if($(table_wrap).hasClass('side_menu_opened'))
                $(table_wrap).removeClass('side_menu_opened');
            else
                $(table_wrap).addClass('side_menu_opened');

            // set left padding to  ЧАСТЫЕ ВОПРОСЫ
            if($(often_operation))
                $(often_operation).css({marginLeft: paddings.table });
            // set left padding to TABLE
            if($(table_wrap))
                $(table_wrap).css({paddingLeft: paddings.table});
            // set left padding to DIRECTION WIDGET
            if($(direction_widget))
                $(direction_widget).css({paddingLeft: paddings.table});
            // set left padding to НАПРАВЛЕНИЯ
            if($(direction_tab))
                $(direction_tab).css({paddingLeft: paddings.table});
            // set left padding to BIG NEWS at news page
            if($(big_news))
                $(big_news).css({paddingLeft: paddings.table});
            // set left padding to BIG NEWS at news page
            if($(faq_wrapper))
                $(faq_wrapper).css({paddingLeft: paddings.table});
            // set lefc
            if($(faq_wrapper))
                $(faq_wrapper).css({paddingLeft: paddings.table});

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
                // then set side menu left property to this value, for appropriate left padding...
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

        // HOW IT WORKS POP UP
        // close/open pop up
        var how_it_works_pop_up = $('.how_it_works_pop_up_wrapper');
        var how_it_works_pop_up_close = $('.how_it_works_pop_up_wrapper .close__');
        var how_it_works_pop_up_open = $('.direction_widget .how_it_works');
        $(how_it_works_pop_up_close).click(function () {
            $(how_it_works_pop_up).fadeToggle(100);
        })
        $(how_it_works_pop_up_open).click(function () {
            $(how_it_works_pop_up).fadeToggle(100);
        })

        // checkbox test
        $('.calculator_wrap .check_box input').ionCheckRadio();

        // CLOSE OPEN CALCULATOR
        var calc_open_icon = $('.often_questions i.icon-calculator_icon');
        var  calc_body = $('.calculator_wrap');
        $(calc_open_icon ).click(function () {
            $(calc_body).slideToggle(100);
        })

        // OPEN CLOSE SEARCH
        var header_search_open_icon = $('.under_header_gray_line .search_block .icon-search_icon');
        var header_search_element_body = $('.under_header_gray_line .search_element_wrapper');
        $(header_search_open_icon).click(function () {
            $(header_search_element_body).fadeToggle(100).find('input').focus();
        })
        // CLOSE SEARCH ELEMENT BY CLICKING OUTSIDE OF THIS SEARCH ELEMENT
        $(document).click(function(event) {
            if(!$(event.target).closest(header_search_element_body).length && !$(event.target).closest(header_search_open_icon).length) {
                if($(header_search_element_body).is(":visible")) {
                    $(header_search_element_body).fadeOut(100);
                }
            }
        })

        // FUNCTION TO ADD FAVORITE ICON TO CURRENCY ICONS
        function add_favorite() {

            // open adding state icon/иконка включающая режим добавления favorite
            var open_state_icon_give = $('#give_favorite');
            var open_state_icon_get = $('#get_favorite');
            var favorite_block = $('.favorite_block');
            var favorite_block_i = $('.favorite_block i');

            $(open_state_icon_give).click(function () {
                // fadeToggle favorite icons
                $('#give_main_line').find('.favorite_block').fadeToggle(100);
                // toggle text on open favorite state icon
                $(this).toggleClass('favorite_active');
                $(this).parent().siblings('.add_favorite_text').fadeToggle(100);
            })
            $(open_state_icon_get).click(function () {
                // fadeToggle favorite icons
                $('#get_main_line').find('.favorite_block').fadeToggle(100);
                // toggle text on open favorite state icon
                $(this).toggleClass('favorite_active');
                $(this).parent().siblings('.add_favorite_text').fadeToggle(100);
            })
            $(favorite_block_i).click(function () {
                $(this).toggleClass('active');
                $(this).closest('.icon_img_block').toggleClass('favorite');
            })
        }
        add_favorite();


    //    DIRECTION WIDGET(LINE) / ВКЛАДКА "НАПРАВЛЕНИЯ"
        $('.direction_tab_widget .actions_line i.fa.fa-star-o').on('click', function(){
            // add favorite styles
            $(this).parent().toggleClass('favorite_active');
            $('.direction_tab_widget .actions_line').toggleClass('favorite_active');
            $('.direction_tab_widget .favorite_block').fadeToggle(100);
            // remove delete block styles
            $('.direction_tab_widget .actions_line').removeClass('delete_active');
            $('.direction_tab_widget .delete_block').fadeOut(100);
            $('.direction_tab_widget .actions_line .delete_icon').removeClass('active');
        });
        $('.direction_tab_widget .currency_block .favorite_block').on('click', function () {
            $(this).parent().toggleClass('favorite_active');
        });
        $('.direction_tab_widget .currency_block .delete_block').on('click', function () {
            $(this).toggleClass('delete_active');
        });
        $('.direction_tab_widget .actions_line .delete_icon').on('click', function(){
            // add delete styles
            $(this).toggleClass('active');
            $('.direction_tab_widget .actions_line').toggleClass('delete_active');
            $('.direction_tab_widget .delete_block').fadeToggle(100);
            // remove all concerning favorite
            $('.direction_tab_widget .actions_line').removeClass('favorite_active');
            $('.direction_tab_widget .favorite_block').fadeOut(100);
            $('.direction_tab_widget .actions_icons').removeClass('favorite_active');
        });

        // nice select init on news page, to filter news select
        $('.news_filter select').niceSelect();

        // comments select init
        $('.comments').niceSelect();

        // comments select init
        $('.obmenka_wrap .form_1 select').niceSelect();

        // comments select init
        $('.obmenka_wrap .form_2 select').msDropDown();


        //  ADD CURRENCIES WIDGET ( VIA GREEN PLUS ICON )
        var first_padding = $('#pop_up_currecy .tab.pay_systems .icons_each.open .sub_body').height();
        $('#pop_up_currecy .tab.pay_systems').css({'paddingBottom': first_padding+5});
        function add_currency_widget() {
            $('#pop_up_currecy .tab.pay_systems .icons_each').hover(function () {
                var padding = $(this).find('.sub_body').height()+5;
                $(this).parent().find('.icons_each').removeClass('open').parent().parent().parent().css({'paddingBottom': padding});
                $(this).addClass('open');
            });
            $('#pop_up_currecy .tab .title').on('click', function(){
                $(this).parent().find('.tab_body').toggle(0);
                $(this).toggleClass('open');
            });
            $('#pop_up_currecy .tab.pay_systems .title').on('click', function () {
                if(!$(this).parent().find('.tab_body').is(':visible')){
                    $('#pop_up_currecy .tab.pay_systems').attr('style', 'paddingBottom: 0px');
                }
            })
        }
        add_currency_widget();
        $('.icons_each.add_icon .icon_img_block').on('click', function () {
            $(this).parent().find('.add_currency_pop_up_block').fadeToggle(100);
        })


        // FAQ PAGE TABS
        $('.faq_tab .tab_title').on('click', function () {
            $(this).parent().toggleClass('active');
        })
        $('.faq_tab .question_title').on('click', function () {
            $(this).toggleClass('active').siblings('.question_body').slideToggle(200);
        })
        $('.faq_tab:first-child .tab_title').trigger('click');










    });


}());