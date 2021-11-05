<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    public $timestamps = false;

    protected $table = 'data';

    protected $fillable = [
        'company_id',
        'syystem_id',
        'client_id',
        'label',
        'value',
        'module',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function companysystem()
    {
        return $this->belongsTo(CompanySyystem::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function syystem()
    {
        return $this->belongsTo(Syystem::class);
    }
}
