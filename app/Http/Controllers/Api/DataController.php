<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Data as Data;
use App\Models\Client as Client;
use App\Models\System as System;
use App\Models\CompanySystem as CompanySystem;

class DataController extends Controller
{
    public function create(Request $request)
    {
        $client = Client::where('name', '=', $request->clientName)->first();
        $system = System::where('name', '=', $request->systemName)->first();

        if (!$client) {
            $client = Client::create(["name" => $request->clientName]);
        }

        if (!$system) {
            $system = System::create(["name" => $request->systemName]);
        }

        $companySystem = CompanySystem::create([
            "idCompany" => $request->idCompany,
            "idSystem" => $system->id,
        ]);

        Data::create([
            "idCompany" => $companySystem->idCompany,
            "idSystem" => $companySystem->idSystem,
            "idClient" => $client->id,
            "label" => $request->label,
            "value" => $request->value,
            "module" => $request->module,
        ]);
    }

    public function read()
    {
    }
}
