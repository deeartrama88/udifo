"use strict";!function(){$(document).ready(function(){function e(){if(g)p.table=0,p.often=0,g=!g;else{var e=window.outerWidth;p.table=(e-1170)/2-370,p.often=(e-1170)/2-442,p.table=Math.abs(p.table),p.often=Math.abs(p.often),console.log(p.table),console.log(p.often),g=!g}return p}function t(){var e=$("#give_favorite"),t=$("#get_favorite"),i=($(".favorite_block"),$(".favorite_block i"));$(e).click(function(){$("#give_main_line").find(".favorite_block").fadeToggle(100),$(this).toggleClass("favorite_active"),$(this).parent().siblings(".add_favorite_text").fadeToggle(100)}),$(t).click(function(){$("#get_main_line").find(".favorite_block").fadeToggle(100),$(this).toggleClass("favorite_active"),$(this).parent().siblings(".add_favorite_text").fadeToggle(100)}),$(i).click(function(){$(this).toggleClass("active"),$(this).closest(".icon_img_block").toggleClass("favorite")})}function i(){$("#pop_up_currecy .tab.pay_systems .icons_each").hover(function(){var e=$(this).find(".sub_body").height()+5;$(this).parent().find(".icons_each").removeClass("open").parent().parent().parent().css({paddingBottom:e}),$(this).addClass("open")}),$("#pop_up_currecy .tab .title").on("click",function(){$(this).parent().find(".tab_body").toggle(0),$(this).toggleClass("open")}),$("#pop_up_currecy .tab.pay_systems .title").on("click",function(){$(this).parent().find(".tab_body").is(":visible")||$("#pop_up_currecy .tab.pay_systems").attr("style","paddingBottom: 0px")})}var n=$(".side_all_currency_widget"),a=$(".open_icon_wrapper"),o=$(".body_toggle"),c=$(".direction_widget"),s=$(".often_questions"),_=$(".table_wrap"),l=$(".direction_tab_widget"),d=$(".faq_wrapper"),r=($(".side_all_currency_widget"),$(".big_news"));$(".contacts_wrapper");$(window).width()>1024?$(a).on("click",function(){var t=e();$(n).hasClass("open")?$(n).removeClass("open"):$(n).addClass("open"),$(_).hasClass("side_menu_opened")?$(_).removeClass("side_menu_opened"):$(_).addClass("side_menu_opened"),$(s)&&$(s).css({marginLeft:t.table}),$(_)&&$(_).css({paddingLeft:t.table}),$(c)&&$(c).css({paddingLeft:t.table}),$(l)&&$(l).css({paddingLeft:t.table}),$(r)&&$(r).css({paddingLeft:t.table}),$(d)&&$(d).css({paddingLeft:t.table}),$(d)&&$(d).css({paddingLeft:t.table})}):$(a).on("click",function(){$(n).hasClass("open")?$(n).removeClass("open"):$(n).addClass("open")}),$(o).click(function(){$(this).parent().find(".wrap").slideToggle().parent().find(this).toggleClass("open")});var g=!1,p={},u=$(".how_it_works_pop_up_wrapper"),f=$(".how_it_works_pop_up_wrapper .close__"),b=$(".direction_widget .how_it_works");$(f).click(function(){$(u).fadeToggle(100)}),$(b).click(function(){$(u).fadeToggle(100)}),$('input[type="checkbox"]').ionCheckRadio();var m=$(".often_questions i.icon-calculator_icon"),v=$(".calculator_wrap");$(m).click(function(){$(v).slideToggle(100)});var h=$(".under_header_gray_line .search_block .icon-search_icon"),w=$(".under_header_gray_line .search_element_wrapper"),k=$(".user_pop_up_menu"),y=$(".user_logged_in_pop_up"),C=$(".popup_mobile_menu");$(h).click(function(){$(w).fadeToggle(100).find("input").focus()}),$(document).on("click touchstart",function(e){$(e.target).closest(w).length||$(e.target).closest(h).length||$(w).is(":visible")&&$(w).fadeOut(100),$(k)&&($(e.target).closest($(k)).length||$(e.target).closest($(".user_cabinet .logged .name")).length||$(k).is(":visible")&&$(k).fadeOut(100)),$(y)&&($(e.target).closest($(y)).length||$(e.target).closest($(".user_cabinet .logged .fa-sign-out")).length||$(y).is(":visible")&&$(y).fadeOut(100)),$(C)&&($(e.target).closest($(C)).length||$(e.target).closest($(".mobile_menu_block i.fa-bars")).length||$(C).is(":visible")&&$(C).fadeOut(100))}),t(),$(".direction_tab_widget .actions_line i.fa.fa-star-o").on("click",function(){$(this).parent().toggleClass("favorite_active"),$(".direction_tab_widget .actions_line").toggleClass("favorite_active"),$(".direction_tab_widget .favorite_block").fadeToggle(100),$(".direction_tab_widget .actions_line").removeClass("delete_active"),$(".direction_tab_widget .delete_block").fadeOut(100),$(".direction_tab_widget .actions_line .delete_icon").removeClass("active")}),$(".direction_tab_widget .currency_block .favorite_block").on("click",function(){$(this).parent().toggleClass("favorite_active")}),$(".direction_tab_widget .currency_block .delete_block").on("click",function(){$(this).toggleClass("delete_active")}),$(".direction_tab_widget .actions_line .delete_icon").on("click",function(){$(this).toggleClass("active"),$(".direction_tab_widget .actions_line").toggleClass("delete_active"),$(".direction_tab_widget .delete_block").fadeToggle(100),$(".direction_tab_widget .actions_line").removeClass("favorite_active"),$(".direction_tab_widget .favorite_block").fadeOut(100),$(".direction_tab_widget .actions_icons").removeClass("favorite_active")}),$(".news_filter select").niceSelect(),$(".comments select").niceSelect(),$(".obmenka_wrap .form_1 select").niceSelect(),$(".cabinet_wrapper select").niceSelect(),$(".obmenka_wrap .form_2 select").msDropDown(),$(".contacts_wrapper select").niceSelect(),$(".edit_cabinet_exchanger .exchange_block__ select").niceSelect("destroy"),$(".edit_cabinet_exchanger .exchange_block__ select").msDropDown(),$(".cabinet_side_menu_mobile select").niceSelect("destroy"),$(".cabinet_side_menu_mobile select").msDropDown();var T=$("#pop_up_currecy .tab.pay_systems .icons_each.open .sub_body").height();$("#pop_up_currecy .tab.pay_systems").css({paddingBottom:T+5}),i(),$(".icons_each.add_icon .icon_img_block").on("click",function(){$(this).parent().find(".add_currency_pop_up_block").fadeToggle(100)}),$(".faq_tab .tab_title").on("click",function(){$(this).parent().toggleClass("active")}),$(".faq_tab .question_title").on("click",function(){$(this).toggleClass("active").siblings(".question_body").slideToggle(200)}),$(".faq_tab:first-child .tab_title").trigger("click"),$(".user_cabinet .logged .name")&&$(".user_pop_up_menu")&&$(".user_cabinet .logged .name").on("click",function(){$(".user_pop_up_menu").fadeToggle(100)}),$(".user_cabinet .logged .fa-sign-out")&&$(".user_logged_in_pop_up")&&$("#cabinet_open_log_icon").on("click",function(){$(".user_logged_in_pop_up").fadeToggle(100)});var O=$(".cabinet_inside_wrap");if($(O)&&$(".cabinet_inside_wrap .side_menu li a, .add_new_exchanger_cabinet, .open_cabinet_edit_icon").on("click",function(e){e.preventDefault();var t=$(this).data().sideconteiner;$(".side_menu_content__wrap").fadeOut(0),$(".side_menu_content").find(".side_menu_content__wrap."+t).fadeIn(0),$(".cabinet_inside_wrap .side_menu li").removeClass("active"),$(this).parent().addClass("active")}),$(O).length>0&&$(".side_menu_content__wrap.favorite .top_line span").on("click",function(e){e.preventDefault();var t=$(this).data().bodies;$(".side_menu_content__wrap.favorite .bodies").fadeOut(0),$(".side_menu_content__wrap.favorite").find(".bodies."+t).fadeIn(0),$(".side_menu_content__wrap.favorite .top_line span").removeClass("active"),$(this).addClass("active")}),$(O).length>0){var x=$(".cabinet_side_menu_mobile select")[0],I=$(x).find("option:selected").data().sideconteiner;$(".side_menu_content__wrap").fadeOut(0),$(".side_menu_content").find(".side_menu_content__wrap."+I).fadeIn(0),$(x).on("change",function(){I=$(x).find("option:selected").data().sideconteiner,$(".side_menu_content__wrap").fadeOut(0),$(".side_menu_content").find(".side_menu_content__wrap."+I).fadeIn(0)})}$("#datapic1").datepicker({showOn:"button",buttonImage:"./images/icons/calendar_fa.png",buttonImageOnly:!0,dateFormat:"dd.mm.yy",buttonText:"Select date"}),$("#datapic2").datepicker({showOn:"button",buttonImage:"./images/icons/calendar_fa.png",buttonImageOnly:!0,dateFormat:"dd.mm.yy",buttonText:"Select date"}),$("#datapic3").datepicker({showOn:"button",buttonImage:"./images/icons/calendar_fa.png",buttonImageOnly:!0,dateFormat:"dd.mm.yy",buttonText:"Select date"});var S=$(".dot_toggle"),q=$(".often_questions.active .actions_block i");$(S).on("click",function(){if(!$(this).hasClass("active")){$(S).removeClass("active"),$(this).addClass("active");for(var e=0;4>e;e++){var t=$(q[e]);$(t).toggleClass("active")}}});var D=$(".widget_main_block_mobile_phones .fa-star-o");$(D).length>0&&$(D).on("click",function(){$(this).parent().parent().find(".favorite").toggleClass("active")});var L=$(".mobile_menu_block i.fa-bars"),B=$(".popup_mobile_menu");$(L)&&$(L).on("click",function(){$(B).fadeToggle(200)})})}();
