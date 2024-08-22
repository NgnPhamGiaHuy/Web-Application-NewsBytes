<?php

namespace Database\Seeders;

use App\Helpers\ImageHelper;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use Faker\Factory as Faker;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        for ($i = 0; $i < 10; $i++) {
            DB::table('users')->insert([
                'firstname' => $faker->firstName,
                'lastname' => $faker->lastName,
                'image_url' => ImageHelper::generateRealisticImageUrl(),
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password'),
                'phone_number' => $faker->phoneNumber,
                'address' => $faker->address,
                'city' => $faker->city,
                'state' => $faker->state,
                'country' => $faker->country,
                'postal_code' => $faker->postcode,
                'bio' => $faker->paragraph,
                'website' => $faker->url,
                'linkedin_profile' => $faker->url,
                'twitter_handle' => '@' . $faker->userName,
                'birthday' => $faker->date(),
                'gender' => $faker->randomElement(['male', 'female', 'other']),
                'occupation' => $faker->jobTitle,
                'created_at' => $faker->dateTime(),
                'updated_at' => $faker->dateTime(),
            ]);
        }
    }
}
