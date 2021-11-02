<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanysystemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
        CREATE TABLE companysystems (
            idCompany INTEGER NOT NULL,
            idSystem INTEGER NOT NULL,
            CONSTRAINT pk_companysystems PRIMARY KEY (idCompany, idSystem),
            CONSTRAINT fk_companysystems_companies FOREIGN KEY (idCompany) REFERENCES companies(id),
            CONSTRAINT fk_companysystems_systems FOREIGN KEY (idSystem) REFERENCES systems(id)
          );
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companysystems');
    }
}
