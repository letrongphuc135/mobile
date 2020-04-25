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

//Route::get('/admin', function () {
//    return view('admin/adminmaster');
//});

//Route::get('/' , function () {
//    return view('public/index');
//});


//Route::get('/product-detail/1' , function () {
//    return view('public/product');
//});
//
//Route::get('/product-detail', function () {
//    return view('public/product');
//});
Route::get('/owl2', function () {
    return view('public/owl');
});

Auth::routes();

Route::get('/', 'IndexController@index');
Route::get('/home', 'IndexController@index');
Route::get('/admin', 'HomeController@index')->name('admin');

//Route::get('/admin/{path}', 'HomeController@index')->where('path', '([A-z\d-\/_.]+)?');
Route::get('/admin/{path}', 'HomeController@index');
Route::get('/admin/edit-product/{path}', 'HomeController@index');
Route::get('/product-detail/{path}', 'IndexController@index');
Route::get('/product-list/{path}', 'IndexController@index');
Route::get('/product-list', 'IndexController@index');
Route::get('/cart', 'IndexController@index');
Route::get('/owl', 'IndexController@index');
Route::group(['prefix' => 'laravel-filemanager'], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});



