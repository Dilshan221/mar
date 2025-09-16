// src/pages/admin/AdminDashboard.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import EmployeeCards from "./components/EmployeeCards";
import AttendanceList from "./components/AttendanceList";
import UserManagement from "./components/UserManagement";


const AdminDashboard = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return (
          <>
            <Stats />
            <EmployeeCards />
            <AttendanceList />
          </>
        );
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
    <div className="container">
      <Sidebar
        isActive={sidebarActive}
        toggleSidebar={toggleSidebar}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      <section className={`main ${sidebarActive ? "active" : ""}`}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="content">{renderContent()}</div>
      </section>
    </div>
  );
};

export default AdminDashboard;
