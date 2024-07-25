import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { loginSuccess } from '../login/loginSlice';
import { fetchNewAccessJWT } from '../../api/userApi';



export const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch()

  const {isAuth} = useSelector((state) => state.login)

  useEffect(() => {
    const updateAccessJWT = async() => {
      const result = await fetchNewAccessJWT()
      result && dispatch(loginSuccess());
    }
    !sessionStorage.getItem('accessJWT') && localStorage.getItem('tmsSite') && updateAccessJWT();
   
    !isAuth && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
  }, [dispatch, isAuth])



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
