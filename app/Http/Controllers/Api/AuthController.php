<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Auth as Auth;
use App\Http\Controllers\Controller;
use App\Http\Resources\Auth as AuthResource;

class AuthController extends Controller
{
	public function authentication(Request $request)
	{
		try {
			$userLogin = Auth::where('userLogin', $request->userLogin)->first();
			$userPassword = Auth::where('userPassword', $request->userPassword)->first();

			if ($userLogin && $userPassword) {
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
