<?php
$directory = './news/';
$files = glob($directory . '*.html');

if ( $files !== false )
{
    $filecount = count( $files );
    echo $filecount;
}
else
{
    echo 0;
}