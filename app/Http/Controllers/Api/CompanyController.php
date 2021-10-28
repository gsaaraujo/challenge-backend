<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Company as Company;

class CompanyController extends Controller
{
    public function store(Request $request)
    {
        $company = Company::create([
            "name" => $request->input("name"),
            "cnpj" => $request->input("cnpj")
        ]);

        return $company;
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }
}
