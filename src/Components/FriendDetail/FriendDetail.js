import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import './FriendDetail.css'

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState([]);
    const url = (`https://jsonplaceholder.typicode.com/users/${friendId}`);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])
    const navigate=useNavigate()
    const back=()=>{
        navigate(`/friends`);
    }
    const { id, name, username, email } = friend;


    return (
        <div className='friend-detail'>
            <h3>Details</h3><hr />
            <table className='table-bordered w-100'>
                <tr>
                    <th>Friend ID</th>
                    <td>{id}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>User-Name</th>
                    <td>{username}</td>
                </tr>
                <tr>
                    <th>User-Email</th>
                    <td>{email}</td>
                </tr>
            </table>
            <Button onClick={back} className='mt-3 w-25' variant="outline-secondary" >Back</Button>
        </div>
    );
};

export default FriendDetail;