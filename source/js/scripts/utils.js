isEmpty = function(obj) {
  if ( (obj === null) || (obj === undefined) || (typeof obj !== 'object') ) {
    return true;
  }
  return Object.keys(obj).length === 0;
}

window.appRoot = '/Users/halhelms/bom-exploder/';

Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

 who = function() {
  var displayNameLength = this.__proto__.constructor.displayName.length;
  var maxLength = 24;
  var spacingLength = maxLength - displayNameLength;
  var spacing = '';
  for (var i=0; i<spacingLength; i++) {
    spacing += " ";
  }
  console.log('%c ⭐️ ' +this.__proto__.constructor.displayName + spacing + ' @ ' + window.appRoot + this.__proto__.path, 'color:green');
 }

 clear = function() {
  console.clear();
 }