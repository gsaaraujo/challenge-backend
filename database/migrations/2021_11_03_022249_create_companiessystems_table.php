<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniessystemsTable extends Migration
{
    public function up()
    {
        Schema::create('companiessystems', function (Blueprint $table) {
            $table->unsignedInteger('idCompany');
            $table->unsignedInteger('idSystem');
            $table->primary(['idCompany', 'idSystem']);
            $table->foreign('idCompany')->references('id')->on('companies');
            $table->foreign('idSystem')->references('id')->on('systems');
        });
    }

    public function down()
    {
        Schema::dropIfExists('companiessystems');
    }
}
