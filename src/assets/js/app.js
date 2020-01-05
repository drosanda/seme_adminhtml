import $ from 'jquery';

var is_log = 0;
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
require("jquery-slimscroll");

if(is_log){
console.log("jquery loaded ?", $ instanceof Function);
console.log("jquery.validate loaded?", $().validate instanceof Function);
console.log("jquery.sparkline loaded?", $().sparkline instanceof Function);
console.log("jquery.flot loaded?", $().flot instanceof Function);
console.log("jquery.plot loaded?", $().plot instanceof Function);
console.log("jquery.resize loaded?", $().resize instanceof Function);
console.log("jquery.slimScroll loaded?", $().slimScroll instanceof Function);
console.log("select2 loaded?", $().select2 instanceof Function);
console.log("NProgress is a", typeof NProgress );
console.log("NProgress loaded?", NProgress.start instanceof Function);
}