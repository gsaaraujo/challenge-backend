<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Data as Data;
use App\Models\Client as Client;
use App\Models\Company as Company;
use App\Models\Syystem as Syystem;
use App\Models\CompanySyystem as CompanySyystem;
use App\Models\Last as Last;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class LgpdApiController extends Controller
{
    public function create()
    {

        $last = DB::table('last')->get()->first();
        $lastIdSaved = $last->id;

        $URL = "https://lgpdunaerp.azurewebsites.net/register?fromId=$lastIdSaved";
        $request = Http::get($URL);
        $parseObject = $request->object();
        $length = count($parseObject);

        if ($length != 0) {
            foreach ($parseObject as $data) {
                $lastApiId = $data->id;

                $client = Client::where('name', '=', $data->clientName)->first();
                $syystem = Syystem::where('name', '=', $data->system)->first();
                $company = Company::where('name', '=', 'PHP Sucks')->first();

                if (!$client) {
                    $client = Client::create(["name" => $data->clientName]);
                }

                if (!$company) {
                    $company = Company::create([
                        "name" => 'PHP Sucks',
                        'cnpj' => '12345678901234'
                    ]);
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
            $last = Last::where('id', '=', $lastIdSaved)->first();
            $last->id = $lastApiId + 1;
            $last->save();
        }
    }
}
