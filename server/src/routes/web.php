<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\NewsListController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\UserController;

use App\Http\Middleware\Authenticate;
use App\Http\Middleware\CheckRole;

Route::post('/api/v1/auth/login', [AuthController::class, 'login']);
Route::post('/api/v1/auth/logout', [AuthController::class, 'logout']);
Route::post('/api/v1/auth/register', [AuthController::class, 'register']);
Route::post('/api/v1/auth/refresh-token', [AuthController::class, 'refreshToken']);

Route::middleware(['verifyToken'])->group(function () {
    Route::get('/api/v1/news/user', [NewsController::class, 'getNewsByUserId']);

    Route::get('/api/v1/news', [NewsController::class, 'index']);
    Route::get('/api/v1/news/{id}', [NewsController::class, 'show']);
    Route::post('/api/v1/news', [NewsController::class, 'store']);
    Route::put('/api/v1/news/{id}', [NewsController::class, 'update']);
    Route::delete('/api/v1/news/{id}', [NewsController::class, 'destroy']);

    Route::get('/api/v1/categories', [CategoryController::class, 'index']);
    Route::get('/api/v1/categories/{id}', [CategoryController::class, 'show']);
    Route::post('/api/v1/categories', [CategoryController::class, 'store']);
    Route::put('/api/v1/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/api/v1/categories/{id}', [CategoryController::class, 'destroy']);

    Route::get('/api/v1/tags', [TagController::class, 'index']);
    Route::get('/api/v1/tags/{id}', [TagController::class, 'show']);
    Route::post('/api/v1/tags', [TagController::class, 'store']);
    Route::put('/api/v1/tags/{id}', [TagController::class, 'update']);
    Route::delete('/api/v1/tags/{id}', [TagController::class, 'destroy']);

    Route::get('/api/v1/users/{id}', [UserController::class, 'show']);
    Route::get('/api/v1/users/{id}/followers', [UserController::class, 'followers']);
    Route::get('/api/v1/users/{id}/following', [UserController::class, 'following']);
    Route::get('/api/v1/users/{id}/news-lists', [NewsListController::class, 'getUserNewsLists']);
    Route::post('/api/v1/users/{id}/follow', [UserController::class, 'follow']);
    Route::post('/api/v1/users/{id}/unfollow', [UserController::class, 'unfollow']);

    Route::post('/api/v1/news-lists/{id}/add-news', [NewsListController::class, 'addNews']);
    Route::post('/api/v1/news-lists/{id}/remove-news', [NewsListController::class, 'removeNews']);

    Route::get('/api/v1/users', [UserController::class, 'index']);
    Route::post('/api/v1/users', [UserController::class, 'store']);
    Route::put('/api/v1/users/{id}', [UserController::class, 'update']);
    Route::delete('/api/v1/users/{id}', [UserController::class, 'destroy']);
});



