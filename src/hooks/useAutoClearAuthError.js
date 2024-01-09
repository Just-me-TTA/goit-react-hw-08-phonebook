import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError } from '../redux/auth/selectors';
import { useEffect } from 'react';
import { clearAuthError } from '../redux/auth/authSlice';

export const useAutoClearAuthError = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearAuthError());
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [error, dispatch]);

  return error;
};
