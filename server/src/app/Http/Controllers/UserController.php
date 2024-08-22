<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
//        $this->middleware('auth');
//        $this->middleware('role:admin')->only(['store', 'update', 'destroy']);
    }

    public function index()
    {
        return response()->json(User::all(), 200);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user, 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'required|string|in:admin,user'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'role' => $request->role
        ]);

        return response()->json($user, 201);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|string|email|max:255|unique:users,email,' . $id,
            'password' => 'sometimes|string|min:8',
            'role' => 'sometimes|string|in:admin,user'
        ]);

        $user = User::findOrFail($id);
        $user->update($request->all());

        if ($request->has('password')) {
            $user->password = bcrypt($request->password);
            $user->save();
        }

        return response()->json($user, 200);
    }

    public function destroy($id)
    {
        User::destroy($id);
        return response()->json(null, 204);
    }

    public function follow(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $authUser = auth()->user();

        $authUser->follow($user);

        return response()->json(['message' => 'Followed successfully'], 200);
    }

    public function unfollow(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $authUser = auth()->user();

        $authUser->unfollow($user);

        return response()->json(['message' => 'Unfollowed successfully'], 200);
    }

    public function followers($id)
    {
        $user = User::findOrFail($id);
        $followers = $user->followers()->get();

        return response()->json($followers, 200);
    }

    public function following($id)
    {
        $user = User::findOrFail($id);
        $following = $user->following()->get();

        return response()->json($following, 200);
    }
}
