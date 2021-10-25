<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Company extends JsonResource
{
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'cnpj' => $this->cnpj
        ];
    }
}
