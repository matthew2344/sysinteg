<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->helper(array('url','form','string'));
		$this->load->library(array ('form_validation', 'upload', 'session', 'pagination'));
	}

	public function index()
	{
		$data['title'] = "Homepage";
		$data['dashboard'] = true;
		$this->load->view('includes/header',$data);
		$this->load->view('components/user/navbar');
		$this->load->view('user/dashboard');
		$this->load->view('includes/footer');
	}

	public function create_event()
	{
		$data['title'] = "Create Event";
		$data['create_event'] = true;
		$my_option = array("12 AM", "1 AM", "2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM");
		$data["my_option"] = $my_option;
		$this->load->view('includes/header',$data);
		$this->load->view('components/user/navbar');
		$this->load->view('user/create_event');
		$this->load->view('includes/footer');
	}

	public function add_event($preview = "")
	{
		$this->form_validation->set_rules('title_input', 'Title', 'required');
		$this->form_validation->set_rules('location', 'Event Place', 'required');
		$this->form_validation->set_rules('event_type', 'Event Type', 'required');
		$this->form_validation->set_rules('date', 'Date', 'required');
		$this->form_validation->set_rules('startTime', 'Start Time', 'required');
		$this->form_validation->set_rules('endTime', 'End Time', 'required');



		$data = array(
			'title_input' =>  $this->input->post("title_input"),
			'location' =>  $this->input->post("location"),
			'event_type' =>  $this->input->post("event_type"),
			'date' =>  $this->input->post("date"),
			'startTime' =>  strtotime($this->input->post("startTime")),
			'endTime' =>  strtotime($this->input->post("endTime")),
			'description' => $this->input->post("description"),
		);

		$config = array(
            'upload_path' =>  $this->config->item('Upload_path'),
            'allowed_types' => $this->config->item('Img_types'),
            'max_size' => $this->config->item('Max_img_size'),
			'encrypt_name' => true,
        );

		$this->load->library('upload');
        $this->upload->initialize($config);

		if($this->form_validation->run())
		{
			
			if(strtotime($this->input->post("startTime")) >= strtotime($this->input->post("endTime")) )
			{
				$this->session->set_flashdata("Time_error", "Time end should be greater than time start.");
				
				$data['title'] = "Create Event";
				$data['create_event'] = true;
				$my_option = array("12 AM", "1 AM", "2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM");
				$data["my_option"] = $my_option;
				$this->load->view('includes/header',$data);
				$this->load->view('components/user/navbar');
				$this->load->view('user/create_event');
				$this->load->view('includes/footer');
			}
			else
			{
				if(!$this->upload->do_upload('upload_poster'))
				{
					$this->session->set_flashdata('upload_error', $this->upload->display_errors());
					$data['title'] = "Create Event";
					$data['create_event'] = true;
					$my_option = array("12 AM", "1 AM", "2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM");
					$data["my_option"] = $my_option;
					$this->load->view('includes/header',$data);
					$this->load->view('components/user/navbar');
					$this->load->view('user/create_event');
					$this->load->view('includes/footer');
				}
				else
				{
					$upload_data = $this->upload->data();
					$file_name = $upload_data['file_name'];


					$event_data = array(
						'title' =>  $this->input->post("title_input"),
						'creatorID' => $this->session->userdata("uid"),
						'location' =>  $this->input->post("location"),
						'event_type' =>  $this->input->post("event_type"),
						'date_event' =>  $this->input->post("date"),
						'start_time' =>  $this->input->post("startTime"),
						'end_time' =>  $this->input->post("endTime"),
						'description' => $this->input->post("description"),
						'poster' => $file_name,
					);

					$this->load->model("Event");
					$result = $this->Event->insert($event_data);
					if($result)
					{
						if($preview == "")
						{
							$this->session->set_flashdata('upload_event_200', "Successfully created an event");
							redirect('user/create_event');
						}
						else
						{
							redirect("user/event_page/$result");
						}	
					}
				}
				
			}


		}
		else
		{
			
			$data['title'] = "Create Event";
			$data['create_event'] = true;
			$my_option = array("12 AM", "1 AM", "2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM");
			$data["my_option"] = $my_option;
			$this->load->view('includes/header',$data);
			$this->load->view('components/user/navbar');
			$this->load->view('user/create_event');
			$this->load->view('includes/footer');
		}


	}


	public function join_event()
	{
		$data['title'] = "Join Event";
		$data['join_event'] = true;

		$this->load->model('Event');

		$config = array();
		$config["base_url"] =  site_url() . "/Admin/manage_events";
		$config["per_page"] = 10;
		$config["uri_segment"] = 3;
		$config['total_rows'] = $this->Event->event_count();
		$this->pagination->initialize($config);

		$data['total_rows'] = $this->Event->count();
		$data['pagination'] = $this->pagination->create_links();
		$page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
		$data['events'] = $this->Event->select_events($config["per_page"], $page);


		$this->load->view('includes/header',$data);
		$this->load->view('components/user/navbar');
		$this->load->view('user/join_event');
		$this->load->view('includes/footer');
	}

	public function profile()
	{
		$data['title'] = "Profile";
		$data['profile_page'] = true;
		$this->load->view('includes/header',$data);
		$this->load->view('components/user/navbar');
		$this->load->view('user/profile');
		$this->load->view('includes/footer');
	}

	public function update_profile()
	{
		$this->form_validation->set_rules('fname', 'First name', 'required');
		$this->form_validation->set_rules('lname', 'Last name', 'required');

		$data['profile_page'] = true;

		$config = array(
            'upload_path' =>  $this->config->item('Avatar_path'),
            'allowed_types' => $this->config->item('Img_types'),
            'max_size' => $this->config->item('Max_img_size'),
			'encrypt_name' => true,
        );

		$this->load->library('upload');
		$this->upload->initialize($config);

		if($this->form_validation->run())
		{
			$this->load->model("Profile");
			if(!$_FILES['avatar']['error'] == 4 || ($_FILES['avatar']['size'] == 0 && $_FILES['avatar']['error'] == 0))
			{
				if(!$this->upload->do_upload('avatar'))
				{
					$this->session->set_flashdata('upload_error', $this->upload->display_errors());
				}
				else
				{
					$upload_data = $this->upload->data();
					$file_name = $upload_data['file_name'];

					$update_data = array(
						'fname' => $this->input->post("fname"),
						'lname' => $this->input->post("lname"),
						'avatar' => $file_name,
					);

					
					$this->Profile->update($update_data, $this->session->userdata("uid"));
					$this->session->set_flashdata("update_success", "Changes saved!");
					$this->session->set_userdata($update_data);
				}
			}
			else
			{
				$update_data = array(
					'fname' => $this->input->post("fname"),
					'lname' => $this->input->post("lname"),
				);

				
				$this->Profile->update($update_data, $this->session->userdata("uid"));
				$this->session->set_flashdata("update_success", "Changes saved!");
				$this->session->set_userdata($update_data);
			}
		}

		$this->profile();
	}

	public function change_password()
	{
		$data['title'] = "Change password";
		$data['change_pass'] = true;
		$this->load->view('includes/header',$data);
		$this->load->view('components/user/navbar');
		$this->load->view('user/profile');
		$this->load->view('includes/footer');
	}

	public function change_email()
	{
		$data['title'] = "Change Email";
		$data['change_email'] = true;
		$this->load->view('includes/header',$data);
		$this->load->view('components/user/navbar');
		$this->load->view('user/profile');
		$this->load->view('includes/footer');
	}

	public function update_email()
	{
		$this->load->model("Profile");
		$this->form_validation->set_rules('email', 'Email', 'required|is_unique[user.email]');
		$this->form_validation->set_rules('cpassword', 'password', 'required');

		if(!$this->form_validation->run())
		{
			$this->change_email();
		}
		else
		{
			$validate_data = array(
				'userID' => $this->session->userdata('uid'),
				'password' => sha1($this->input->post("cpassword"))
			);

			if($result = $this->Profile->validate_password($validate_data))
			{
				$update_data = array(
					'email' => $this->input->post("email")
				);

				$this->Profile->update($update_data, $this->session->userdata('uid'));
				$this->session->set_flashdata("update_success","Update success!");
				$this->session->set_userdata($update_data);
				$this->change_email();
			}
			else
			{
				$this->session->set_flashdata("update_fail", "Password is incorrect.");
				$this->change_email();
			}
		}
	}

	public function update_password()
	{
		$this->form_validation->set_rules('opassword', 'Old password', 'required');
		$this->form_validation->set_rules('npassword', 'New Password', 'required');
		$this->form_validation->set_rules('rpassword', 'Repeat password', 'required|matches[npassword]');

		$this->load->model("Profile");
		if(!$this->form_validation->run())
		{
			$this->change_password();
		}
		else
		{
			$validate_data = array(
				'userID' => $this->session->userdata('uid'),
				'password' => sha1($this->input->post("opassword"))
			);

			if($result = $this->Profile->validate_password($validate_data))
			{
				$update_data = array(
					'password' => sha1($this->input->post('npassword'))
				);

				$this->Profile->update($update_data, $this->session->userdata('uid'));
				// $this->session->set_flashdata("update_success","Creation success!");
				redirect("Logout");
			}
			else
			{
				$this->session->set_flashdata("update_fail", "Old password is incorrect.");
				$this->change_password();
			}

		}
	}

	public function my_events()
	{
		$this->load->model("Event");
		$data['title'] = "Manage Events";

		$config = array();
		$config["base_url"] =  site_url() . "/Admin/manage_events";
		$config["per_page"] = 10;
		$config["uri_segment"] = 3;
		$config['total_rows'] = $this->Event->count2();
		$this->pagination->initialize($config);



		$data['total_rows'] = $this->Event->count2();
		$data['pagination'] = $this->pagination->create_links();
		$page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
		$data['events'] = $this->Event->select_all2($config["per_page"], $page);


		$this->load->view('includes/header',$data);
		$this->load->view('components/user/navbar');
		$this->load->view('user/my_events');
		$this->load->view('includes/footer');
	}

	public function event_page($eventID)
	{
		$data['title'] = "This Event";
		$this->load->model('Event');
		$data['event'] = $this->Event->this_event($eventID);
		$this->load->view('includes/header',$data);
		$this->load->view('components/user/navbar');
		$this->load->view('user/event_page');
		$this->load->view('includes/footer');
	}

	public function view_event($eventID)
	{
		$data['title'] = "This Event";
		$this->load->model('Event');
		$data['event'] = $this->Event->this_event($eventID);
		$my_option = array("12 AM", "1 AM", "2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM");
		$data["my_option"] = $my_option;
		$this->load->view('includes/header',$data);
		$this->load->view('components/user/navbar');
		$this->load->view('user/view_event');
		$this->load->view('includes/footer');
	}


	public function update_event($eventID, $stat = "")
	{
		$this->form_validation->set_rules('title_input', 'Title', 'required');
		$this->form_validation->set_rules('location', 'Event Place', 'required');
		$this->form_validation->set_rules('event_type', 'Event Type', 'required');
		$this->form_validation->set_rules('date', 'Date', 'required');
		$this->form_validation->set_rules('startTime', 'Start Time', 'required');
		$this->form_validation->set_rules('endTime', 'End Time', 'required');
		$flag = 0;


		$data = array(
			'title_input' =>  $this->input->post("title_input"),
			'location' =>  $this->input->post("location"),
			'event_type' =>  $this->input->post("event_type"),
			'date' =>  $this->input->post("date"),
			'startTime' =>  strtotime($this->input->post("startTime")),
			'endTime' =>  strtotime($this->input->post("endTime")),
			'description' => $this->input->post("description"),
		);

		$config = array(
            'upload_path' =>  $this->config->item('Upload_path'),
            'allowed_types' => $this->config->item('Img_types'),
            'max_size' => $this->config->item('Max_img_size'),
			'encrypt_name' => true,
        );

		$this->load->library('upload');
        $this->upload->initialize($config);

		if($this->form_validation->run())
		{
			if(strtotime($this->input->post("startTime")) >= strtotime($this->input->post("endTime")) )
			{
				$this->session->set_flashdata("Time_error", "Time end should be greater than time start.");
			}
			else
			{

				if(!$_FILES['upload_poster']['error'] == 4 || ($_FILES['upload_poster']['size'] == 0 && $_FILES['upload_poster']['error'] == 0))
				{
					if(!$this->upload->do_upload('upload_poster'))
					{
						$this->session->set_flashdata('upload_error', $this->upload->display_errors());
					}
					else
					{
						$upload_data = $this->upload->data();
						$file_name = $upload_data['file_name'];

						
						$event_data = array(
							'title' =>  $this->input->post("title_input"),
							'location' =>  $this->input->post("location"),
							'event_type' =>  $this->input->post("event_type"),
							'date_event' =>  $this->input->post("date"),
							'start_time' =>  $this->input->post("startTime"),
							'end_time' =>  $this->input->post("endTime"),
							'description' => $this->input->post("description"),
							'poster' => $file_name,
						);

						$this->load->model("Event");
						$this->Event->update($event_data, $eventID);
					}
				}
				else
				{
					$event_data = array(
						'title' =>  $this->input->post("title_input"),
						'location' =>  $this->input->post("location"),
						'event_type' =>  $this->input->post("event_type"),
						'date_event' =>  $this->input->post("date"),
						'start_time' =>  $this->input->post("startTime"),
						'end_time' =>  $this->input->post("endTime"),
						'description' => $this->input->post("description"),
					);

					$this->load->model("Event");
					$this->Event->update($event_data, $eventID);
					$this->session->set_flashdata("update_success", "Changes saved!");
				}
			}


		}

		if($stat == "")
		{

			redirect("user/view_event/$eventID");
		}
		else
		{
			$this->session->set_flashdata("back", site_url("user/view_event/$eventID"));
			$this->event_page($eventID);
		}
	}


	public function delete_event($eventID)
	{
		$this->load->model('Event');
		$this->Event->delete($eventID);
		redirect("user/my_events");
	}

	public function join_($eventID)
	{
		$this->load->model('Attendee');
		if($not_approved = $this->Attendee->not_approved($eventID))
		{
			$this->session->set_flashdata("joined_failed", "This event is not yet approved by the admin.");
		}
		else
		{

			if($result = $this->Attendee->select_where($this->session->userdata('uid'), $eventID))
			{
				$this->session->set_flashdata("joined_failed", "Already joined this event.");
			}
			elseif($validate = $this->Attendee->validate_($this->session->userdata('uid'), $eventID))
			{
				$this->session->set_flashdata("joined_failed", "Creator cannot joined their own event.");
			}
			else
			{
				$query_data = array(
					'eventID' => $eventID,
					'userID' => $this->session->userdata('uid'),
				);
				$this->Attendee->insert($query_data);
				$this->session->set_flashdata("joined_success", "Successfully joined an event.");
			}
		}


		redirect("user/event_page/$eventID");
	}

	public function joined_events()
	{
		$this->load->model("Event");
		$data['title'] = "Manage Events";

		$config = array();
		$config["base_url"] =  site_url() . "/Admin/manage_events";
		$config["per_page"] = 10;
		$config["uri_segment"] = 3;
		$config['total_rows'] = $this->Event->count3();
		$this->pagination->initialize($config);



		$data['total_rows'] = $this->Event->count3();
		$data['pagination'] = $this->pagination->create_links();
		$page = ($this->uri->segment(3)) ? $this->uri->segment(3) : 0;
		$data['events'] = $this->Event->select_all3($config["per_page"], $page);


		$this->load->view('includes/header',$data);
		$this->load->view('components/user/navbar');
		$this->load->view('user/my_joined_events');
		$this->load->view('includes/footer');
	}

	public function delete_attending($attendeeID)
	{
		$this->load->model("Attendee");
		$this->Attendee->delete($attendeeID);
		redirect("user/joined_events");
	}




}