var apiurl = "http://m.movie.daum.net/data/movie/movie_info/box_office.json?country=KR&startDate=20150101&endDate=20150401&pageSize=10&";


var wrap = document.getElementById('wrap');
var template = document.getElementById('movieListTemplate').innerHTML;

//서로 도메인이 달라서 호출 불가

//ajax(apiurl, function(responseText){console.log('responseText'); } );
//var data = {
//    {
//    title:'',
//    img:'',
//    starRating:'',
//    link:''
//    };   
//}

function render(wrap, template, data){
    var html = tmpl(template, {list: data});
    wrap.innerHTML = html;
}

getJSON(apiurl, function(res){console.log(res);
                            render(wrap, template, res.data);
                              });
