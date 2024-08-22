<?php

namespace Database\Seeders;

use App\Helpers\ImageHelper;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class NewsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 100; $i++) {
            $newsId = DB::table('news')->insertGetId([
                'title' => $faker->sentence,
                'user_id' => DB::table('users')->inRandomOrder()->first()->id,
                'category_id' => DB::table('categories')->inRandomOrder()->first()->id,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $description = null;
            $imageUrl = null;

            $contentBlocks = [];
            $blockOrder = 1;

            for ($j = 0; $j < 24; $j++) {
                $type = $faker->randomElement(['heading', 'paragraph', 'list', 'quote', 'image']);

                switch ($type) {
                    case 'heading':
                        $content = $faker->sentence;
                        break;
                    case 'paragraph':
                        $content = $faker->paragraphs(2, true);
                        $description = $description ?? $content;
                        break;
                    case 'list':
                        $content = 'List:';
                        break;
                    case 'quote':
                        $content = $faker->sentence;
                        break;
                    case 'image':
                        $content = ImageHelper::generateRealisticImageUrl();
                        $imageUrl = $imageUrl ?? $content;
                        break;
                }

                $contentBlock = [
                    'news_id' => $newsId,
                    'type' => $type,
                    'content' => $content,
                    'order' => $blockOrder++
                ];

                if ($type === 'list') {
                    $listBlockId = $blockOrder - 1;
                    $contentBlocks[] = $contentBlock;
                    for ($k = 0; $k < 3; $k++) {
                        $contentBlocks[] = [
                            'news_id' => $newsId,
                            'type' => 'list_item',
                            'content' => $faker->sentence,
                            'parent_id' => $listBlockId,
                            'order' => $k + 1
                        ];
                    }
                } else {
                    $contentBlocks[] = $contentBlock;
                }
            }

            foreach ($contentBlocks as $block) {
                DB::table('content_blocks')->insert([
                    'news_id' => $block['news_id'],
                    'type' => $block['type'],
                    'content' => $block['content'],
                    'parent_id' => $block['parent_id'] ?? null,
                    'order' => $block['order'],
                ]);
            }

            DB::table('news')->where('id', $newsId)->update([
                'description' => $description,
                'image_url' => $imageUrl,
            ]);
        }
    }
}
