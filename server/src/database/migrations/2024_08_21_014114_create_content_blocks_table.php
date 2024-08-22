<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('content_blocks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('news_id')->constrained()->onDelete('cascade');
            $table->foreignId('parent_id')->nullable()->constrained('content_blocks')->onDelete('cascade');
            $table->string('type'); // e.g., 'paragraph', 'image', 'quote', 'list', 'heading', etc.
            $table->text('content'); // stores the content (could be text, URL, or JSON)
            $table->integer('order'); // stores the order of the content blocks
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('content_blocks');
    }
};
