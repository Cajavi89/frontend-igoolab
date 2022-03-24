const getAllUsers = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const baseURL = process.env.REACT_APP_API_URL;

  return fetch(`${baseURL}/users`, payload);
};

const getUserPicture = () =>{
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const baseURL = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*100)}`;
  return fetch(`${baseURL}`, payload);
}


export {
  getAllUsers,
  getUserPicture
}
