console.log('Hello searchapi.js');
var wrap = document.getElementById('wrap');
var q = document.getElementById('searchkeyword')
var apikey = '6aaaae9ac6df9b23cd7f506304ffe14f';
var template = document.getElementById('searchresult').innerHTML;






function makeUrl(q){
    var apiurl = 'https://apis.daum.net/search/vclip?q='+q+'&apikey='+apikey+'&output=json';
    return apiurl;
}

console.log(apiurl);

function render(wrap, template, data){
    var html = tmpl(template, {list: channel.item});
    wrap.innerHTML = html;
}

getJSON(apiurl, function(res){ console.log(res); });