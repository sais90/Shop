import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import { Button, FormHelperText, Input, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { setIsAuth } from '../../utils/helpers/isAuthSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import PublicLayout from '../../layouts/publicLayout/PublicLayout';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FilledInput from '@mui/material/FilledInput';
import ButtonAppBarPublic from '../../pageComponents/ButtonAppBarPublic';

const Registration = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordShown(s => !s);
  }, []);

  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);
  const toggleRepeatPasswordVisibility = useCallback(() => {
    setRepeatPasswordShown(s => !s);
  }, []);

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const { password, passwordRepeat } = watch();

  const addUser = async user => {
    try {
      const requestData = {
        name: user.userName,
        email: user.email,
        password: user.password,
        password_repeat: user.passwordRepeat,
      };
      const response = await axios.post('https://api.storerestapi.com/auth/register', requestData);
      const access_token = response.data.data.access_token;
      localStorage.setItem('access_token', access_token);
      dispatch(setIsAuth(true));
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <PublicLayout buttonAppBar={<ButtonAppBarPublic />}>
      <span> Please, fill in the form for registration </span>

      <Box
        onSubmit={handleSubmit(addUser)}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          label="Username"
          {...register('userName', {
            required: true,
          })}
          placeholder="Username"
        />
        {errors.userName && <span>Pleace check your name</span>}

        <TextField
          required
          label="E-mail"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

              message: 'Pleace check the valid Email',
            },
          })}
          placeholder="E-mail"
        />

        {
          <FormHelperText error hidden={!errors.email}>
            {errors.email?.message}
          </FormHelperText>
        }

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            required
            label="Password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                message: 'Pleace check the valid password',
              },
            })}
            type={passwordShown ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {passwordShown ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {
          <FormHelperText error hidden={!errors.password}>
            {errors.password?.message}
          </FormHelperText>
        }

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Repeat Password</InputLabel>
          <OutlinedInput
            required
            label="Repeat Password"
            placeholder="Repeat Password"
            {...register('passwordRepeat', {
              required: 'Password is required',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                message: 'Pleace check the valid password',
              },
            })}
            type={repeatPasswordShown ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleRepeatPasswordVisibility}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {repeatPasswordShown ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        {
          <FormHelperText error hidden={!errors.passwordRepeat}>
            {errors.passwordRepeat?.message}
          </FormHelperText>
        }

        <Button type="submit" disabled={!isDirty || !isValid || !(password === passwordRepeat)}>
          Registration
        </Button>
      </Box>
    </PublicLayout>
  );
};

export default Registration;
