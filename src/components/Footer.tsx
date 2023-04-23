import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { Button, IconButton } from '@mui/material'

const FooterLinks = [
  {
    name: 'Quick Links',
    subLinks: [
      { name: 'Home', route: '/' },
      { name: 'Categories', route: 'events' },
      { name: 'About Us', route: '' },
      { name: 'Contact Us', route: '/contact' },
    ],
  },
  {
    name: 'Contact Us',
    component: (
      <div className="ml-2 space-y-2">
        <div className="flex flex-col">
          <Button
            variant="text"
            startIcon={<HiMail />}
            className="w-fit rounded-full text-left lowercase text-black transition duration-150 hover:scale-110"
          >
            support@thelocalplacard.com
          </Button>
          <div className='flex flex-col my-2 pl-1'>
          <div className='flex'>
          {/* {soicalMedia.map((social, i) => {
            return (
              <motion.a 
                whileHover={{ scale: 1.1, backgroundColor: social.color, borderRadius: '50%' }}
                href={social.link} 
                key={i++}
                className="rounded-full"
                >
                <IconButton color="default">{social.icon}</IconButton>
              </motion.a>
            )
          })} */}
          </div>
          </div>
          {/* <Button
            variant=""
            startIcon={<HiPhone/>}
            className="text-white w-fit text-left rounded-full hover:scale-110 transition duration-150"
            >
                (+971) 564225443
            </Button> */}
        </div>
      </div>
    ),
  },
]

const Footer: React.FC = () => {
  return (
    <div className="relative flex w-screen justify-around bg-[#F7F7F7] pb-16 pt-8 ">
      <footer className="flex flex-col items-start lg:items-center justify-between pb-8 md:flex-row">
        <div className="mr-8 flex space-x-8 md:flex-col md:space-y-2">
          <div className="flex h-full flex-1 flex-col items-center justify-center scale-[.7] lg:scale-100">
            <h1 className='leading-8 tracking-tight select-none'>THE<br></br>LOCAL <br></br>PLACARD</h1>
          </div>
        </div>
        <div className="flex w-full flex-col space-y-4 md:mt-0 md:flex-row md:justify-start md:space-y-0">
          {FooterLinks.map((link, i) => {
            return (
              <div className="ml-6 md:mr-12" key={i++}>
                <h2 className="ml-2 mb-2 text-lg font-black uppercase">
                  {link.name}
                </h2>
                <div className="flex flex-col">
                  {link?.subLinks?.map((subLink, i) => {
                    return (
                      <Button
                        variant='text'
                        key={i++}
                        className="w-fit rounded-full text-left capitalize text-black transition duration-150 hover:scale-110"
                      >
                        {subLink.name}
                      </Button>
                    )
                  })}
                  {link?.component}
                </div>
              </div>
            )
          })}
        </div>
        <div className="absolute bottom-0 left-0 h-12 w-full bg-black py-3 text-center text-white">
          ©2023 | The Local Placard | All rights reserved.
        </div>
      </footer>
    </div>
  )
};

export default Footer;
