"use client";

import React from 'react'

interface Article { 
  title: string;
  subtitle: string;
  image: string;
  date: string;
}

const list: Article[] = [
    {
      title: 'Evergrande\'s Real Estate Crisis',
      subtitle: 'The perils of overleverage',
      image: '/Evergrande\'sRealEstateCrisis.jpeg',
      date: 'AUG 26, 2023'
    },
    {
      title: 'Evergrande\'s Real Estate Crisis',
      subtitle: 'The perils of overleverage',
      image: '/Evergrande\'sRealEstateCrisis.jpeg',
      date: 'AUG 26, 2023'
    },
    {
      title: 'Evergrande\'s Real Estate Crisis',
      subtitle: 'The perils of overleverage',
      image: '/Evergrande\'sRealEstateCrisis.jpeg',
      date: 'AUG 26, 2023'
    },
  ];

function articlelist() {
  return (
    <div className="pb-10">
      {list.map((article, index) => (
        <div className="card card-side bg-base-100 shadow-xl py-5 items-center">
          <figure><img src={article.image} alt="article image" className='rounded-xl'/></figure>
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p>{article.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default articlelist
