<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Data as Data;
use App\Models\Client as Client;
use App\Models\Company as Company;
use App\Models\Syystem as Syystem;
use App\Models\CompanySyystem as CompanySyystem;
use Illuminate\Support\Facades\Http;

class LgpdApiController extends Controller
{
    public function create()
    {
        $request = Http::get('https://lgpdunaerp.azurewebsites.net/register');

        $parseObject = $request->object();

        foreach ($parseObject as $data) {
            $client = Client::where('name', '=', $data->clientName)->first();
            $syystem = Syystem::where('name', '=', $data->system)->first();
            $company = Company::where('name', '=', 'Samsung')->first();

            if (!$client) {
                $client = Client::create(["name" => $data->clientName]);
            }

            if (!$syystem) {
                $syystem = Syystem::create(["name" => $data->system]);
            }

            $companySyystem = CompanySyystem::where('company_id', '=', $company->id)
                ->where('syystem_id', '=', $syystem->id)->first();

            if (!$companySyystem) {
                $companySyystem = CompanySyystem::create([
                    "company_id" => $company->id,
                    "syystem_id" => $syystem->id,
                ]);
            }

            Data::create([
                "company_id" => $companySyystem->company_id,
                "syystem_id" => $companySyystem->syystem_id,
                "client_id" => $client->id,
                "label" => $data->label,
                "value" => $data->value,
                "module" => $data->module,
            ]);
        }
    }
}
