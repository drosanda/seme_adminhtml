/*
 *  Document   : seme.js
 *  Author     : Seme Framework
 *  Description: Custom scripts and plugin initializations (available to all pages)
 */
var Seme = function(){
  var pc;
  var hdr;
  var bhs;
  
  //utility
  var getWindowWidth = function(){
    return window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  };
  
  //backToTop
  var backToTop = function() {
    var link = $('#back-to-top');
    $(window).scroll(function() {
      // If the user scrolled a bit (150 pixels) show the link in large resolutions
      if (($(this).scrollTop() > 150) && (getWindowWidth() > 991)) {
        link.fadeIn(100);
      } else {
        link.fadeOut(100);
      }
    });

    // On click get to top
    link.click(function() {
      $('html, body').animate({scrollTop: 0}, 400);
      return false;
    });
  };
  
  //initialize UI element
  var ui = function(){
    backToTop();
    pc = $("#page-container");
    hdr = $("header.seme-header");
    sideBarMenu();
    $("body").off("click",".btn-header-show");
    $("body").on("click",".btn-header-show",function(e){
      e.preventDefault();
      hdr.slideToggle("slow");
      if($(this).find("i").hasClass("fa-ravelry")){
        $(this).find("i").toggleClass("fa-spin");
      }
    });
    $('.select-select2').select2();
    $('.input-datepicker, .input-daterange').datepicker({weekStart: 1});
    $('.input-datepicker-close').datepicker({weekStart: 1}).on('changeDate', function(e){ $(this).datepicker('hide'); });
  }
  var afterLoad = function(){
    var pw = $('#page-wrapper');
    if (pw.hasClass('page-loading')) {
      pw.removeClass('page-loading');
    }
  }
  var sideBarMenu = function(){
    $.each($(".sidebar-nav-menu"),function(k,v){
      $(this).siblings("ul").hide("");
    });
    $.each($(".sidebar-nav-menu"),function(k,v){
      if($(this).parent().hasClass("active")){
        $(this).siblings("ul").slideToggle("fast");
      }
    });
    $("body").off("click",".sidebar-nav-menu");
    $("body").on("click",".sidebar-nav-menu",function(e){
      e.preventDefault();
      $(this).siblings("ul").slideToggle("slow");
      console.log("Dulur: "+$(this).siblings("ul"));
      $(this).focus();
    });
  }
  var formModuleSearch = function(){
    $("#form_module_search").on("submit",function(e){
      e.preventDefault();
      var fl = $("#form_module_search").find("input[name='filter']").val().toUpperCase();
      console.log("fl: "+fl);
      $.each($(".sidebar-nav-menu"),function(k,v){
        $(this).siblings("ul").show("fast");
        $.each($(this).siblings("ul"),function(k2,v2){
          //console.log(k2+": "+v2+" value: "+$(v2).find("li").html().trim());
          $.each($(v2).children("li"),function(k3,v3){
            //console.log(k3+": "+v3+" value: "+$(v3).find("a").html().trim());
            console.log("str: "+$(v3).find("a").html().trim().toUpperCase());
            console.log("idxOf: "+$(v3).find("a").html().trim().toUpperCase().indexOf(fl));
            if($(v3).find("a").html().trim().toUpperCase().indexOf(fl) > -1){
              $(v3).show();
            }else{
              $(v3).hide();
            }
          })
        })
      });
    });
  }
  return {
    init: function(){
      console.log("Seme Init triggered");
      ui();
      formModuleSearch();
      afterLoad();
    },
    sidebar: function(){
      pc.toggleClass("sidebar-visible");
    },
    header: function(){
      hdr.toggleClass("seme-header-invisible");
    },
    datatables: function(){
      console.log("dataTable version: "+$.fn.dataTable.version);
      console.log("Seme datatables triggered");
      $.extend(true, $.fn.dataTable.defaults, {
        "dom": "<'row'<'col-sm-6 col-xs-5'l><'col-sm-6 col-xs-7'f>r>t<'row'<'col-sm-5 hidden-xs'i><'col-sm-7 col-xs-12 clearfix'p>>",
        "pagingType": "full_numbers",
        "language": {
          "lengthMenu": "_MENU_",
          "search": "<div class=\"input-group\">_INPUT_<span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span></div>",
          "info": "<strong>_START_</strong>-<strong>_END_</strong> of <strong>_TOTAL_</strong>",
          "paginate": {
            "first": "",
            "last": "",
            "next": '<span class="pagination-default"></span><span class="pagination-fa"><i class="fa fa-chevron-right" ></i></span>',
            "previous": '<span class="pagination-default"></span><span class="pagination-fa"><i class="fa fa-chevron-left" ></i></span>',
          }
        }
      });
      $.extend($.fn.dataTableExt.oStdClasses, {
        "sWrapper": "dataTables_wrapper form-inline",
        "sFilterInput": "form-control",
        "sLengthSelect": "form-control"
      });
    },
    print: function(){
      
    }
  }
}();
export default Seme;
