<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthsTable extends Migration
{
    public function up()
    {
<<<<<<< HEAD:database/migrations/2021_11_03_021902_create_auths_table.php
        Schema::create('auths', function (Blueprint $table) {
            $table->increments('id');
            $table->string('userLogin', 30);
            $table->string('userPassword', 30);
        });
=======
        DB::statement("
        CREATE TABLE auths (
            id INTEGER NOT NULL AUTO_INCREMENT,
            userLogin VARCHAR(30),
            userPassword VARCHAR(30),
            CONSTRAINT pk_auths PRIMARY KEY (id)
          );
        ");
>>>>>>> 6f9848e1452627e791c1b576acd5dac0de0072fe:database/migrations/2021_11_02_140248_create_auths_table.php
    }

    public function down()
    {
        Schema::dropIfExists('auths');
    }
}
