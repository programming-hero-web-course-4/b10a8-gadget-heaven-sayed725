import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import Categories from '../components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div className='bg-slate-100'>
           <Banner></Banner>
           <Heading></Heading>
          <div className="grid grid-cols-4 items-start w-11/12 mx-auto gap-6 pb-[100px]">
          <Categories categories={categories}></Categories>
          <Outlet></Outlet>
          </div>
           
        </div>
    );
};

export default Home;