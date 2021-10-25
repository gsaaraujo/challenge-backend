<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CompanyController;

Route::post('/companies', [CompanyController::class, 'store']);
