<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    public $timestamps = false;

    protected $table = 'client';

    protected $fillable = [
        'name',
    ];

    public function data()
    {
        return $this->hasMany(Data::class);
    }
}
