<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Log;

class VerifyToken
{
    public function handle($request, Closure $next)
    {
        try {
            $accessToken = $request->header('Authorization');

            if (!$accessToken) {
                return response()->json(['error' => 'Access token missing'], 401);
            }

            $token = explode(' ', $accessToken)[1];

            $user = JWTAuth::setToken($token)->toUser();

            if (!$user) {
                return response()->json(['error' => 'User not found'], 404);
            }

            $request->merge(['user' => $user, 'userId' => $user->id]);

            return $next($request);
        } catch (JWTException $e) {
            Log::error("JWT exception: " . $e->getMessage());
            return response()->json(['error' => 'Token invalid'], 401);
        } catch (\Exception $e) {
            Log::error("Error in verifyToken: " . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }
}
