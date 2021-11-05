<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanySyystemTable extends Migration
{
    public function up()
    {
        Schema::create('company_syystem', function (Blueprint $table) {
            $table->unsignedInteger('company_id');
            $table->unsignedInteger('syystem_id');
            $table->primary(['company_id', 'syystem_id']);
            $table->foreign('company_id')->references('id')->on('company');
            $table->foreign('syystem_id')->references('id')->on('syystem');
        });
    }

    public function down()
    {
        Schema::dropIfExists('company_syystem');
    }
}
