import React from 'react';
import TopNavbar from './TopNavbar';
import DisplayCards from './DisplayCards';
import ThirdSection from './ThirdSection';
import Product from './Product';

const Dashboard = () => {
  return (
    <main className="md:h-screen h-full py-2 bg-gray-100 lg:pl-72">
    <div className="px-4 sm:px-6 lg:px-8 bg-gray-100">
      <TopNavbar />
      <DisplayCards/>
      <ThirdSection/>
      <Product/>
    </div>
  </main>
  );
};

export default Dashboard;
