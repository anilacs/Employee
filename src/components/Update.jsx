import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/UserSlice';

const Update = () => {
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const existingUserArray = users.filter(singleItem => singleItem.id == id);

  const {name, email} = existingUserArray[0];

  const [UserName, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id:id,
      UserName: uname,
      email: uemail,
      
     
    })) 
    navigate('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
            <h3>Update Employee</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor="name">UserName:</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter name' value={uname} onChange={(e) => setName(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter email' value={uemail} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                   
               
                <br />
                <button className='btn btn-info'>Update</button>
            </form>

        </div>

    </div>
  )
}

export default Update;