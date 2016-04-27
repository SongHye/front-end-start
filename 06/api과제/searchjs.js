console.log('Hello searchapi.js');
var wrap = document.getElementById('wrap');
var searchkeyword = document.getElementById('searchkeyword')
var q;
var template = document.getElementById('searchresult').innerHTML;
var searchbtn = document.getElementById('searchbtn');
var page;

searchbtn.addEventListener('click', dosearch);

function dosearch(){
    q = searchkeyword.value;
    page = 1;
    getjson(makeUrl(q));
}

function getjson(apiurl) {
    getJSON(apiurl, function(res) {console.log(res);
                                   render(wrap, template, res.channel.item);
                                   mksmbtn();
                                 }
           );
}

function makeUrl(q){
    var apikey = '6aaaae9ac6df9b23cd7f506304ffe14f';
    var apiurl = 'https://apis.daum.net/search/vclip?q='+q+'&apikey='+apikey+'&output=json&pageno='+page+'';
    console.log('url 이 생성되었습니다.');
    return apiurl;
}

function render(wrap, template, data) {
    var html = tmpl(template, {list: data});
    wrap.innerHTML += html;
    console.log('render 함수 실행');
}

function mksmbtn(){
    var addbutton = wrap.innerHTML;
    addbutton += '<button onclick="viewmore()">더보기</button>'
    wrap.innerHTML = addbutton;
}

function viewmore(){
    if(page==3) {alert('더 이상 표시할 내용이 없습니다.');}
    else{page++;
         getjson(makeUrl(q));
         console.log('page 1 증가, page : ' + page);
    }
}