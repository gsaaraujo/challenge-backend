<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Auth extends Model
{
  public $timestamps = false;

  protected $fillable = [
    'userLogin',
    'userPassword',
  ];
}
