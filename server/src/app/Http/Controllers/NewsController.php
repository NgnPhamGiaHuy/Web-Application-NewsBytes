<?php

namespace App\Http\Controllers;

use App\Services\NewsService;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    protected $newsService;

    public function __construct(NewsService $newsService)
    {
        $this->newsService = $newsService;
        // $this->middleware('auth');
        // $this->middleware('role:admin')->only(['store', 'update', 'destroy']);
    }

    public function index(Request $request)
    {
        $perPage = 10;
        $page = $request->query('page', 1);
        $news = $this->newsService->getAllNews($perPage, $page);

        return response()->json($news, 200);
    }

    public function show($id)
    {
        $news = $this->newsService->getNewsById($id);
        return response()->json($news, 200);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'content_blocks' => 'required|array',
            'content_blocks.*.type' => 'required|string',
            'content_blocks.*.content' => 'required|string',
            'tags' => 'array|exists:tags,id'
        ]);

        $news = $this->newsService->createNews($request->all());
        return response()->json($news, 201);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'sometimes|string|max:255',
            'category_id' => 'sometimes|exists:categories,id',
            'content_blocks' => 'sometimes|array',
            'content_blocks.*.type' => 'sometimes|string',
            'content_blocks.*.content' => 'sometimes|string',
            'tags' => 'sometimes|array|exists:tags,id'
        ]);

        $news = $this->newsService->updateNews($id, $request->all());
        return response()->json($news, 200);
    }

    public function destroy($id)
    {
        $this->newsService->deleteNews($id);
        return response()->json(null, 204);
    }

    public function getNewsByUserId(Request $request)
    {
        $userId = $request->query('userId');

        if (!$userId) {
            return response()->json(['message' => 'User ID is required.'], 400);
        }

        $perPage = $request->query('per_page', 10);
        $page = $request->query('page', 1);

        $news = $this->newsService->getNewsByUserId($userId, $perPage, $page);

        if ($news->isEmpty()) {
            return response()->json(['message' => 'No news found for this user.'], 404);
        }

        return response()->json($news, 200);
    }
}
