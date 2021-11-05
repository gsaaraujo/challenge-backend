<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataTable extends Migration
{
    public function up()
    {
        Schema::create('data', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('company_id');
            $table->unsignedInteger('syystem_id');
            $table->unsignedInteger('client_id');
            $table->string('label', 15);
            $table->string('value', 30);
            $table->string('module', 20);
            $table->foreign(['company_id', 'syystem_id'])->references(['company_id', 'syystem_id'])->on('company_syystem');
            $table->foreign('client_id')->references('id')->on('client');
        });
    }

    public function down()
    {
        Schema::dropIfExists('data');
    }
}
