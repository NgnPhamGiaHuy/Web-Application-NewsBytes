<?php

namespace App\Helpers;

class ImageHelper
{
    public static function generateRealisticImageUrl()
    {
        $baseUrl = 'https://picsum.photos';
        $width = rand(400, 800);
        $height = rand(300, 600);

        return "{$baseUrl}/{$width}/{$height}";
    }
}
