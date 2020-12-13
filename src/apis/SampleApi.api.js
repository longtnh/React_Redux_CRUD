import Axios from "axios";

export const getUserListApi = () => {
  return new Promise((resolve, reject) => {
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => reject(new Error(err)));
  });
};