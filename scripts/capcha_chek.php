<?php session_start();
if ($_SESSION['secpic']==$_POST['capcha']){ echo 1; } else { echo 0;}
?>