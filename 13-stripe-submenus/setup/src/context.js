import React, { useState, useContext } from 'react'
import sublinks from './data';
import { createContext } from 'react';


const AppContext = createContext();

const AppProvider = ({children}) =>{

    const [isSidebarOpen, setisSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const openSidebar = ()=>{
        setisSidebarOpen(true);
    }
    const closeSidebar = () => {
      setisSidebarOpen(false);
    };
    const openSubmenu = () => {
      setIsSubmenuOpen(true);
    };
    const closeSubmenu = () => {
      setIsSubmenuOpen(false);
    };

    return (
      <AppContext.Provider
        value={{
          sublinks,
          isSidebarOpen,
          isSubmenuOpen,
          openSubmenu,
          closeSubmenu,
          closeSidebar,
          openSidebar,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export { AppContext, AppProvider };

export const useGlobalContext = () =>{
    return useContext(AppContext);
}
