<?php session_start();

 $width = 60;                  //Ширина изображения
 $height = 25;                  //Высота изображения
 $font_size = 9;   			//Размер шрифта
 $let_amount = 4;               //Количество символов, которые нужно набрать
 $fon_let_amount = 30;          //Количество символов, которые находятся на фоне
 $path_fonts = 'fonts/';        //Путь к шрифтам
 
 
 $letters = array('A','B','C','D','E','F','G','H','J','K','M','N','P','Q','R','S','T','U','V','W','X','Y','Z','2','3','4','5','6','7','9');
 $colors = array('10','30','50','70','90','110','130','150','170','190','210');
 
 $src = imagecreatetruecolor($width,$height);
 $fon = imagecolorallocate($src,255,255,255);
 imagefill($src,0,0,$fon);
 
 $fonts = array();
 $dir=opendir($path_fonts);
 while($fontName = readdir($dir))
 {
   if($fontName != "." && $fontName != "..")
   {
     $fonts[] = $fontName;
   }
 }
 closedir($dir);
 
 for($i=0;$i<$fon_let_amount;$i++)
 {
   $color = imagecolorallocatealpha($src,rand(20,20),rand(20,20),rand(20,20),100); 
   $font = $path_fonts.$fonts[rand(0,sizeof($fonts)-1)];
   $letter = $letters[rand(0,sizeof($letters)-1)];
   $size = rand($font_size-2,$font_size+2);
   imagettftext($src,$size,rand(0,45),rand($width*0.1,$width-$width*0.1),rand($height*0.2,$height),$color,$font,$letter);
 }
 
 for($i=0;$i<$let_amount;$i++)
 {
   $color = imagecolorallocatealpha($src,0,0,0,0); 
   $font = $path_fonts.$fonts[rand(0,sizeof($fonts)-1)];
   $letter = $letters[rand(0,sizeof($letters)-1)];
   $size = rand($font_size*2.1-2,$font_size*2.1+2);
   $x = ($i+1)*$font_size + rand(3,7);
   $y = (($height*2)/3) + rand(0,3);
   $cod[] = $letter;   
   imagettftext($src,$size,rand(0,15),$x,$y,$color,$font,$letter);
 }
 
 $_SESSION['secpic'] = implode('',$cod);
 
 header ("Content-type: image/gif"); 
 imagegif($src);
?> 