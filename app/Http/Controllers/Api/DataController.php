<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Data as Data;
use App\Models\Client as Client;
use App\Models\Company as Company;
use App\Models\Syystem as Syystem;
use App\Models\CompanySyystem as CompanySyystem;

class DataController extends Controller
{
    public function create(Request $request)
    {
        $client = Client::where('name', '=', $request->clientName)->first();
        $syystem = Syystem::where('name', '=', $request->syystemName)->first();

        $company_CompanySyystem = CompanySyystem::where('company_id', '=', $request->company_id)->first();
        $syystem_CompanySyystem = CompanySyystem::where('syystem_id', '=', $syystem->id)->first();

        if (!$client) {
            $client = Client::create(["name" => $request->clientName]);
        }

        if (!$syystem) {
            $syystem = Syystem::create(["name" => $request->syystemName]);
        }

        if (!$company_CompanySyystem) {
            $company_CompanySyystem = CompanySyystem::create([
                "company_id" => $request->company_id,
            ]);
        }

        if (!$syystem_CompanySyystem) {
            $syystem_CompanySyystem = CompanySyystem::create([
                "syystem_id" => $syystem->id,
            ]);
        }

        Data::create([
            "company_id" => $company_CompanySyystem->company_id,
            "syystem_id" => $syystem_CompanySyystem->syystem_id,
            "client_id" => $client->id,
            "label" => $request->label,
            "value" => $request->value,
            "module" => $request->module,
        ]);
    }

    public function read()
    {
        return Data::with(['company', 'syystem', 'client'])->get();
    }
}
