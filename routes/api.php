<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CompanyController;

Route::post('/auths', [AuthController::class, 'show']);
Route::post('/companies', [CompanyController::class, 'store']);
