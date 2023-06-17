<?php

namespace App\Controllers;

class Dashboard extends BaseController
{
    public function index()
    {
        return view('dashboard_view');
    }

    public function getUserCount(){

        $user_count = 50;

        //format data in associative array

        $data = array (
            'success' => true,
            'user_count' => $user_count
        );

        return $this->response->setJSON($data);
    }
}
