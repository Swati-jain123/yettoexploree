import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageContent = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-10">Manage Content</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div 
          className="bg-blue-500 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-blue-600"
          onClick={() => handleNavigation('/page1')}
        >
          <h2 className="text-xl font-semibold">Page 1</h2>
          <p>Click to manage Page 1 content.</p>
        </div>
        
        {/* Card 2 */}
        <div 
          className="bg-green-500 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-green-600"
          onClick={() => handleNavigation('/page2')}
        >
          <h2 className="text-xl font-semibold">Page 2</h2>
          <p>Click to manage Page 2 content.</p>
        </div>

        {/* Card 3 */}
        <div 
          className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg cursor-pointer hover:bg-yellow-600"
          onClick={() => handleNavigation('/page3')}
        >
          <h2 className="text-xl font-semibold">Page 3</h2>
          <p>Click to manage Page 3 content.</p>
        </div>
      </div>
    </div>
  );
};

export default ManageContent;
