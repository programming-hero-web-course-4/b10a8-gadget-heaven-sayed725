import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import Categories from '../components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
           <Banner></Banner>
           <Heading></Heading>
          <div className="grid grid-cols-4 items-start bg-slate-500 w-10/12 mx-auto gap-6">
          <Categories categories={categories}></Categories>
          <Outlet></Outlet>
          </div>
           
        </div>
    );
};

export default Home;