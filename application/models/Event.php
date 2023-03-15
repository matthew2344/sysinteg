<?php

class Event extends CI_Model
{
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function insert($data)
    {

        $this->db->insert('event', $data);

        $inserted_id = $this->db->insert_id();

        return $inserted_id;
    }

    public function count($search="")
    {
        $this->db->from('event');
        $this->db->join('user','user.userid = event.creatorID', 'inner');
        return $this->db->count_all_results();
    }

    public function select_all($limit, $start, $search="")
    {
        $this->db->from('event');
        $this->db->join('user','user.userid = event.creatorID', 'inner');
 

        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query->result();
    }

    public function count2($search="")
    {
        $this->db->from('event');
        $this->db->join('user','user.userid = event.creatorID', 'inner');
        $this->db->where('user.userid', $this->session->userdata('uid'));
        return $this->db->count_all_results();
    }

    public function select_all2($limit, $start, $search="")
    {
        $this->db->from('event');
        $this->db->join('user','user.userid = event.creatorID', 'inner');
        $this->db->where('user.userid', $this->session->userdata('uid'));

        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query->result();
    }

    public function count3($search="")
    {
        $this->db->from('event');
        $this->db->join('attendee', 'attendee.eventID = event.eventID', 'inner');
        $this->db->join('user','user.userid = attendee.userID', 'inner');
        $this->db->where('user.userid', $this->session->userdata('uid'));
        return $this->db->count_all_results();
    }

    public function select_all3($limit, $start, $search="")
    {
        $this->db->from('event');
        $this->db->join('attendee', 'attendee.eventID = event.eventID', 'inner');
        $this->db->join('user','user.userid = attendee.userID', 'inner');
        $this->db->where('user.userid', $this->session->userdata('uid'));

        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query->result();
    }

    public function event_count()
    {
        $this->db->from('event');
        $this->db->select('COUNT(attendee.attendeeID) as count,
        fname, lname, event.eventID, avatar, poster, title, location');
        $this->db->join('user','user.userid = event.creatorID', 'inner');
        $this->db->join('attendee', 'event.eventID = attendee.eventID', 'left');
        
        // $this->db->join('attendee', 'attendee.attendeeID = event.eventID', 'left');
        $this->db->where('event.event_status', 1);
        $this->db->group_by('event.eventID');


        return $this->db->count_all_results();
    }

    public function select_events($limit, $start, $search="")
    {
        $this->db->from('event');
        $this->db->select('COUNT(attendee.attendeeID) as count,
        fname, lname, event.eventID, avatar, poster, title, location');
        $this->db->join('user','user.userid = event.creatorID', 'inner');
        $this->db->join('attendee', 'event.eventID = attendee.eventID', 'left');
        
        // $this->db->join('attendee', 'attendee.attendeeID = event.eventID', 'left');
        $this->db->where('event.event_status', 1);
        $this->db->group_by('event.eventID');
 

        $this->db->limit($limit, $start);
        $query = $this->db->get();
        return $query->result();
    }



    public function this_event($eventID)
    {
        $this->db->from('event');
        $this->db->select('*,event.eventID as eventID, COUNT(attendee.attendeeID) as count');
        $this->db->join('user','user.userid = event.creatorID', 'inner');
        $this->db->join('attendee','attendee.eventID = event.eventID', 'left');

        $this->db->where('event.eventID', $eventID);
        $result = $this->db->get();
        return $result->result();
    }

    public function update($data, $eventID)
    {
        $this->db->update('event', $data, array('eventID' => $eventID));
    }
    
    public function delete($eventID)
    {
        $this->db->delete('event', array('eventID' => $eventID));
    }




}