<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    public function up()
    {
<<<<<<< HEAD:database/migrations/2021_11_03_022037_create_companies_table.php
        Schema::create('companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 30);
            $table->char('cnpj', 14);
        });
=======
        DB::statement("
        CREATE TABLE companies (
            id INTEGER NOT NULL AUTO_INCREMENT,
            name VARCHAR(30),
            cnpj CHAR(14),
            CONSTRAINT pk_companies PRIMARY KEY (id)
          );
        ");
>>>>>>> 6f9848e1452627e791c1b576acd5dac0de0072fe:database/migrations/2021_11_02_161511_create_companies_table.php
    }

    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
