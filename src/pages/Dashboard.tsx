
import React from "react";
import Navbar from "../components/layout/Navbar";
import DashboardPage from "../components/dashboard/DashboardPage";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <DashboardPage />
    </div>
  );
};

export default Dashboard;
