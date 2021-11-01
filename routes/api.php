<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CompanyController;

Route::post('/auth', [AuthController::class, 'create']);

Route::post('/company', [CompanyController::class, 'create']);
Route::get('/companies', [CompanyController::class, 'read']);
Route::put('/companies/{dataName}', [CompanyController::class, 'update']);
Route::delete('/company/{dataName}', [CompanyController::class, 'delete']);
