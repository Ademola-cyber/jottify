import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Authprovider from '../component/Authprovider'
import { Toaster } from '@/components/ui/toaster'

const layout = ( { children } ) => {
  return (
    <main>
        <Authprovider>
           <Navbar/>
            {children}
            <Footer/>
            <Toaster/>
        </Authprovider>
    </main>
  )
}

export default layout