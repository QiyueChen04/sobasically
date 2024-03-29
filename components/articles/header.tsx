import React from 'react'
import Logo from '../../components/logo'
import Divider from '../../components/divider'

function header({
    title,
    subtitle,
    date,
}: {
    title: string;
    subtitle: string;
    date: string;
}) {
  return (
    <div>
      <div className='text-white text-4xl font-bold pb-2'>
        {title}
      </div>

      <div className='text-xl'>
        {subtitle}
      </div>

      <div className='grid grid-cols-3 w-1/5 pt-2'>

        <div className='col-span-1 w-10'>
          <Logo/>
        </div>

        <div className='col-span-2'>
          <div className='text-white text-sm font-light'>
            SoBasically
          </div>

          <div className='text-sm font-light'>
            {date}
          </div>
        </div>

      </div>

      <div className='pt-6'>
        <Divider/>
      </div>
    </div>
  )
}

export default header
