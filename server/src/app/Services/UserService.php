<?php

namespace App\Services;

use App\Models\User;
use App\Helpers\ImageHelper;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Str;

class UserService
{
    public function register(array $data)
    {
        $imageUrl = $data['image_url'] ?? ImageHelper::generateRealisticImageUrl();

        $user = User::create([
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'firstname' => $data['firstname'],
            'lastname' => $data['lastname'],
            'image_url' => $imageUrl,
        ]);

        $accessToken = JWTAuth::fromUser($user);
        $refreshToken = Str::random(64);

        $user->remember_token = $refreshToken;
        $user->save();

        return [
            'accessToken' => $accessToken,
            'remember_token' => $refreshToken,
        ];
    }

    public function login(array $credentials)
    {
        if (!$accessToken = JWTAuth::attempt($credentials)) {
            return null;
        }

        $refreshToken = Str::random(64);

        return [
            'accessToken' => $accessToken,
            'remember_token' => $refreshToken,
        ];
    }

    public function logout(User $user)
    {
        JWTAuth::invalidate(JWTAuth::getToken());

        $user->remember_token = null;
        $user->save();
    }

    public function refreshAccessToken($refreshToken)
    {
        $user = User::where('remember_token', $refreshToken)->first();

        if (!$user) {
            return null;
        }

        $accessToken = JWTAuth::fromUser($user);

        return [
            'accessToken' => $accessToken
        ];
    }
}
