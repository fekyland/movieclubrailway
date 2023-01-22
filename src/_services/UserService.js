import axios from 'axios'
import { environment } from '../_environmets/environment'

const UserService = {}

UserService.getAllUsers = async (token) => {
  const apiUrl = environment.BASE_API_URL + '/users'

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  return await axios.get(apiUrl, config)
}
UserService.getById = async (token) => {
  const apiUrl = environment.BASE_API_URL + '/id'

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

  return await axios.get(apiUrl, config)
}
UserService.rentMovie = async (userId, movieId) => {
  try {
    const apiURL = `${environment.BASE_API_URL}/users/${userId}/rent/${movieId}`;
    const res = await axios.patch(apiURL);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
UserService.deleteMovie = async (userId, movieId) => {
  try {
    const apiURL = `${environment.BASE_URL}/users/${userId}/delete/${movieId}`;
    const res = await axios.patch(apiURL);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
UserService.deleteUser = async (user) => {
  try{
     const apiUrl = `${environment.BASE_API_URL}/users/delete/${user._id}`;
     const res = await axios.delete(apiUrl);

     return res.data;

  }catch (error){
     console.log(error);

  }
};

export default UserService
