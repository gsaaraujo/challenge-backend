<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DataController;
use App\Http\Controllers\Api\CompanyController;
use App\Http\Controllers\Api\LgpdApiController;

Route::post('/auth', [AuthController::class, 'authentication']);

Route::post('/company', [CompanyController::class, 'create']);
Route::get('/companies', [CompanyController::class, 'read']);
Route::put('/companies/{id}', [CompanyController::class, 'update']);
Route::delete('/company/{id}', [CompanyController::class, 'delete']);

Route::post('/clientData', [DataController::class, 'create']);
Route::get('/clientsData', [DataController::class, 'read']);
Route::put('/clientsData/{id}', [DataController::class, 'update']);

Route::get('/lgpdApi', [LgpdApiController::class, 'create']);
