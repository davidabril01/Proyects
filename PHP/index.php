<?php
$cookie_name1="num";
$cookie_value1="";
$cookie_name2="op";
$cookie_value2="";

if(isset($_POST['num'])){
    $num=$_POST['input'].$_POST['num'];
}else{
    $num="";
}
if(isset($_POST['op'])){
    $cookie_value1=$_POST['input'];
    setcookie($cookie_name1, $cookie_value1, time()+(86400*30), "/");
    $cookie_value2=$_POST['op'];
    setcookie($cookie_name2, $cookie_value2, time()+(86400*30), "/");
    $num="";
}
if(isset($_POST['equal'])){
    $num=$_POST['input'];
    switch($_COOKIE['op']){
        case "+":
            $result=$_COOKIE['num']+$num;
        break;
        case "-":
            $result=$_COOKIE['num']-$num;
        break;
        case "*":
            $result=$_COOKIE['num']*$num;
        break;
        case "/":
            $result=$_COOKIE['num']/$num;
        break;
    }
    $num=$result;
}

if(isset($_POST['clear'])){
    $num="";
}

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="calculator.css">
    <title>Calculadora</title>
</head>

<body>
    <form class="calculator" action="" method="post">
        <div class="calculator__screen">
            <input class="screen__text" type="text" name="input" value="<?php echo @$num ?>">
        </div>
        <div class="calculator__numbers">
            <input type="submit" class="numbers__btn" name="num" value="7">
            <input type="submit" class="numbers__btn" name="num" value="8">
            <input type="submit" class="numbers__btn" name="num" value="9">
            <input type="submit" class="numbers__btn-cal" name="op" value="+">
            <input type="submit" class="numbers__btn" name="num" value="4">
            <input type="submit" class="numbers__btn" name="num" value="5">
            <input type="submit" class="numbers__btn" name="num" value="6">
            <input type="submit" class="numbers__btn-cal" name="op" value="-">
            <input type="submit" class="numbers__btn" name="num" value="1">
            <input type="submit" class="numbers__btn" name="num" value="2">
            <input type="submit" class="numbers__btn" name="num" value="3">
            <input type="submit" class="numbers__btn-cal" name="op" value="*">
            <input type="submit" class="numbers__btn-cal" name="clear" value="C">
            <input type="submit" class="numbers__btn" name="num" value="0">
            <input type="submit" class="numbers__btn" name="equal" value="=">
            <input type="submit" class="numbers__btn" name="op" value="/">
        </div>
    </form>
</body>

</html>