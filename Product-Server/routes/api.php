<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::prefix('api')->group(function () {
    Route::apiResource('products', ProductController::class);
});

Route::options('/{any}', function () {
    return response()->json();
})->where('any', '.*');