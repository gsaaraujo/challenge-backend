<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
  public function show()
  {
    return response('access_permitted', 200)
      ->header('Content-Type', 'text/plain');
  }
}
