<?php

namespace App\Http\Controllers;

use App\Models\NewsList;
use Illuminate\Http\Request;

class NewsListController extends Controller
{
    public function index()
    {
        $newsLists = NewsList::with('newsItems')->get();
        return response()->json($newsLists, 200);
    }

    public function show($id)
    {
        $newsList = NewsList::with('newsItems')->findOrFail($id);
        return response()->json($newsList, 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $newsList = NewsList::create([
            'name' => $request->name,
            'user_id' => auth()->id(),
        ]);

        return response()->json($newsList, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'sometimes|string|max:255',
        ]);

        $newsList = NewsList::findOrFail($id);
        $newsList->update($request->all());

        return response()->json($newsList, 200);
    }

    public function destroy($id)
    {
        $newsList = NewsList::findOrFail($id);
        $newsList->delete();
        return response()->json(null, 204);
    }

    public function addNews(Request $request, $id)
    {
        $newsList = NewsList::findOrFail($id);
        $newsList->newsItems()->attach($request->news_ids);

        return response()->json(['message' => 'News added to list'], 200);
    }

    public function removeNews(Request $request, $id)
    {
        $newsList = NewsList::findOrFail($id);
        $newsList->newsItems()->detach($request->news_ids);

        return response()->json(['message' => 'News removed from list'], 200);
    }

    public function getUserNewsLists($userId)
    {
        $newsLists = NewsList::where('user_id', $userId)->with('newsItems')->get();
        return response()->json($newsLists, 200);
    }
}
