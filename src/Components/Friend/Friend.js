
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {name,username,email,id}=friend;
    const navigate = useNavigate();
    const showFriendDetails= () =>{
        navigate(`/friend/${id}`)
    }
    
    return (
        <div className='friend-container'>
            <p>Name:{name}</p>
            <p>User Name:{username} </p>
            <p>Email:{email}</p>
            <Button onClick={showFriendDetails} className='mt-3 w-50' variant="outline-secondary">More Details</Button>
            

        </div>
    );
};

export default Friend;