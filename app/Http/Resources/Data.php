<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Data extends JsonResource
{
    public function toArray($request)
    {
        return [
            'company_id' => $this->company_id,
            'syystem_id' => $this->syystem_id,
            'client_id' => $this->client_id,
            'label' => $this->label,
            'value' => $this->value,
            'module' => $this->module,
        ];
    }
}
