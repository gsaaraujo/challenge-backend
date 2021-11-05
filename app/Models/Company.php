<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    public $timestamps = false;

    protected $table = 'company';

    protected $fillable = [
        'name',
        'cnpj',
    ];

    public function systems()
    {
        return $this->belongsToMany(System::class, 'company_system', 'id', 'idCompany');
    }
}
