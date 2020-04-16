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

Auth::routes();

Route::get('/', 'HomeController@customer')->name('admin');
Route::get('/admin', 'HomeController@index')->name('admin');

Route::get('/admin/{path}', 'HomeController@index')->where('path', '([A-z\d-\/_.]+)?');

Route::get('/{path}', 'HomeController@customer')->where('path', '([A-z\d-\/_.]+)?');

Route::get('/test/{path}', 'HomeController@customer')->where('path', '([A-z\d-\/_.]+)?');

Route::group(['prefix' => 'laravel-filemanager'], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});



