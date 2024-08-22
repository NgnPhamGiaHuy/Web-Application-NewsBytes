<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class UserFollowsSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        $users = DB::table('users')->pluck('id')->toArray();

        foreach ($users as $follower_id) {
            $following_ids = array_diff($users, [$follower_id]);
            $followings = $faker->randomElements($following_ids, $faker->numberBetween(1, 5));

            foreach ($followings as $followed_id) {
                DB::table('user_follows')->insert([
                    'follower_id' => $follower_id,
                    'followed_id' => $followed_id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
