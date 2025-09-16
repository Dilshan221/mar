// src/components/financial-management/Dashboard.js
import React, { useState } from "react";
import "./style1.css"; // dashboard-specific styles

import Sidebar from "./Sidebar";
import Header from "./Header";
import Stats from "./Stats";
import EmployeeCards from "./EmployeeCards";
import AttendanceList from "./AttendanceList";
import UserManagement from "./UserManagement";

function Dashboard() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");

  const toggleSidebar = () => setSidebarActive(!sidebarActive);

  const renderContent = () => {
    switch (activeView) {
      case "users":
        return <UserManagement />;
      case "attendance":
        return <AttendanceList />;
      default:
        return (
          <>
            <Stats />
            <EmployeeCards />
            <AttendanceList />
          </>
        );
    }
  };

  return (
    <div className="admin-container">
      <Sidebar
        isActive={sidebarActive}
        toggleSidebar={toggleSidebar}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      <section className={`admin-main ${sidebarActive ? "active" : ""}`}>
        <Header />
        <div className="admin-content">{renderContent()}</div>
      </section>
    </div>
  );
}

export default Dashboard;
