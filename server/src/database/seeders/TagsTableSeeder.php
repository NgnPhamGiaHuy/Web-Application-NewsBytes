<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class TagsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 15; $i++) {
            DB::table('tags')->insert([
                'name' => $faker->unique()->word,
                'created_at' => $faker->dateTime($max = 'now', $timezone = date_default_timezone_get()),
                'updated_at' => $faker->dateTime($max = 'now', $timezone = date_default_timezone_get()),
            ]);
        }
    }
}
