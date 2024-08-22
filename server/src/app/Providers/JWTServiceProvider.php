<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Providers\JWT\Lcobucci;

class JWTServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('jwt.auth', function ($app) {
            $config = $app['config']['jwt'];

            return new JWTAuth(
                new Lcobucci($config['secret'], $config['algo'], $config['keys']),
                $config
            );
        });
    }
}
