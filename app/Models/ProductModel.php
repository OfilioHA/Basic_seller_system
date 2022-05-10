<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    use HasFactory;

    public function products(){
        return $this->hasMany(Product::class, "model_id");
    }

    public function brand(){
        return $this->belongsTo(Brand::class);
    }
}
