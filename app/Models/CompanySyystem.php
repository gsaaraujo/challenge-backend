<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanySyystem extends Model
{
    public $timestamps = false;

    protected $table = 'company_syystem';

    protected $fillable = [
        'company_id',
        'syystem_id',
    ];
}
