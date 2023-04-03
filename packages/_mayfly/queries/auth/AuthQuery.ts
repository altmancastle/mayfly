import axios from 'axios';
import {AuthModel} from './models/AuthModel';
import {UserModel} from './models/UserModel';
import {useQuery} from 'react-query';

const API_URL = 'api';

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/get-user`;
export const LOGIN_URL = `${API_URL}/auth/login`;
export const REGISTER_URL = `${API_URL}/auth/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`;

// Server should return AuthModel
export const useQueryLogin = (params: Record<'email' | 'password', string>) => {
  return useQuery('login', () =>
    axios.post(LOGIN_URL, params).then((res) => {
      console.log(res, 'res');
      localStorage.setItem('accessToken', res.data.accessToken);
    })
  );
};

// Server should return AuthModel
export const useQueryRegister = (
  params: Record<'email' | 'firstname' | 'lastname' | 'password', string>
) => {
  return useQuery('register', () =>
    axios.post<AuthModel>(REGISTER_URL, params)
  );
};

// Server should return object => { result: boolean } (Is Email in DB)
export const useQueryRequestPassword = (params: Record<'email', string>) => {
  return useQuery('requestPassword', () =>
    axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, params)
  );
};

export const useQueryUserByToken = () => {
  return useQuery('userByToken', () =>
    axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL)
  );
};
