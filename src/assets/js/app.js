import $ from 'jquery';

var is_log = 1;
window.$ = $;
window.jQuery = $;

import NProgress from "nprogress";
window.NProgress = NProgress;

require("bootstrap-sass");
require("select2");
require("jquery-validation");
require("jquery-sparkline");
require("jquery.flot");
require("jquery.resize");
require("jquery.growl");
require("jquery-slimscroll");
require("bootstrap-growl-ifightcrime");
require("bootstrap-datepicker");
require("datatables");

import dataTable from 'datatables';
window.dataTable = dataTable;

if(is_log){
  console.log("jquery loaded ?", $ instanceof Function);
  console.log("jquery.validate loaded?", $().validate instanceof Function);
  console.log("jquery.sparkline loaded?", $().sparkline instanceof Function);
  console.log("jquery.flot loaded?", $().flot instanceof Function);
  console.log("jquery.plot loaded?", $().plot instanceof Function);
  console.log("jquery.resize loaded?", $().resize instanceof Function);
  console.log("jquery.slimScroll loaded?", $().slimScroll instanceof Function);
  console.log("bootstrap-datepicker loaded?", $().datepicker instanceof Function);
  console.log("bootstrap-growl-ifightcrime loaded?", $().bootstrapGrowl instanceof Function);
  console.log("select2 loaded?", $().select2 instanceof Function);
  console.log("NProgress is a", typeof NProgress );
  console.log("NProgress loaded?", NProgress.start instanceof Function);
  console.log("dataTable is a", typeof dataTable );
  console.log("dataTable loaded?", $().dataTable instanceof Function);
}

//load seme.js
import Seme from './seme.js';
window.Seme = Seme;

if(is_log){
  console.log("Seme type: ", typeof Seme);
  console.log("Seme", window.Seme instanceof Object);
}


$("body").on("click",".btn-sidebar-toggle",function(e){
  e.preventDefault();
  $("#page-container").toggleClass("sidebar-visible");
});
