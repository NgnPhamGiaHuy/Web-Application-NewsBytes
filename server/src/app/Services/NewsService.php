<?php

namespace App\Services;

use App\Models\News;
use Illuminate\Support\Facades\DB;

class NewsService
{
    public function getAllNews($perPage = 10, $page = 1)
    {
        return News::with(['user', 'category', 'contentBlocks'])->paginate($perPage, ['*'], 'page', $page);
    }

    public function getNewsById($id)
    {
        return News::with(['user', 'category', 'contentBlocks.children'])
            ->findOrFail($id);
    }

    public function getNewsByUserId($userId, $perPage = 10, $page = 1)
    {
        return News::where('user_id', $userId)
            ->with(['user', 'category', 'contentBlocks'])
            ->paginate($perPage, ['*'], 'page', $page);
    }

    public function createNews($data)
    {
        return DB::transaction(function() use ($data) {
            $news = News::create([
                'title' => $data['title'],
                'user_id' => $data['user_id'],
                'category_id' => $data['category_id'],
                'description' => $data['description'] ?? null,
                'image_url' => $data['image_url'] ?? null,
            ]);

            if (isset($data['tags'])) {
                $news->tags()->attach($data['tags']);
            }

            // Handle content blocks
            if (isset($data['content_blocks'])) {
                foreach ($data['content_blocks'] as $index => $block) {
                    $news->contentBlocks()->create([
                        'type' => $block['type'],
                        'content' => $block['content'],
                        'order' => $index + 1
                    ]);
                }
            }

            return $news;
        });
    }

    public function updateNews($id, $data)
    {
        return DB::transaction(function() use ($id, $data) {
            $news = News::findOrFail($id);
            $news->update([
                'title' => $data['title'] ?? $news->title,
                'category_id' => $data['category_id'] ?? $news->category_id,
                'description' => $data['description'] ?? $news->description,
                'image_url' => $data['image_url'] ?? $news->image_url,
            ]);

            if (isset($data['tags'])) {
                $news->tags()->sync($data['tags']);
            }

            if (isset($data['content_blocks'])) {
                $news->contentBlocks()->delete();
                foreach ($data['content_blocks'] as $index => $block) {
                    $news->contentBlocks()->create([
                        'type' => $block['type'],
                        'content' => $block['content'],
                        'order' => $index + 1
                    ]);
                }
            }

            return $news;
        });
    }

    public function deleteNews($id)
    {
        return News::destroy($id);
    }
}
