<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Auth extends JsonResource
{
    public function toArray($request)
    {
        return [
            'user' => $this->user,
            'password' => $this->password,
        ];
    }
}
