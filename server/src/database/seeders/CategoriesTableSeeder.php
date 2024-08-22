<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 5; $i++) {
            DB::table('categories')->insert([
                'name' => $faker->unique()->word,
                'created_at' => $faker->dateTime($max = 'now', $timezone = date_default_timezone_get()),
                'updated_at' => $faker->dateTime($max = 'now', $timezone = date_default_timezone_get()),
            ]);
        }
    }
}
