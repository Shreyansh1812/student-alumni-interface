
import React from "react";
import { BarChart, LineChart, PieChart, Area, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Pie } from "recharts";
import { Calendar, Users, Briefcase, MessageSquare, Award, Bell, ChevronRight } from "lucide-react";

// Sample data for charts
const activityData = [
  { name: "Jan", students: 400, alumni: 240 },
  { name: "Feb", students: 300, alumni: 139 },
  { name: "Mar", students: 200, alumni: 980 },
  { name: "Apr", students: 278, alumni: 390 },
  { name: "May", students: 189, alumni: 480 },
  { name: "Jun", students: 239, alumni: 380 },
  { name: "Jul", students: 349, alumni: 430 },
];

const jobsData = [
  { name: "Tech", value: 400 },
  { name: "Finance", value: 300 },
  { name: "Marketing", value: 300 },
  { name: "Education", value: 200 },
  { name: "Others", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const notifications = [
  {
    id: 1,
    title: "New mentorship request",
    description: "Sarah Johnson has requested mentorship",
    time: "5 minutes ago",
    icon: Award,
  },
  {
    id: 2,
    title: "New message",
    description: "You have a new message from Alex Smith",
    time: "1 hour ago",
    icon: MessageSquare,
  },
  {
    id: 3,
    title: "Job application update",
    description: "Your application status has been updated",
    time: "3 hours ago",
    icon: Briefcase,
  },
];

const DashboardPage = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container-custom">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
        </header>

        {/* Stats overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-card rounded-xl p-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-lg">Total Connections</h3>
              <Users className="h-6 w-6 text-primary" />
            </div>
            <p className="text-3xl font-bold">248</p>
            <p className="text-sm text-green-600 dark:text-green-400 flex items-center mt-1">
              +12% from last month
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 animate-fade-in animate-delay-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-lg">Job Applications</h3>
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <p className="text-3xl font-bold">16</p>
            <p className="text-sm text-green-600 dark:text-green-400 flex items-center mt-1">
              4 awaiting response
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 animate-fade-in animate-delay-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-lg">Messages</h3>
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <p className="text-3xl font-bold">32</p>
            <p className="text-sm text-amber-600 dark:text-amber-400 flex items-center mt-1">
              8 unread
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 animate-fade-in animate-delay-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-lg">Upcoming Sessions</h3>
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-muted-foreground flex items-center mt-1">
              Next: Tomorrow, 4:00 PM
            </p>
          </div>
        </div>

        {/* Main dashboard content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity charts */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card rounded-xl p-6 animate-fade-in">
              <h3 className="font-medium text-lg mb-6">Platform Activity</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={activityData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis dataKey="name" tick={{ fill: "currentColor", fontSize: 12 }} />
                    <YAxis tick={{ fill: "currentColor", fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.8)", 
                        borderColor: "rgba(0, 0, 0, 0.1)",
                        borderRadius: 8,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" 
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="students" name="Students" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="alumni" name="Alumni" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 animate-fade-in animate-delay-100">
              <h3 className="font-medium text-lg mb-6">Mentorship Growth</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={activityData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis dataKey="name" tick={{ fill: "currentColor", fontSize: 12 }} />
                    <YAxis tick={{ fill: "currentColor", fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.8)", 
                        borderColor: "rgba(0, 0, 0, 0.1)",
                        borderRadius: 8,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" 
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="students" name="Mentees" stroke="#3B82F6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="alumni" name="Mentors" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-8">
            <div className="glass-card rounded-xl p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium text-lg">Job Postings by Industry</h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={jobsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {jobsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.8)", 
                        borderColor: "rgba(0, 0, 0, 0.1)",
                        borderRadius: 8,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" 
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 animate-fade-in animate-delay-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium text-lg">Recent Notifications</h3>
                <Bell className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg transition-colors">
                    <div className="bg-primary/10 text-primary p-2 rounded-full">
                      <notification.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-sm text-primary font-medium flex items-center justify-center">
                View all notifications
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
