<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Syystem extends Model
{
    public $timestamps = false;

    protected $table = 'syystem';

    protected $fillable = [
        'name',
    ];

    public function companies()
    {
        return $this->belongsToMany(Company::class);
    }
}
