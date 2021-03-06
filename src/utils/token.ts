import {TOKEN} from './constants';

export const setToken = (token: string) => localStorage.setItem(TOKEN, token);

export const getToken = () => localStorage.getItem(TOKEN);
