// BottomNavbar.jsx
import React from "react";
import "./BottomNavbar.css"; // Import file CSS untuk styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog } from "@fortawesome/free-solid-svg-icons"; // Contoh ikon dari Font Awesome
import notificationIcon from "./notification-icon.png"; // Import gambar logo notifikasi

const BottomNavbar = () => {
  return (
    <nav className="bottom-navbar">
      <div className="nav-item">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faUser} />
        <span>Profile</span>
      </div>
      <div className="nav-item">
        <img
          src={notificationIcon}
          alt="Notification"
          className="notification-icon"
        />
        <span>Notifications</span>
      </div>
      <div className="nav-item">
        <FontAwesomeIcon icon={faCog} />
        <span>Settings</span>
      </div>
    </nav>
  );
};

export default BottomNavbar;
