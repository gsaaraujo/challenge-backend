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
        $name = Company::where('name', '=', $request->name)->first();
        $cnpj = Company::where('cnpj', '=', $request->cnpj)->first();

        if ($name || $cnpj) {
            return response('data_already_exists', 403)
                ->header('Content-Type', 'text/plain');
        }

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
        // if ($name || $cnpj) {
        //     return response('data_already_exists', 403)
        //         ->header('Content-Type', 'text/plain');
        // }

        $company = Company::findOrFail($request->id);

        $company->name = $request->input('name');
        $company->cnpj = $request->input('cnpj');

        if ($company) {
            $company->save();
        }
    }

    public function delete($id)
    {
        $company = Company::findOrFail($id);

        if ($company) {
            $company->delete();
        }
    }
}
