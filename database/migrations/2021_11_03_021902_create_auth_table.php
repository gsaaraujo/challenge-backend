<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthTable extends Migration
{
    public function up()
    {
        Schema::create('auth', function (Blueprint $table) {
            $table->increments('id');
            $table->string('userLogin', 30);
            $table->string('userPassword', 30);
        });
    }

    public function down()
    {
        Schema::dropIfExists('auth');
    }
}
