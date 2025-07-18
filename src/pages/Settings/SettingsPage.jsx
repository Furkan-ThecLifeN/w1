import React, { useState, useEffect } from "react";
import SettingsScreen from "../../components/Settings/SettingsScreen/SettingsScreen";
import styles from "./SettingsPage.module.css";
import Sidebar from "../../components/LeftSideBar/Sidebar";
import MobileSettings from "../../components/Settings/MobileSettings/MobileSettings";
import BottomNav from "../../components/BottomNav/BottomNav";


const SettingsPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.settingsWrapper}>
      {isMobile ? (
        <>
        <MobileSettings />
         <BottomNav /></>
      ) : (
        <>
          <Sidebar />
          <SettingsScreen />
          <BottomNav />
        </>
      )}
    </div>
  );
};

export default SettingsPage;
