<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Last;
use Illuminate\Http\Request;

class LastController extends Controller
{
    public function create(Request $request)
    {

        Last::create([
            "company_id" => $request->id,
        ]);
    }
}
