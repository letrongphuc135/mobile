<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix'=>'admin'],function(){
    Route::resource('category','CategoryController');
    Route::resource('producttype','ProductTypeController');
    Route::resource('product','ProductController');
    Route::post('updatePro/{id}','ProductController@update');
});
Route::get('getindex',function(){
    return view('client.pages.index');
});
Route::get('getAllCategory','CategoryController@getAllCategory')->name('getAllCategory');
Route::get('getBanner','BannerController@getBanner');
Route::get('getProductDetail/{id}','ProductController@getProductDetail');
Route::get('getAllProduct','ProductController@getAllProduct');
Route::get('getProductTypeByCategoryId/{id}','ProductTypeController@getProductTypeByCategoryId');
Route::get('getProductImgByProduct','ProductController@getProductImgByProduct');
Route::resource('upload','PostImageController');
Route::get('getProductByCategoryId/{id}','ProductController@getProductByCategoryId');
Route::get('getProductById/{id}','ProductController@getProductById');

//dk,dn
Route::post('login','UserController@loginClient');
Route::post('registerClient','UserController@registerClient');
Route::get('logout','UserController@logout');
Route::get('checklogin','UserController@checklogin');
//Comment
Route::post('comment/{id}','CommentController@addComment');
Route::get('getAllCommentByIdProduct/{id}','CommentController@getComment');
Route::post('commentAdmin/{id}','AdminCommentController@postComment');
Route::get('getProductByProductTypeId/{productTypeId}','CategoryController@getProductByProductTypeId');