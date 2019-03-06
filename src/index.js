import './style/index.scss';
let canvas = document.getElementById("canvasTest"),
    ctx = canvas.getContext('2d');
canvas.isDraw = true;

canvas.addEventListener("mousedown",function(e){
    //计算出鼠标点击在canvas中的位置

    var x = e.offsetX;
    var y = e.offsetY;

    //记录旧的点
    this.oldPoint = {
        x : x - 1,
        y : y - 1
    }

    if (this.isDraw) {
        //画笔功能
        draw(x,y);
    } else {
        //橡皮擦功能
        clearPart(x,y);
    }

    //绑定移动和抬起事件
    this.addEventListener("mousemove",move);
    this.addEventListener("mouseup",up);
})

function up() {
    this.removeEventListener("mousemove",move);
}

function move(e) {
    var x = e.offsetX;
    var y = e.offsetY;

    if (this.isDraw) {
        //画笔功能
        draw(x,y);
    } else {
        //橡皮擦功能
        clearPart(x,y);
    }

    this.oldPoint = {
        x : x,
        y : y
    }

}

//画的方法
function draw(x,y){
    ctx.beginPath();

    //线的宽度
    ctx.lineWidth = 50;

    //线的样式
    ctx.lineCap = "round";
    ctx.moveTo(x,y);
    ctx.lineTo(canvas.oldPoint.x,canvas.oldPoint.y);
    ctx.stroke();
    ctx.closePath();
}
let clearBtn = document.querySelector("#cleanBtn");
clearBtn.onclick = function () {
    //改变状态为橡皮擦状态
    canvas.isDraw = !canvas.isDraw;
}

let clearAllBtn  = document.querySelector("#cleanAll");
clearAllBtn.onclick = function () {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

//橡皮擦功能
function clearPart(x,y) {
    //保存场景
    ctx.save();
    ctx.beginPath();
    ctx.arc(x,y,50,0,Math.PI * 2,false);
    ctx.clip();
    ctx.clearRect(0,0,canvas.width,canvas.height);

    //还原场景
    ctx.restore();
}















/*let a = 23,
    imgEle = document.createElement('img');


let getFilterArr = (arr) =>
{
    return arr.filter((item, index, array) => item > 2);
};

for (var s = 0; s < 8; s++)
{
    setTimeout(function ()
    {
        console.log('lskdfjlskdfjlsdkjf', s)
    }, 1000)
}*/
/*
window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
    // Chrome requires returnValue to be set.
    console.log("sldkfjlskdfjlksdfj", "beforeunload")
    event.returnValue = '';
});

window.addEventListener("unload", function (event) {
    event.preventDefault();
    // Chrome requires returnValue to be set.
    console.log("sldkfjlskdfjlksdfj", "unload")
    event.returnValue = '';
});*/

/*const unEditObj = {};

unEditObj.firstKey = "first";
unEditObj.secKey = "second";

imgEle.src = require("./images/203800i1iinq1wrfj485ic.jpg.thumb.jpg");

document.body.appendChild(imgEle);*/

