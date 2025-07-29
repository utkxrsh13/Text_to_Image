import { createContext, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import PropTypes from 'prop-types';

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const loadCreditsData = useCallback(async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/users/credits`, { headers: { token } })

      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }, [backendUrl, token]);

  // const generateIm age = async (prompt) => {
  //   try {
  //     const {data} = await axios.post(backendUrl + '/api/image/generate-image', {prompt}, {headers:{token}})

  //     if(data.success){
  //       loadCreditsData();
  //       return data.resultImage;
  //     }else{
  //       toast.error(data.message);
  //       loadCreditsData()
  //       if(data.creditBalance <= 0){
  //         toast.info("Insufficient credits. Redirecting to buy page...");
  //         navigate('/buy')
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     toast.error(error.message);
  //   }
  // }
  const generateImage = async (prompt,style) => {
    try {
      if (style) {
        prompt = `${prompt} in ${style} style`;  // Append style to prompt
      }
      const { data } = await axios.post(
        `${backendUrl}/api/image/generate-image`,
        { prompt,style },
        { headers: { token } }
      );
  
      if (data.success) {
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.error(data.message || "An error occurred");
        loadCreditsData();
  
        if (data.creditBalance <= 0) {
          navigate('/buy'); // Ensure the navigate logic is placed inside async/await properly
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "An unexpected error occurred");
    }
  };

  const getUserHistory = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/users/history`, { 
        headers: { token } 
      });
      
      if (data.success) {
        return data.history;
      } else {
        toast.error(data.message);
        return [];
      }
    } catch (error) {
      console.error('History fetch error:', error);
      toast.error(error.response?.data?.message || 'Failed to fetch history');
      return [];
    }
  };


  const logout = () => {
    localStorage.removeItem('token')
    setToken('')
    setUser(null)
  }

  useEffect(() => {
    if (token) {
      loadCreditsData()
    }
  }, [token, loadCreditsData])


  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
    getUserHistory,
  }


  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider
// export default AppContextProvider