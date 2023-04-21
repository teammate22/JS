// задание 1
function stringFrom() {
    var str = '';
    for (var _i = 0, arguments_1 = arguments; _i < arguments_1.length; _i++) {
        var el = arguments_1[_i];
        str += el + ' ';
    }
    return str;
}
// задание 2
function min() {
    var minimum = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i + 1] < minimum) {
            minimum = arguments[i + 1];
        }
    }
    return minimum;
}
// задание 3
function numbers() {
    var count = 0;
    for (var _i = 0, arguments_2 = arguments; _i < arguments_2.length; _i++) {
        var el = arguments_2[_i];
        if (typeof (el) == "number")
            count++;
    }
    return count;
}
// задание 4
function mean() {
    var leng = 0;
    var sum = 0;
    for (var _i = 0, arguments_3 = arguments; _i < arguments_3.length; _i++) {
        var el = arguments_3[_i];
        if (typeof (el) == "number") {
            sum += el;
            leng++;
        }
    }
    return sum / leng;
}
// задание 5
function pow(x) {
    if (x % 2 == 0) {
        x = x / 2;
        return pow(x);
    }
    if (x == 1) {
        return 'yes';
    }
    else
        return 'no';
}
// задание 6
function reverse(x) {
    var reversed = '';
    while (x > 9) {
        reversed += x % 10;
        x = Math.floor(x / 10);
    }
    reversed += x;
    return reversed;
}
var input1 = document.getElementById('input1');
var btn1 = document.getElementById('btn1');
var span1 = document.getElementById('span1');
// @ts-ignore
btn1.addEventListener('click', function () { span1.innerText = pow(input1.value); });
var input2 = document.getElementById('input2');
var btn2 = document.getElementById('btn2');
var span2 = document.getElementById('span2');
// @ts-ignore
btn2.addEventListener('click', function () { span2.innerText = reverse(input2.value); });
