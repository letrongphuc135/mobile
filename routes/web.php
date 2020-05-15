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

Route::get('/', 'IndexController@index');
Route::get('/home', 'IndexController@index');
Route::get('/admin/dashboard', 'HomeController@index')->name('admin');
Route::get('/admin/login', 'HomeController@login')->name('login.admin');
Route::get('/admin/email', 'HomeController@index');
Route::get('/admin/resetpass', 'IndexController@index')->name('get.send.link.reset.admin');
//Route::get('/admin/{path}', 'HomeController@index')->where('path', '([A-z\d-\/_.]+)?');
Route::get('/admin/{path}', 'HomeController@index');
Route::get('/admin/edit-product/{path}', 'HomeController@index');
Route::get('/product-detail/{path}', 'IndexController@index');
Route::get('/product-list/{path}', 'IndexController@index');
Route::get('/product-list', 'IndexController@index');
Route::get('/cart', 'IndexController@index');
Route::get('/admin/edit-user/{path}', 'HomeController@index');
Route::get('/login-user', 'IndexController@index');
Route::get('/register-user', 'IndexController@index');
Route::get('/password-reset', 'IndexController@index')->name('get.send.link.reset');
Route::get('/email', 'IndexController@index');
Route::group(['prefix' => 'laravel-filemanager'], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});
// Route::get('login', function () {
//    return view('admin.hello');
// });
// Route::post('loginAdmin','UserController@loginAdmin')->name('admin.login');
//Route::view('loginAdmin','admin.login')->name('login.admin');

Route::get('forget_password','Auth\ForgotPasswordController@getFormResetPassword')->name('get.reset.password');
Route::post('forget_password','Auth\ForgotPasswordController@sendCodeResetPassword');
Route::get('password_reset','Auth\ForgotPasswordController@resetPassword');
Route::post('password_reset','Auth\ForgotPasswordController@saveResetPassword');
//Route::post('forget_passwordAdmin','Auth\ForgotPasswordController@sendCodeAdminResetPassword');