<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Data extends JsonResource
{
    public function toArray($request)
    {
        return [
            'company' => $this->company->name,
            'syystem' => $this->syystem->name,
            'client' => $this->client->name,
            'label' => $this->label,
            'value' => $this->value,
            'module' => $this->module,
        ];
    }
}
