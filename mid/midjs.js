var board_tab = document.getElementById('board');
var video_tab = document.getElementById('video');
var image_tab = document.getElementById('image');
var tips_tab  = document.getElementById('tips');
var blog_tab  = document.getElementById('blog');
var cafe_tab  = document.getElementById('cafe');
var schbtn    = document.getElementById('searchbtn');
var wrap      = document.getElementById('wrap');

var flag;                                               // 탭 종류
var html_flag = 0;                                      // 탭 실행 횟수 플래그
var pageno = 1;                                         // 페이지 넘버
var result = 1;                                         // 출력할 검색결과 수 
var apiurl;

var template = document.getElementById('sResultTemplate').innerHTML;
var image_insert = document.getElementById('image_insert');
var nextPagebtn = document.getElementById('nextPagebtn');
var morebtn   = document.getElementById('moreBtn');


schbtn.addEventListener('click', board_flag);           // 기본검색결과
schbtn.addEventListener('click', dosch);
board_tab.addEventListener('click', board_flag);
board_tab.addEventListener('click', dosch);
video_tab.addEventListener('click', video_flag);
video_tab.addEventListener('click', dosch);
image_tab.addEventListener('click', image_flag);
image_tab.addEventListener('click', dosch);
tips_tab.addEventListener('click', tips_flag);
tips_tab.addEventListener('click', dosch);
blog_tab.addEventListener('click', blog_flag);
blog_tab.addEventListener('click', dosch);
cafe_tab.addEventListener('click', cafe_flag);
cafe_tab.addEventListener('click', dosch);
//morebtn.addEventListener('click', nextPage);

function board_flag() {
    flag = "board";
    html_flag = 0;
    pageno = 1;
    
    board_tab.className = "active";
    video_tab.className = "no";
    image_tab.className = "no";
    tips_tab.className  = "no";
    blog_tab.className  = "no";
    cafe_tab.className  = "no";
    // console.log( flag + ' 탭 활성화');
}

function video_flag() {
    flag = "vclip";
    html_flag = 0;
    pageno = 1;

    board_tab.className = "no";
    video_tab.className = "active";
    image_tab.className = "no";
    tips_tab.className  = "no";
    blog_tab.className  = "no";
    cafe_tab.className  = "no";
    // console.log( flag + ' 탭 활성화');
}

function image_flag() {
    flag = "image";
    html_flag = 0;
    pageno = 1;
    
    board_tab.className = "no";
    video_tab.className = "no";
    image_tab.className = "active";
    tips_tab.className  = "no";
    blog_tab.className  = "no";
    cafe_tab.className  = "no";
    // console.log( flag + ' 탭 활성화');
}

function tips_flag(event) {
    flag = "knowledge";
    html_flag = 0;
    pageno = 1;
    
    board_tab.className = "no";
    video_tab.className = "no";
    image_tab.className = "no";
    tips_tab.className  = "active"; 
    blog_tab.className  = "no";
    cafe_tab.className  = "no";
    // console.log( flag + ' 탭 활성화');
}

function blog_flag(event) {
    flag = "blog";
    html_flag = 0;
    pageno = 1;
    
    board_tab.className = "no";
    video_tab.className = "no";
    image_tab.className = "no";
    tips_tab.className  = "no"; 
    blog_tab.className  = "active";
    cafe_tab.className  = "no";
    // console.log( flag + ' 탭 활성화');
}

function cafe_flag(event) {
    flag = "cafe";
    html_flag = 0;
    pageno = 1;
    
    board_tab.className = "no";
    video_tab.className = "no";
    image_tab.className = "no";
    tips_tab.className  = "no";
    blog_tab.className  = "no";
    cafe_tab.className  = "active";
    // console.log( flag + ' 탭 활성화');
}

function mkUrl(q, flag){
    var apikey = '6aaaae9ac6df9b23cd7f506304ffe14f';
    apiurl = 'https://apis.daum.net/search/'+flag+'?q='+q+'&apikey='+apikey+'&output=json&pageno='+pageno+'';
    console.log('url 이 생성되었습니다., q =' + q + ', flag = ' + flag);
    return apiurl;
}

var before_html = "";

function dosch(){
    wrap.innerHTML = image_insert.innerHTML;        // ajax 로딩 이미지
    var q = document.getElementById('q').value;
        if(q === "") {alert('검색어를 입력하세요.');}
    getjson(mkUrl(q, flag));
    console.log('apiurl : ' + apiurl);
}

function getjson(apiurl){
    getJSON(apiurl, function(res) { console.log(res);
                                    var html = tmpl(template, {list: res.channel.item});
                                    wrap.innerHTML += html;
                                    
                                    var pageCount = res.channel.pageCount;
                                    console.log(pageCount);
                                      if(pageCount > 10)
                                        pageCount_flag = 1;

                                     // 해석된 html을 $wrap 넣어주기
                                      if(html_flag === 0 && pageno === 1)
                                        init_html();

                                     if(html_flag === 0) {
                                          before_html = "";}               
 
                                     wrap.innerHTML = before_html; 
                                     wrap.innerHTML += html;

                                     before_html += html;

                                     html_flag = 1;
                                   
                                    mknPbtn();
                                  }
           );
}

//function render(wrap, template, data){
//    var html = tmpl(template, {list: data});
//    wrap.innerHTML += html;
//    console.log('render 함수 실행');
//}
function mknPbtn(){
    var addbutton = nextPagebtn.innerHTML;
    addbutton += '<button class="btn btn-default btn-block" id="moreBtn">더보기</button>'
    nextPagebtn.innerHTML = addbutton;
}

function init_html() {
	 wrap.innerHTML = "";
}

function nextPage(){
    if(pageCount_flag === 1){
        pageno ++;
        getjson(mkUrl(q, flag));
        console.log('pageno 1 증가, pageno : ' + pageno);
    }
}