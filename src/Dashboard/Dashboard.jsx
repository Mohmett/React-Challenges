import React, {useState} from "react";

const Dashboard = () => {

   const [activeTab, setActiveTab] = useState('overview');
  
  const courses = [
    { id: 1, name: 'React Fundamentals', progress: 75, instructor: 'Sarah Wilson', nextLesson: 'Components & Props', color: 'blue' },
    { id: 2, name: 'JavaScript Advanced', progress: 45, instructor: 'Mike Johnson', nextLesson: 'Async/Await', color: 'purple' },
    { id: 3, name: 'UI/UX Design', progress: 90, instructor: 'Emily Chen', nextLesson: 'Color Theory', color: 'pink' },
  ];

  const assignments = [
    { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'pending' },
    { id: 2, title: 'API Integration', course: 'JavaScript Advanced', dueDate: '2024-03-18', status: 'completed' },
    { id: 3, title: 'Design System', course: 'UI/UX Design', dueDate: '2024-03-25', status: 'in-progress' },
  ];

  const announcements = [
    { id: 1, title: 'New Course Available', message: 'Check out our new TypeScript course!', time: '2 hours ago' },
    { id: 2, title: 'Maintenance Notice', message: 'Platform updates scheduled for tonight', time: '5 hours ago' },
  ];

  const stats = [
    { label: 'Average Grade', value: '88%', icon: '📊' },
    { label: 'Courses', value: '3', icon: '📚' },
    { label: 'Study Hours', value: '45h', icon: '⏰' },
    { label: 'Assignments', value: '12', icon: '✍️' },
  ];

  return (
    // Container
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/*  Main Body */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className=" bg-white rounded-lg shadow-md p-6 mb-6 flex justify-between items-center">
          <div className="">
            <h1 className=" text-xl font-bold text-gray-800 md:text-2xl">
              Welcome Back, Student
            </h1>
            <p className="text-sm text-gray-600 md:text-lg ">
              Here's what's happening with your projects today.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span>🔔</span>
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              S
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 justify-between">
          {
            stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
            <h1 className="text-2xl">{stat.icon}</h1>
            <div>
              <h3 className="text-gray-800 text-lg">{stat.label}</h3>
              <h1 className="text-xl font-bold">{stat.value}</h1>
            </div>
          </div>
            )) 
          }


        </div>

        {/* Courses and Assignments and Announcement  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Courses */}
          <div className="md:col-span-2 grid-rows-1 md:grid-rows-2">
          <div className="bg-white md:row-span-1 p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4">Courses Progress</h1>
            <div className="flex flex-col gap-4 mt-4">
              {
                courses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-lg font-semibold">{course.name}</h2>
                      <span className={`text-sm rounded-full py-1 px-2 text-white ${course.color === 'blue' ? 'bg-blue-500' : course.color === 'purple' ? 'bg-purple-500' : 'bg-pink-500'}`}>
                        {course.color.charAt(0).toUpperCase() + course.color.slice(1)}
                      </span>
                    </div>

                    <div className="w-full bg-gray-300 rounded-full h-2 mb-2 flex items-center">
                      {/* <div className="bg-green-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div> */}
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>Instructor: {course.instructor}</span>
                      <span>Next: {course.nextLesson}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          </div>

          {/* Assignments and Announcement */}
          <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
            {/* 1- Assignments */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4">Upcoming Assignments</h1>
            <div className="space-y-4">
              {
                assignments.map((assignment) => (
                  <div key={assignment.id} className="border-b border-gray-200 pb-4">
                    <h2 className="text-lg font-semibold">{assignment.title}</h2>
                    <p className="text-sm text-gray-600">{assignment.course}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">Due: {assignment.dueDate}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${assignment.status === 'completed' ? 'bg-green-100 text-green-800' : assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                        {assignment.status}
                      </span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          {/* 2- Announcements */}
          <div>
            <div className="bg-white p-4 rounded-lg shadow-md"> 
              <h1 className="text-xl font-bold mb-4">Announcements</h1>
              <div className="space-y-4">
                {
                  announcements.map((announcement) => (
                    <div key={announcement.id} className="border-b border-gray-200 pb-4">
                      <h2 className="text-lg font-semibold">{announcement.title}</h2>
                      <p className="text-sm text-gray-600">{announcement.message}</p>
                      <span className="text-xs text-gray-500">{announcement.time}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
