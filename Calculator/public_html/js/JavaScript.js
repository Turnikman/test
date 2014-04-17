var Num1 = "";
var Num2 = "";
var newNum = "empty";
var numValue = "";
var numm = textbox;

function Disp(displaynumber) {
    document.calculator.textbox.value = displaynumber;
}

function Disp2(displaynumber2) {
    document.calculator.textbox2.value = displaynumber2;
}

function CheckNum(textbox) {
    if (textbox == ".") {
        Number = document.calculator.textbox.value;
        if (Number.indexOf(".") != -1) {
            textbox = "";
        }
    }
    if (newNum == "yes") {
        Num2 += textbox;
        Disp(Num2);
    }
    else {
        if (newNum == "empty") {
            Num1 = textbox;
            Num2 = "";
            newNum = "no";
        }
        else {
            Num1 += textbox;
        }
        Disp(Num1);
    }
    document.calculator.textbox2.value += textbox;
}

function Remove() {
    Num1 = "";
    Num2 = "";
    newNum = "empty";
    Disp("");
    document.calculator.textbox2.value = "";
}

function Equally() {
    if (numValue == '+') {
        Plus(0);
    }
    if (numValue == '-') {
        Minus(0);
    }
    if (numValue == '*') {
        Multiply(0);
    }
    if (numValue == '/') {
        Div(0);
    }
    if (numValue == 'pow') {
        PowXY(0);
    }
    Num2 = "";
    numValue = "";
    newNum = "empty";
    document.calculator.textbox2.value = "";
}

function Plus(Pl) {
    if (Pl == 1) Equally();
    if (Num2 != "") {
        Num1 = parseFloat(Num1) + parseFloat(Num2);
    }
    newNum = "yes";
    numValue = '+';
    Disp(Num1);
    if (Num1 == 0) {
        document.calculator.textbox2.value += "0 +";
    }
    else {
        document.calculator.textbox2.value += Num1 + "+";
    }

}

function Minus(Mn) {
    if (Mn == 1) Equally();
    if (Num2 != "") {
        Num1 = parseFloat(Num1) - parseFloat(Num2);
    }
    newNum = "yes";
    numValue = '-';
    Disp(Num1);
    if (Num1 == 0) {
        document.calculator.textbox2.value += "0 -";
    }
    else {
        document.calculator.textbox2.value += Num1 + "-";
    }
}

function Multiply(Mp) {
    if (Mp == 1) Equally();
    if (Num2 != "") {
        Num1 = parseFloat(Num1) * parseFloat(Num2);
    }
    newNum = "yes";
    numValue = '*';
    Disp(Num1);
    if (Num1 == 0) {
        document.calculator.textbox2.value += "0 *";
    }
    else {
        document.calculator.textbox2.value += Num1 + "*";
    }
}

function Div(Dv) {
    if (Dv == 1) Equally();
    if (Num2 != "") {
        Num1 = parseFloat(Num1) / parseFloat(Num2);
    }
    newNum = "yes";
    numValue = '/';
    Disp(Num1);
    if (Num1 == 0) {
        document.calculator.textbox2.value += "0 /";
    }
    else {
        document.calculator.textbox2.value += Num1 + "/";
    }
}

function SQR() {
    Num1 *= Num1;
    newNum = "empty";
    Disp(Num1);
    if (Num1 != "") {
        document.calculator.textbox2.value = "Sqr("+ Math.sqrt(Num1)+")";
    }
    else {
        document.calculator.textbox2.value += "Sqr(0)";
    }

}

function SQRT() {
    Num1 = Math.sqrt(Num1);
    newNum = "empty";
    Disp(Num1);
    if (Num1 != "") {
        document.calculator.textbox2.value = "Sqrt(" + Num1 * Num1 + ")";
    }
    else {
        document.calculator.textbox2.value += "Sqrt(0)";
    }
}

function Exp() {
    Num1 = Math.exp(Num1);
    newNum = "empty";
    Disp(Num1);
    if (Num1 != "") {
        document.calculator.textbox2.value = "" + "Exp";
    }
}

function Cos() {

    Num1 = Math.cos(Num1);
    newNum = "empty";
    Disp(Num1);
    if (Num1 != "") {
        document.calculator.textbox2.value = "" + "Cos";
    }
}

function Sin() {
    Num1 = Math.sin(Num1);
    newNum = "empty";
    Disp(Num1);
    if (Num1 != "") {
        document.calculator.textbox2.value = "" + "Sin";
    }
}

function XpowNeg(Xp) {
    Num1 = Math.pow(Num1, -1);
    Disp(Num1);
    newNum = "empty"
    if (Num1 != "") {
        document.calculator.textbox2.value = 1/ Math.pow(Num1, 1) + "^-1";
    }
}

function OneDivX() {
    Num1 = 1/Num1;
    newNum = "empty";
    Disp(Num1);
    if (Num1 != "") {
        document.calculator.textbox2.value = "1/" + Math.pow(Num1, -1);
    }
}

function Log() {
    Num1 = Math.log(Num1);
    newNum = "empty";
    Disp(Num1);
    if (Num1 != "") {
        document.calculator.textbox2.value = "" + "Log";
    }
}

function Cube() {
    Num1 = Math.pow(Num1, 3);
    newNum = "empty";
    Disp(Num1);
    if (Num1 != "") {
        document.calculator.textbox2.value = "Cube(" + Math.pow(Num1, 1 / 3) + ")";
    }
    else {
        document.calculator.textbox2.value += "Cube(0)";
    }
}

function Tan() {
    Num1 = Math.tan(Num1);
    newNum = "empty";
    Disp(Num1);
    if (Num1 != "") {
        document.calculator.textbox2.value = "" + "Tan";
    }
}

function PlusOrMinus() {
    Num1 = parseFloat(-Num1);
    newNum = "no";
    Disp(Num1);
}

function PowXY(Pw) {
    if (Pw == 1) Equally();
    if (Num2 != "") {
        Num1 = Math.pow(Num1, Num2);
    }
    newNum = "yes";
    numValue = 'pow';
    Disp(Num1);
    if (Num1 == 0) {
        document.calculator.textbox2.value += "0 ^";
    }
    else {
        document.calculator.textbox2.value += Num1 + "^";
    }
}

function Persent() {
    if (newNum != "empty") {
        Num2 *= .01;
        newNum = "empty";
        Disp(Num2);
    }
    document.calculator.textbox2.value += "%";
}


