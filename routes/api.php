<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DataController;
use App\Http\Controllers\Api\CompanyController;

Route::post('/auth', [AuthController::class, 'authentication']);

Route::post('/company', [CompanyController::class, 'create']);
Route::get('/companies', [CompanyController::class, 'read']);
Route::put('/companies/{id}', [CompanyController::class, 'update']);
Route::delete('/company/{id}', [CompanyController::class, 'delete']);

// Yeah I know... "Datas" word doesn't exist, 
// but I put it to follow the pattern
Route::post('/data', [DataController::class, 'create']);
Route::get('/datas', [DataController::class, 'read']);
