<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatasTable extends Migration
{
    public function up()
    {
        Schema::create('datas', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('idCompany');
            $table->unsignedInteger('idSystem');
            $table->unsignedInteger('idClient');
            $table->string('label', 15);
            $table->string('value', 30);
            $table->string('module', 20);
            $table->foreign(['idCompany', 'idSystem'])->references(['idCompany', 'idSystem'])->on('companiessystems');
            $table->foreign('idClient')->references('id')->on('clients');
        });
    }

    public function down()
    {
        Schema::dropIfExists('datas');
    }
}
