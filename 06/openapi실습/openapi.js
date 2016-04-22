console.log('openapi.js');

var apikey = '6aaaae9ac6df9b23cd7f506304ffe14f';

var q = '제주대'
var apiurl = 'https://apis.daum.net/search/vclip?q='+q+'&apikey='+apikey+'&output=json';

console.log(apiurl);
getJSON(apiurl, function(res){console.log(res);});