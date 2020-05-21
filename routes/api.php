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
    Route::resource('customer','CustomerController');
    Route::resource('cart','CartController');
    Route::resource('order','OrderController');
    Route::post('updatePro/{id}','ProductController@update');
});
Route::get('getindex',function(){
    return view('client.pages.index');
});

Route::get('getBanner','BannerController@getBanner');


Route::get('getProductImgByProduct','ProductController@getProductImgByProduct');
Route::resource('upload','PostImageController');
//category
Route::get('getAllCategoryPaging/{numberItem}','CategoryController@getAllCategoryPaging');
Route::get('searchCategory/{numberItem}','CategoryController@searchCategory');
Route::get('getCategoryBySlug/{slug}','CategoryController@getCategoryBySlug');
Route::get('getAllCategory','CategoryController@getAllCategory')->name('getAllCategory');
//Product
Route::get('getProductByCategoryId/{id}/{num}','ProductController@getProductByCategoryId');
Route::get('getProductByProductTypeId/{id}/{num}','ProductController@getProductByProductTypeId');
Route::get('getAllProductPaging/{num}','ProductController@getAllProductPaging');
Route::get('getAllProduct','ProductController@getAllProduct');
Route::get('getProductDetailById/{id}','ProductController@getProductDetailById');
Route::get('searchProduct/{numberItem}','ProductController@searchProduct');
Route::get('getProductDetail/{name}','ProductController@getProductDetail');

//productType
Route::get('getProductTypeByCategoryId/{id}','ProductTypeController@getProductTypeByCategoryId');
Route::get('getProductTypeBySlug/{slug}','ProductTypeController@getProductTypeBySlug');
Route::get('getAllProductTypePaging/{num}','ProductTypeController@getAllProductTypePaging');
Route::get('searchProductType/{num}','ProductTypeController@searchProductType');

//cart, customer
Route::get('getCustomerAddressActive','CustomerController@getCustomerAddressActive');
Route::post('addItem/{id}/{num}','CartController@addItem');
Route::post('removeItem/{id}/{num}','CartController@removeItem');
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
Route::get('getAllComment','CommentController@getAllComment');
Route::delete('deleteComment/{id}','CommentController@deleteComment');
//forget_password
Route::post('forget_password','Auth\ForgotPasswordController@sendCodeResetPassword');
Route::post('password_reset','Auth\ForgotPasswordController@saveResetPassword');
