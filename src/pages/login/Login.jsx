import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
import { Button, Input, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { setIsAuth } from '../../utils/helpers/isAuthSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import PublicLayout from '../../layouts/publicLayout/PublicLayout';
import { useLoginController } from './useLoginController';
import s from './Login.module.css';

import { EyeVisibility } from '../../shared';
import { useEyeVisibilityController } from '../../shared/components/EyeVisibility/useEyeVisibilityController';
import ButtonAppBarPublic from '../../pageComponents/ButtonAppBarPublic';
const Login = () => {
  const {
    loginForm,
    // passwordShown,
    // togglePasswordShown,
    loginUser
  } = useLoginController()

  const {
    passwordShown,
    // togglePasswordShown
  } = useEyeVisibilityController();

  const { register, handleSubmit, watch, formState: { errors, isDirty, isValid } } = loginForm

  return (
    <PublicLayout buttonAppBar={<ButtonAppBarPublic />}>
      <label> Please, fill in the form for login </label>

      <form onSubmit={handleSubmit(loginUser)}>
        <Input
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          placeholder="E-mail"
        />
        {errors.email && <span>Pleace check the valid Email</span>}

        <Input
          {...register('password', {
            required: true,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
          })}
          placeholder="Password"
          type={passwordShown ? 'text' : 'password'}
          endAdornment={
            // <InputAdornment position="end" onClick={togglePasswordShown}>
            //   {!passwordShown ? (
            //     <VisibilityIcon className={s.eye_icon} />
            //   ) : (
            //     <VisibilityOffIcon className={s.eye_icon} />
            //   )}
            // </InputAdornment>
            <EyeVisibility />
          }
        />
        {errors.password && <span>Pleace check the valid password</span>}

        <Button type="submit" disabled={!isDirty || !isValid}>
          Login
        </Button>
      </form>

      <Link className={s.registration_link} to={'/registration'}>
        REGISTRATION
      </Link>
    </PublicLayout>
  );
};


export default Login;
