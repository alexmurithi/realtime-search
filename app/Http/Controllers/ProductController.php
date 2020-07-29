<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\SearchEvent;
use App\Product;


class ProductController extends Controller
{
    public function search(Request $request){
        //query stores whatever the use types to search//
      $query =$request->query('query');
      
      /*search from the database where name is like query or where description is like query*/
      $products =Product::where('name','like','%' .$query . '%')
        ->orWhere('description','like', '%' .$query . '%')
        ->get();
        
       //triggers this searchEvent//
         event(new SearchEvent($products));
     
         //returns a response of ok---showing everything is okay//
        return response()->json('ok');

    }

    public function get(Request $request)
        {
            //gets all products and returns as a json response//
            $products = Product::all();
            return response()->json($products);
        }
}
