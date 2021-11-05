<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class CompanySyystem extends Pivot
{
    public $timestamps = false;

    protected $table = 'company_syystem';

    protected $fillable = [
        'company_id',
        'syystem_id',
    ];
}
