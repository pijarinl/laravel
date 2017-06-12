<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class ReactController extends Controller
{
    //
    public function index()
	{
    	// return view('tasks.index');
    	// $tasks = $request->user()->tasks()->get();
    	// $tasks = Task::all();
	    return view('react');
	}
	public function store() {
		// body...
		return redirect('react');
	}
}
