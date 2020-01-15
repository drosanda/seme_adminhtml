var Seme = function(){
  var pc;
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
  return {
    init: function(){
      console.log("Seme Init triggered");
      ui();
      afterLoad();
    },
    sidebar: function(){
      pc.toggleClass("sidebar-visible");
    },
    datatables: function(){
      console.log("Seme datatables triggered");
      $.extend(true, $.fn.dataTable.defaults, {
        "sDom": "<'row'<'col-sm-6 col-xs-5'l><'col-sm-6 col-xs-7'f>r>t<'row'<'col-sm-5 hidden-xs'i><'col-sm-7 col-xs-12 clearfix'p>>",
        "sPaginationType": "bootstrap",
        "oLanguage": {
          "sLengthMenu": "_MENU_",
          "sSearch": "<div class=\"input-group\">_INPUT_<span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span></div>",
          "sInfo": "<strong>_START_</strong>-<strong>_END_</strong> of <strong>_TOTAL_</strong>",
          "oPaginate": {
            "sPrevious": "",
            "sNext": ""
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
