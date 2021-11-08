<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AuthSeeder extends Seeder
{
    public function run()
    {
        DB::table('auth')->insert([
            'userLogin' => 'admin',
            'userPassword' => 'admin',
        ]);
    }
}
