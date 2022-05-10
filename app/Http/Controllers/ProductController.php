<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function list(){
        return Product::with(['model.brand', 'category'])
        ->get();
    }
}
