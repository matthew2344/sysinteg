<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->helper(array('url','form','string'));
		$this->load->library(array ('form_validation', 'upload', 'session', 'pagination'));
	}

	public function index()
	{
		$data['title'] = "Login";
		$this->load->view('includes/header',$data);
		$this->load->view('components/navbar');
		$this->load->view('loginpage');
		$this->load->view('includes/footer');
	}

	public function auth()
	{
		$this->form_validation->set_rules('email', 'Email', 'required');
		$this->form_validation->set_rules('password', 'Password', 'required');
		if(!$this->form_validation->run())
		{
			$this->index();
		}
		else
		{
			$this->load->model('User');
			$query_data = array(
				'email' => $this->input->post('email'),	
				'password' => sha1($this->input->post('password')),	
			);
			if($response = $this->User->login($query_data))
			{
				foreach($response as $result)
				{
					$user_data = array(
						'uid' => $result->userid,
						'email' => $result->email,
						'fname' => $result->fname,
						'lname' => $result->lname,
						'isAdmin' => $result->isAdmin,
						'avatar' => $result->avatar,
					);
				}
				$this->session->set_userdata($user_data);
				if($user_data['isAdmin'] == 0)
				{
					redirect('User');
				}
				else
				{
					redirect('Admin');
				}

			}
			else
			{
				$this->session->set_flashdata('Error', 'Invalid Login Credentials');
				$this->index();
			}
			
		}
	}


}