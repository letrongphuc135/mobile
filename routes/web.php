<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/home', function () {
    return view('admin/adminmaster');
});

Route::get('/', function () {
    return view('public/index');
});

Route::get('/product-detail', function () {
    return view('public/product');
});

Auth::routes();

Route::get('/admin', 'HomeController@index')->name('home');

Route::get('{path}', 'HomeController@index')->where('path', '/^[a-z0-9]([0-9a-z_\-\s])');
