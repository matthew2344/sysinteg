<?php

class Attendee extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function insert($data)
    {
        $this->db->insert('attendee', $data);
    }

    public function select_where($userID,$eventID)
    {
        $this->db->from('attendee');
        $this->db->where('userID', $userID);
        $this->db->where('eventID', $eventID);

        $query = $this->db->get();
        return $query->result();
    }

    public function validate_($userID, $eventID)
    {
        $this->db->from('user');
        $this->db->join('event', 'event.creatorID = user.userID', 'inner');
        $this->db->where('user.userID', $userID);
        $this->db->where('event.eventID', $eventID);


        $query = $this->db->get();
        return $query->result();
    }

    public function not_approved($eventID)
    {
        $this->db->from('event');
        $this->db->where('event.eventID', $eventID);
        $this->db->where('event.event_status', "0");
        $result = $this->db->get();
        return $result->result();
    }

    public function delete($attendeeID)
    {
        $this->db->delete('attendee', array('attendeeID' => $attendeeID));
    }

    // public function update($data, $eventID)
    // {

    // }

}