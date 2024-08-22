<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContentBlock extends Model
{
    protected $fillable = ['news_id', 'parent_id', 'type', 'content', 'order'];

    public function news()
    {
        return $this->belongsTo(News::class);
    }

    public function parent()
    {
        return $this->belongsTo(ContentBlock::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(ContentBlock::class, 'parent_id')->orderBy('order');
    }
}
