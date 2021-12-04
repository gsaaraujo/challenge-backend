<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Last extends Model
{
    public $timestamps = false;

    protected $table = 'last';

    protected $fillable = [
        'id',
    ];
}
