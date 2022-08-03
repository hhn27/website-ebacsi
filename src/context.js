import React, { useState, useContext, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import ServicePack from './components/ServicePack';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isFormDisplay, setIsFormDisplay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loading = () => {
    // useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    },1000)
    // }, []);
  }

  const openForm = () => {
    setIsFormDisplay(true);
  };
  const closeForm = () => {
    setIsFormDisplay(false);
  };
  


  return (
    <AppContext.Provider
      value={{
        isFormDisplay,
        openForm,
        closeForm,
        isLoading,
        loading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
