<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $fillable = ['title', 'description', 'image_url', 'user_id', 'category_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function contentBlocks()
    {
        return $this->hasMany(ContentBlock::class);
    }

    public function newsLists()
    {
        return $this->belongsToMany(NewsList::class, 'news_list_news', 'news_id', 'news_list_id');
    }
}
