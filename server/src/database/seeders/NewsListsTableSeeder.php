<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use App\Models\User;
use App\Models\News;
use App\Models\NewsList;

class NewsListsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        $users = User::all();
        $newsItems = News::all();

        foreach ($users as $user) {
            for ($i = 0; $i < 3; $i++) {
                $newsList = NewsList::create([
                    'name' => $faker->word . ' List',
                    'user_id' => $user->id,
                ]);

                $newsList->newsItems()->attach(
                    $newsItems->random(rand(1, 5))->pluck('id')->toArray()
                );
            }
        }
    }
}
