// 1. 1부터 100까지 덧셈

//var sum=0;
//for (var i=0;i<=100;i++){
//    sum=i+sum;
//}
//console.log(sum);


// 2. 1부터 100까지의 수 중 홀수 출력

//for (var i=0;i<=99;i++){
//    i=i+1
//    console.log(i);    
//}


// 3. 구구단

//for (var i=1;i<10;i++){
//    for (var j=1;j<10;j++){
//        console.log(i + " * " + j + " = " + i*j)
//    }
//    console.log("\n")
//}
//console.log( i);


// 4. prompt()를 이용하여 숫자를 입력받아 그 숫자의 합을 구함

//var i = prompt("더할 숫자 중 하나를 입려하세요");
//var j = prompt("나머지 더할 숫자를 입력하세요");
//var sum = i + j;
//alert("두 숫자의 합은 " + sum + " 입니다.");


//// 5. 함수화

while (1) {
    
    var i = prompt("더할 숫자를 입력하세요");
    var sum=sum+i
    
    if (i == "") {
    break;
    }
}
alert("숫자들의 합은 " + sum + " 입니다.");

// 로 만들었으나 잘 되지 않습니다......ㅠㅠ
// 인트로 받아줘야 하는데 앞에거는 다 인트로 받아줘놓고 이제와서 캐릭터로 받아들여버리는데 어쩌면 좋을까요...
    
