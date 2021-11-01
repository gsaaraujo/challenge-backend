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

    public function update(Request $request)
    {
        $company = Company::where('name', '=', $request->dataName)->first();

        $company->name = $request->input('name');
        $company->cnpj = $request->input('cnpj');

        if ($company) {
            $company->save();
        }
    }

    public function delete($dataName)
    {
        $company = Company::where('name', '=', $dataName)->first();

        if ($company) {
            $company->delete();
        }
    }
}
