import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/hooks/useAuth';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - ALTAQA</title>
      </Helmet>

      <div className="min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
              <button
                className="md:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-2">
              <Link
                to="/admin/dashboard"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <i className="fas fa-home w-5"></i>
                <span className="ml-3">Dashboard</span>
              </Link>
              <Link
                to="/admin/posts"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <i className="fas fa-newspaper w-5"></i>
                <span className="ml-3">Posts</span>
              </Link>
              <Link
                to="/admin/categories"
                className="flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <i className="fas fa-folder w-5"></i>
                <span className="ml-3">Categories</span>
              </Link>
            </nav>

            <div className="p-4 border-t">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                    {user?.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
              </div>
              <button
                onClick={logout}
                className="w-full flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <i className="fas fa-sign-out-alt w-5"></i>
                <span className="ml-3">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="md:pl-64">
          <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between px-4 py-3">
              <button
                className="md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <i className="fas fa-bars"></i>
              </button>
              <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
            </div>
          </header>

          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard; 