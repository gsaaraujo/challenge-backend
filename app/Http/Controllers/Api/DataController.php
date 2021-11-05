<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Data as Data;
use App\Models\Client as Client;
use App\Models\Syystem as Syystem;
use App\Models\CompanySyystem as CompanySyystem;

class DataController extends Controller
{
    public function create(Request $request)
    {
        $client = Client::where('name', '=', $request->clientName)->first();
        $syystem = Syystem::where('name', '=', $request->syystemName)->first();

        if (!$client) {
            $client = Client::create(["name" => $request->clientName]);
        }

        if (!$syystem) {
            $syystem = Syystem::create(["name" => $request->syystemName]);
        }

        //fix error
        $companySyystem = CompanySyystem::create([
            "company_id" => $request->company_id,
            "syystem_id" => $syystem->id,
        ]);

        Data::create([
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
    }
}
