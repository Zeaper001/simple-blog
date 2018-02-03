<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Post extends Model
{
  protected $fillable = ['title', 'body'];

  public function user()
  {
    
  }
}
