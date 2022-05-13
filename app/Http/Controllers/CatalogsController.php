<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\ProductModel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class CatalogsController extends Controller
{
    public function categories(){
        return Category::all();
    }

    public function brands(){
        return ProductModel::all();
    }

    public function models($brandId){
        return ProductModel::where("brand_id", $brandId)->get();
    }
}
