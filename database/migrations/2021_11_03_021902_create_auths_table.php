<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuthsTable extends Migration
{
    public function up()
    {
        Schema::create('auths', function (Blueprint $table) {
            $table->increments('id');
            $table->string('userLogin', 30);
            $table->string('userPassword', 30);
        });
    }

    public function down()
    {
        Schema::dropIfExists('auths');
    }
}
