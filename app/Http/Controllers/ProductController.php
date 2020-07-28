<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\SearchEvent;
use App\Product;


class ProductController extends Controller
{
    public function search(Request $request){
      $query =$request->query('query');
      
      $products =Product::where('name','like','%' .$query . '%')
        ->orWhere('description','like', '%' .$query . '%')
        ->get();

         event(new SearchEvent($products));

        return response()->json('ok');

    }

    public function get(Request $request)
        {
            $products = Product::all();
            return response()->json($products);
        }
}
