<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
        CREATE TABLE datas (
            idCompany INTEGER NOT NULL,
            idSystem INTEGER NOT NULL,
            label VARCHAR(15),
            value VARCHAR(30),
            id INTEGER NOT NULL AUTO_INCREMENT,
            idClient INTEGER NOT NULL,
            module VARCHAR(20),
            CONSTRAINT pk_datas PRIMARY KEY (id),
            CONSTRAINT fk_datas_companysystems FOREIGN KEY (idCompany, idSystem) REFERENCES companysystems(idCompany, idSystem),
            CONSTRAINT fk_datas_clients FOREIGN KEY (idClient) REFERENCES clients(id)
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
        Schema::dropIfExists('datas');
    }
}
