<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description');
            $table->integer('quantity');
            $table->decimal('price');
            $table->decimal('promotion');
            $table->integer('idCategory')->unsigned();
            $table->foreign('idCategory')->references('id')->on('category');
            $table->integer('idProductType')->unsigned();
            $table->foreign('idProductType')->references('id')->on('producttype');
            $table->integer('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
}
