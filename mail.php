<?php
 
  $project_name = 'test';
  $admin_email  = 'test@yandex.ru';
  $form_subject = 'test';

  $emailArr = ['test@yandex.ru', 'test2@yandex.ru']; // emails array


  $message = '
                <html>
                    <head>
                        <title>'.$form_subject.'</title>
                    </head>
                    <body>
                        <p>First Name: '.$_POST['FirstName'].'</p>
                        <p>Last Name: '.$_POST['LastName'].'</p>
                        <p>Email: '.$_POST['Email'].'</p>
                        <p>Country: '.$_POST['country'].'</p> 
                        <p>Phone: '.$_POST['code'].$_POST['Phone'].'</p>                       
                    </body>
                </html>';
 
function adopt($text) {
  return '=?UTF-8?B?'.Base64_encode($text).'?=';
}
 
$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

  if (in_array($_POST['Email'], $emailArr)) { // chek email and send

   mail($admin_email, adopt($form_subject), $message, $headers );

    echo "Your email was sent";

  } else {

    echo "Something goes wrong, try again.";

  }
 
