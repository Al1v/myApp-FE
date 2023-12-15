import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/usersSlice';
import User from '../User/User';

export default function CurrentUser() {

  const {currentUser, status} = useSelector((state) => state.users);
  const isLoading = status == 'loading'
  const isLoaded = status == 'loaded'

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
  <>
  {isLoading && <p>isLoading...</p>}
  {isLoaded && <User data={currentUser}></User>}
  </>
    
  )
}
