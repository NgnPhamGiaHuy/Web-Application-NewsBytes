<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class CommentsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 150; $i++) {
            DB::table('comments')->insert([
                'content' => $faker->sentence,
                'user_id' => DB::table('users')->inRandomOrder()->first()->id,
                'news_id' => DB::table('news')->inRandomOrder()->first()->id,
                'created_at' => $faker->dateTime($max = 'now', $timezone = date_default_timezone_get()),
                'updated_at' => $faker->dateTime($max = 'now', $timezone = date_default_timezone_get()),
            ]);
        }
    }
}
