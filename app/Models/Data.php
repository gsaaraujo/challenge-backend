<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    public $timestamps = false;

    protected $table = 'data';

    protected $fillable = [
        'idCompany',
        'idSystem',
        'idClient',
        'label',
        'value',
        'module',
    ];

    public function clients()
    {
        return $this->belongsTo(Client::class);
    }
}
