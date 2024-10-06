import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setIsAuth } from '../../utils/helpers/isAuthSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';

export const useLoginController = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [passwordShown, setPasswordShown] = useState(false);
    // const togglePasswordVisibility = () => {
    //   setPasswordShown(passwordShown ? false : true);
    // };

    // const togglePasswordShown = useCallback(() => {
    //     setPasswordShown(s => !s);
    // }, [])

    // const { register, handleSubmit, watch, formState: { errors, isDirty, isValid }, } = useForm({ mode: 'onChange' });
    const { watch } = useForm({ mode: 'onChange' });
    const loginForm = useForm({ mode: 'onChange' });

    // const email = watch('email');
    // const password = watch('password');

    const { email, password } = watch()

    const loginUser = useCallback(async () => {
        const user = { email, password };

        try {
            const response = await axios.post('https://api.storerestapi.com/auth/login', user);
            const access_token = response.data.data.access_token;
            localStorage.setItem('access_token', access_token);
            dispatch(setIsAuth(true));
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
    }, [email, password]);

    // const onSubmit = () => loginUser();

    return {
        loginForm,
        // passwordShown,
        // togglePasswordShown,
        loginUser
    }
}