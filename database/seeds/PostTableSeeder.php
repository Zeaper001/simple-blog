<?php

use Illuminate\Database\Seeder;
use Faker\Factory;
use Illuminate\Database\Eloquent\Builder;
class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      factory(App\User::class, 2)->create()->each(function($u) {
        $u->posts()->save(factory(App\Post::class)->make());
      });
    }
}
