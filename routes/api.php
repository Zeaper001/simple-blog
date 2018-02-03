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

Route::group(['prefix' => 'v1', 'middleware' => 'auth:api'], function() {
  Route::group(['prefix' => 'post'], function() {
    Route::post('/store', 'PostController@store')->name('store');
    Route::get('/show', 'PostController@show');
    Route::post('delete', 'PostController@destroy');
  });
});
Route::group(['prefix' => 'user'], function(){
  Route::post('/', 'UserController@store');
  Route::post('login', 'UserController@authenticate');
});
