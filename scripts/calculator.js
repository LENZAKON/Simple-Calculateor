/**
 * Created by pvbfgh on 2017/1/16.
 */

var num = document.getElementsByClassName("num");
var dis = document.getElementsByClassName("display")[0];
var point = document.getElementsByClassName("point")[0];
var add_1 = document.getElementsByClassName("add")[0];
var min_1 = document.getElementsByClassName("min")[0];
var mul_1 = document.getElementsByClassName("mul")[0];
var divi_1 = document.getElementsByClassName("divi")[0];
var equal_1 = document.getElementsByClassName("equal")[0];
var clear_1 = document.getElementsByClassName("clear")[0];
var handred_1 = document.getElementsByClassName("handred")[0];
var press_num = 0;  //判断运算符有没有被按下
var type = 0;
var result;
var press_mark = 0;

function showNum() {
    for(var i=0;i<10;i++){
        num[i].onclick = function () {
            if(press_num == 1 || dis.value == ""){
                dis.value = this.innerHTML;
                press_num = 0;
            }else {
                dis.value = dis.value+this.innerHTML;
            }
        }
    }
}
addLoadEvent(showNum);

function showPoint() {
    point.onclick = function () {
        if (dis.value == ""){
            dis.value = "0"+".";
        }else {
            dis.value = dis.value+".";
        }
    }
}
addLoadEvent(showPoint);

function clear() {
    clear_1.onclick = function () {
        dis.value = "";
        press_num = 0;
        press_mark = 0;
        result = 0;
        type = 5;
    }
}
addLoadEvent(clear);

function handured() {
    handred_1.onclick = function () {
        dis.value = Number(dis.value)/100;
    }
}
addLoadEvent(handured);

function add() {
    add_1.onclick = function () {

        calculator();
        type = 1;
        press_num = 1;
        press_mark = 1;
    }
}
addLoadEvent(add);

function divi() {
    divi_1.onclick = function () {

        calculator();
        type = 4;
        press_num = 1;
        press_mark = 1;
    }
}
addLoadEvent(divi);

function min() {
    min_1.onclick = function () {

        calculator();
        type = 2;
        press_num = 1;
        press_mark = 1;
    }
}
addLoadEvent(min);

function mul() {
    mul_1.onclick = function () {

        calculator();
        type = 3;
        press_num = 1;
        press_mark = 1;
    }
}
addLoadEvent(mul);

function equal() {
    equal_1.onclick = function () {

        calculator();
        type = 0;
        press_num = 1;
        press_mark = 1;
    }
}
addLoadEvent(equal);

function calculator() {
    if (press_mark == 0 || type == 0){
        result = Number(dis.value);
    }else {
        switch (type){
            case 1:
                result += Number(dis.value);
                break;
            case 2:
                result -= Number(dis.value);
                break;
            case 3:
                result *= Number(dis.value);
                break;
            case 4:
                if(Number(dis.value) == 0)  result = "除数为零,按AC重新开始";
                else{
                    result /= Number(dis.value);
                }
                break;
        }
    }
    dis.value = String(result);
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof oldonload != "function"){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}



