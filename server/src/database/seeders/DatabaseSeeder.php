<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            UserFollowsSeeder::class,
            CategoriesTableSeeder::class,
            NewsTableSeeder::class,
            TagsTableSeeder::class,
            CommentsTableSeeder::class,
            NewsListsTableSeeder::class,
        ]);
    }
}
