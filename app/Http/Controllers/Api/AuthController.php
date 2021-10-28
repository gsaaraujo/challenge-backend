<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Auth as Auth;
use App\Http\Controllers\Controller;
use App\Http\Resources\Auth as AuthResource;

class AuthController extends Controller
{
	public function show(Request $request)
	{
		try {
			$user = Auth::where('user', $request->user)->first();
			$password = Auth::where('password', $request->password)->first();

			if ($user && $password) {
				return response('access_permitted', 200)
					->header('Content-Type', 'text/plain');
			} else {
				return response('access_denied', 401)
					->header('Content-Type', 'text/plain');
			}
		} catch (\Throwable $th) {
			return response('access_denied', 401)
				->header('Content-Type', 'text/plain');
		}
	}
}
