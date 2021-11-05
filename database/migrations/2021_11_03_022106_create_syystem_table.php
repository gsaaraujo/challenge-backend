<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSyystemTable extends Migration
{
    public function up()
    {
        Schema::create('syystem', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 30);
        });
    }

    public function down()
    {
        Schema::dropIfExists('syystem');
    }
}
