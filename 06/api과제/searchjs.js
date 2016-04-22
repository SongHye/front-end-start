console.log('openapi.js');
var wrap = document.getElementById('wrap');
var template = document.getElementById('searchresult').innerHTML;

var apikey = '6aaaae9ac6df9b23cd7f506304ffe14f';

var q = document.getElementById('searchkeyword')
var apiurl = 'https://apis.daum.net/search/vclip?q='+q+'&apikey='+apikey+'&output=json';

console.log(apiurl);

function render(wrap, template, data){
    var html = tmpl(template, {list: channel.item});
    wrap.innerHTML = html;
}

getJSON(apiurl, function(res){console.log(res);});