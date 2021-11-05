<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Models\Company as Company;
use App\Http\Controllers\Controller;

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
            "name" => $request->name,
            "cnpj" => $request->cnpj
        ]);

        return $company;
    }

    public function read()
    {
        $company = Company::all();

        return $company;
    }

    public function update(Request $request)
    {
        $name = Company::where('id', '!=', $request->id)
            ->where('name', '=', $request->name)->first();

        $cnpj = Company::where('id', '!=', $request->id)
            ->where('cnpj', '=', $request->cnpj)->first();

        if ($name || $cnpj) {
            return response('data_already_exists', 403)
                ->header('Content-Type', 'text/plain');
        }

        $company = Company::findOrFail($request->id);

        $company->name = $request->name;
        $company->cnpj = $request->cnpj;

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
