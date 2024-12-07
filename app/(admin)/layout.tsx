import React from 'react';

import Header from '@/components/admin/Header';
import Sidebar from '@/components/admin/Sidebar';

import "../styles/globals.css";
import "../styles/theme.css";

interface AdminLayoutProps {
   children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
   return (
      <div className='flex flex-col flex-1'>
         {/* Header */}
         <Header className="bg-white shadow-sm text-gray-700 flex justify-between p-5" />
         
         <div className="flex flex-col flex-1 lg:flex-row bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            <div className="flex flex-1 justify-center lg:justify-start items-start max-w-5xl mx-auto w-full min-h-screen">
               {children}
            </div>
         </div>
      </div>
   );
};

export default AdminLayout;
