<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanySystemTable extends Migration
{
    public function up()
    {
        Schema::create('company_system', function (Blueprint $table) {
            $table->unsignedInteger('company_id');
            $table->unsignedInteger('system_id');
            $table->primary(['company_id', 'system_id']);
            $table->foreign('company_id')->references('id')->on('company');
            $table->foreign('system_id')->references('id')->on('system');
        });
    }

    public function down()
    {
        Schema::dropIfExists('company_system');
    }
}
