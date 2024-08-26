<?php

namespace App\Http\Controllers;

use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function register(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8',
            'firstname' => 'nullable|string|max:255',
            'lastname' => 'required|string|max:255',
        ]);

        try {
            $tokens = $this->userService->register($request->all());

            return response()->json($tokens, 201);
        } catch (\Exception $e) {
            Log::error('Error in registerUser: ' . $e->getMessage());

            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        try {
            $tokens = $this->userService->login($request->only(['email', 'password']));

            if (!$tokens) {
                return response()->json(['message' => 'Invalid credentials.'], 401);
            }

            return response()->json($tokens, 200);
        } catch (\Exception $e) {
            Log::error('Error in loginUser: ' . $e->getMessage());

            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function logout(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            if (!$user) {
                return response()->json(['error' => 'User not authenticated'], 401);
            }

            $this->userService->logout($user);

            return response()->json(['message' => 'Logout successful'], 200);
        } catch (\Exception $e) {
            Log::error('Error in logoutUser: ' . $e->getMessage());

            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }

    public function refreshToken(Request $request)
    {
        $request->validate([
            'remember_token' => 'required|string',
        ]);

        try {
            $tokens = $this->userService->refreshAccessToken($request->input('remember_token'));

            if (!$tokens) {
                return response()->json(['message' => 'Invalid refresh token.'], 401);
            }

            return response()->json($tokens, 200);
        } catch (\Exception $e) {
            Log::error('Error in remember_token: ' . $e->getMessage());

            return response()->json(['error' => 'Internal Server Error'], 500);
        }
    }
}
