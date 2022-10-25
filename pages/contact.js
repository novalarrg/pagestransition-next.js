import { motion as m } from 'framer-motion'
import { container } from '../animation'
import { item } from '../animation'

const Contact = () => {
  return (
    <m.main
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
      className='text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 lg-16'>
      <div className='my-96 p-1 overflow-hidden'>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: '100%' }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='text-6xl text-center lg:text-right lg:text-9xl'>Let`s Talk</m.h1>
      </div>
      <div className='flex gap-40 '>
        <div className='lg:text-2xl text-base'>
          <h4>Find me:</h4>
        </div>
        <div className='lg:text-6xl text-2xl underm.line'>
          <ul variants={container} initial='hidden' animate='show'>
            <div className='overflow-hidden'>
              <m.li variants={item} className='pb-2'>Instargram</m.li>
            </div>
            <div className='overflow-hidden'>
              <m.li variants={item} className='pb-2'>Github</m.li>
            </div>
            <div className='overflow-hidden'>
              <m.li variants={item} className='pb-2'>LinkIn</m.li>
            </div>
          </ul>
        </div>
      </div>
    </m.main>
  )
}

export default Contact