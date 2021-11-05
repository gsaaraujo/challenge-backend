<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanySystem extends Model
{
    public $timestamps = false;

    protected $table = 'company_system';

    protected $fillable = [
        'idCompany',
        'idSystem',
    ];
}
