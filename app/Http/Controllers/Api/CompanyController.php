<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Company as Company;
use App\Http\Controllers\Controller;
use App\Http\Resources\Company as CompanyResource;


class CompanyController extends Controller
{
    public function create(Request $request)
    {
        $company = Company::create([
            "name" => $request->input("name"),
            "cnpj" => $request->input("cnpj")
        ]);

        return $company;
    }

    public function read()
    {
        $company = Company::paginate(10);
        return CompanyResource::collection($company);
    }
}
