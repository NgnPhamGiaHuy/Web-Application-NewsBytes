<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, HasApiTokens, Notifiable;

    protected $fillable = [
        'firstname',
        'lastname',
        'image_url',
        'email',
        'password',
        'phone_number',
        'address',
        'city',
        'state',
        'country',
        'postal_code',
        'bio',
        'website',
        'linkedin_profile',
        'twitter_handle',
        'birthday',
        'gender',
        'occupation',
    ];

    protected $hidden = [
        'password',
        'remember_token', // This field is necessary for Laravel's "remember me" functionality.
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'birthday' => 'date',
        ];
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'image_url' => $this->image_url,
        ];
    }

    public function followers()
    {
        return $this->belongsToMany(User::class, 'user_follows', 'followed_id', 'follower_id');
    }

    public function following()
    {
        return $this->belongsToMany(User::class, 'user_follows', 'follower_id', 'followed_id');
    }

    public function follow(User $user)
    {
        if ($this->isFollowing($user)) {
            return;
        }

        $this->following()->attach($user->id);
    }

    public function unfollow(User $user)
    {
        if (!$this->isFollowing($user)) {
            return;
        }

        $this->following()->detach($user->id);
    }

    public function isFollowing(User $user)
    {
        return $this->following()->where('followed_id', $user->id)->exists();
    }

    public function newsLists()
    {
        return $this->hasMany(NewsList::class);
    }
}
