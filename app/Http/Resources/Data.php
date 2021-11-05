<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Data extends JsonResource
{
    public function toArray($request)
    {
        return [
            'idCompany' => $this->idCompany,
            'idSystem' => $this->idSystem,
            'idClient' => $this->idClient,
            'label' => $this->label,
            'value' => $this->value,
            'module' => $this->module,
        ];
    }
}
