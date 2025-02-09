import { createContext, useState, useContext } from "react";

const AppContent = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSideOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => {
    setIsSideOpen(true);
  };

  const closeSidebar = () => {
    setIsSideOpen(false);
  };

  return (
    <AppContent.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContent.Provider>
  );
};

// Create a hook
export const useGlobalContext = () => {
  return useContext(AppContent);
};
