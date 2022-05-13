<?php

use App\Http\Controllers\CatalogsController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('products')->group(function(){
    Route::get('/list', [ProductController::class, 'list']);
});

Route::prefix('catalogs')->group(function(){
    Route::get('/categories', [CatalogsController::class, 'categories']);
    Route::get('/brands', [CatalogsController::class, 'brands']); 
    Route::get('/models/{brandId}', [CatalogsController::class, 'models']); 
});