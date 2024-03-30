"use client";

import React from 'react'
import Link from 'next/link'

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
      date: 'Aug 26, 2023'
    },
    {
      title: 'The Inflation Reduction Act',
      subtitle: 'One year later',
      image: '/thumbnail_theinflationreductionact.jpeg',
      date: 'Aug 19, 2023'
    },
    {
      title: 'Option Strategies',
      subtitle: 'Part 5: Butterfly Spreads',
      image: '/thumbnail_opstrat.jpeg',
      date: 'Aug 5, 2023'
    },
    {
      title: 'Option Strategies',
      subtitle: 'Part 4: Straddles and Strangles',
      image: '/thumbnail_opstrat.jpeg',
      date: 'Jul 29, 2023'
    },
    {
      title: 'Option Strategies',
      subtitle: 'Part 3: Bull and Bear Spreads',
      image: '/thumbnail_opstrat.jpeg',
      date: 'Jul 22, 2023'
    },
    {
      title: 'Option Strategies',
      subtitle: 'Part 2: Protective Options',
      image: '/thumbnail_opstrat.jpeg',
      date: 'Jul 15, 2023'
    },
    {
      title: 'Option Strategies',
      subtitle: 'Part 1: Covered Options',
      image: '/thumbnail_opstrat.jpeg',
      date: 'Jul 8, 2023'
    },
  ];

function articlelist() {
  return (
    <div className="pb-10">
      {list.map((article, index) => (
        <Link href={'../comingsoon'}>
          <div className="card card-side py-5 items-center rounded-xl hover:bg-primary hover:bg-opacity-50">
            <img src={article.image} alt="article image" className='place-self-center rounded-xl w-60 h-50 object-cover'/>
            <div className="card-body">
              <h2 className="card-title text-white">{article.title}</h2>
              <p>{article.subtitle}</p>
              <p className='text-xs'>{article.date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default articlelist
