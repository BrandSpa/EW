<?php
require str_replace('config' , '', __DIR__) . '/vendor/autoload.php';
// require_once(ABSPATH . 'wp-config.php');

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;


$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => DB_HOST,
    'database'  => DB_NAME,
    'username'  => DB_USER,
    'password'  => DB_PASSWORD,
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();