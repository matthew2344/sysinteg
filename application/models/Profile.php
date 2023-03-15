<?php

class Profile extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function insert($data)
    {
        $this->db->insert('user', $data);
    }
    
    public function login($data)
    {
        $result = $this->db->get_where('user', array('email' => $data['email'], 'password' => $data['password']));
        return $result->result();
    }

    public function select_this($userID)
    {
        $this->db->from('user');
        $this->db->where('userID', $userID);
        $query = $this->db->get();
        return $query->result();
    }

    public function count()
    {
        $this->db->from('user');

        return $this->db->count_all_results();
    }

    public function select_all($limit, $start, $search="")
    {
        $this->db->from('user');

 
        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query->result();
    }

    public function update($data, $userID)
    {
        $this->db->update('user', $data, array('userid' => $userID));
    }

    public function validate_password($data)
    {
        $result = $this->db->get_where('user', array('userID' => $data['userID'], 'password' => $data['password']));
        return $result->result();
    }
}