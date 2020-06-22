let html = document.querySelector('#html')
let style = document.querySelector("#style")
let n = 0;
let string = `/*你好,我叫小张,
*接下来我演示一下我的项目,
*首先是一个方框
*/
body{
    color: #000;
}
/*
*接下来我要开始制作一个八卦图了,
*看好了
**/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来变成一个圆形
*加上一点的阴影
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(34,0,0,0.3);
    border:none;
}
/*八卦是阴阳现成的的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的球*/
#div1::before{
    width:100px;
    height:100px;
    // border:1px solid red;
    top:0px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#FFF;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    // border:1px solid red;
    bottom:0px;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    // background:#000;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);

}

`;
let string2 = '';
let step = () => {
    setTimeout(() => {
        if (string[n] === '\n') {
            string2 += '<br>';
        } if (string[n] === " ") {
            string2 += "&nbsp";
        } else {
            string2 += string[n];            
        } window.scrollTo(0, 999900);
        html.scrollTo(0, 999900);
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        
        // demo.innerHTML = string.substring(0,n);
        if (n < string.length - 1) {
            n += 1;
            step()
        }
    }, 1)
};
step();

