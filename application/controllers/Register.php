<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Register extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->helper(array('url','form','string'));
		$this->load->library(array ('form_validation', 'upload', 'session', 'pagination'));
	}

	public function index()
	{
		$data['title'] = "Register";
		$this->load->view('includes/header',$data);
		$this->load->view('components/navbar');
		$this->load->view('registerpage');
		$this->load->view('includes/footer');
	}

	public function new_user()
	{
		$this->load->model('User');
		$this->form_validation->set_rules('fname', 'First name', 'required');
		$this->form_validation->set_rules('lname', 'Last name', 'required');
		$this->form_validation->set_rules('email', 'Email', 'required|is_unique[user.email]');
		$this->form_validation->set_rules('password', 'Password', 'required');
		$this->form_validation->set_rules('cpassword', 'Confirm Password', 'required|matches[password]');

		$data = array(
			'fname' => $this->input->post('fname'),
			'lname' => $this->input->post('lname'),
			'email' => $this->input->post('email'),
		);

		if(!$this->form_validation->run())
		{
			$data['title'] = "Register";
			$this->load->view('includes/header',$data);
			$this->load->view('components/navbar');
			$this->load->view('registerpage');
			$this->load->view('includes/footer');
		}
		else
		{
			$query_data = array(
				'fname' => $this->input->post('fname'),
				'lname' => $this->input->post('lname'),
				'email' => $this->input->post('email'),
				'isAdmin' => 0,
				'avatar' => "default.png",
				'password' => sha1($this->input->post('password')),
			);

			$this->User->insert($query_data);

			redirect('Login');
		}
	}

}