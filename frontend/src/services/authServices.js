import api from "./config"

const login = async (body) => {
  try {
    const { data } = await api.post('/auth/login', body)
    localStorage.setItem('token', data.token)
    return 200
  } catch (error) {
    console.log(error.message)
  }
}

const logout = () => {
  try {
    localStorage.removeItem('token');
    console.log("Sesión cerrada con éxito");
  } catch (error) {
    console.log(error.message);
  }
}

const signup= async (body) => {
  try {
    const { data } = await api.post('/auth/signup', body)
    localStorage.setItem('token', data.token)
    return 200
  } catch (error) {
    console.log(error.message)
  }
}


export {
  login,
  logout,
  signup
}