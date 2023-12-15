import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getCurrentUser } from '../../store/usersSlice';
import User from '../User/User';

export default function AllUsers() {

  const {allUsers, status} = useSelector((state) => state.users);
  const isLoading = status == 'loading'
  const isLoaded = status == 'loaded'

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
  <>
  {isLoading && <p>isLoading...</p>}
  {isLoaded && allUsers.map(user => <div key={user.id}><User  data={user}></User><br></br></div>) }
  </>
    
  )
}