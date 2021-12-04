<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\Data as DataResource;

use App\Models\Data as Data;
use App\Models\Client as Client;
use App\Models\Company as Company;
use App\Models\Syystem as Syystem;
use App\Models\CompanySyystem as CompanySyystem;
use App\Models\Last;

class DataController extends Controller
{
    public function create(Request $request)
    {
        $client = Client::where('name', '=', $request->input('client.name'))->first();
        $syystem = Syystem::where('name', '=', $request->input('syystem.name'))->first();
        $company = Company::where('name', '=', $request->input('company.name'))->first();

        if (!$client) {
            $client = Client::create(["name" => $request->input('client.name')]);
        }

        if (!$syystem) {
            $syystem = Syystem::create(["name" => $request->input('syystem.name')]);
        }

        $companySyystem = CompanySyystem::where('company_id', '=', $company->id)
            ->where('syystem_id', '=', $syystem->id)->first();

        if (!$companySyystem) {
            $companySyystem = CompanySyystem::create([
                "company_id" => $company->id,
                "syystem_id" => $syystem->id,
            ]);
        }

        $data = Data::create([
            "company_id" => $companySyystem->company_id,
            "syystem_id" => $companySyystem->syystem_id,
            "client_id" => $client->id,
            "label" => $request->label,
            "value" => $request->value,
            "module" => $request->module,
        ]);
    }

    public function read()
    {
        return Data::with(['company', 'syystem', 'client'])->get()->groupBy('client_id');
    }

    public function update(Request $request)
    {
        // $company = Data::where('company', '=', $request->input('company'))->first();

        // return $company;
    }
}
