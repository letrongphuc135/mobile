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
Route::get('getAllCategoryPaging/{numberItem}','CategoryController@getAllCategoryPaging');
Route::get('getProductDetail/{id}','ProductController@getProductDetail');
Route::get('getAllProduct','ProductController@getAllProduct');
Route::get('getProductImgByProduct','ProductController@getProductImgByProduct');
Route::resource('upload','PostImageController');

//Product
Route::get('getProductByCategoryId/{id}/{num}','ProductController@getProductByCategoryId');
Route::get('getProductByProductTypeId/{id}/{num}','ProductController@getProductByProductTypeId');

Route::get('getProductById/{id}','ProductController@getProductById');
Route::get('searchCategory/{numberItem}','CategoryController@searchCategory');
Route::get('getCategoryBySlug/{slug}','CategoryController@getCategoryBySlug');

//productType
Route::get('getProductTypeByCategoryId/{id}','ProductTypeController@getProductTypeByCategoryId');
Route::get('getProductTypeBySlug/{slug}','ProductTypeController@getProductTypeBySlug');
Route::get('getAllProductTypePaging/{num}','ProductTypeController@getAllProductTypePaging');
Route::get('searchProductType/{num}','ProductTypeController@searchProductType');

//dk,dn
Route::post('login','UserController@loginClient');
Route::post('registerClient','UserController@registerClient');
Route::get('logout','UserController@logout');
Route::get('checklogin','UserController@checklogin');
