import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loginSuccess } from '../login/loginSlice';
import { fetchNewAccessJWT } from '../../api/userApi';
import {getUserProfile} from '../../pages/dashboard/userAction'


export const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch()

  const {isAuth} = useSelector((state) => state.login)
  const {user} = useSelector((state) => state.user)

  useEffect(() => {
    const updateAccessJWT = async() => {
      const result = await fetchNewAccessJWT()
      result && dispatch(loginSuccess());
    }

    !user._id && dispatch(getUserProfile())
    !sessionStorage.getItem('accessJWT') && localStorage.getItem('tmsSite') && updateAccessJWT();
   
    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth, user._id])



  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
