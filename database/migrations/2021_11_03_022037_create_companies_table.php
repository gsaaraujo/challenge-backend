<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 30);
            $table->char('cnpj', 14);
        });
    }

    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
