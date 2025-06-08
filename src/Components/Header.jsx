import React from 'react'

const Header = () => {
  return (
    <div>
         <header className="flex items-center justify-between px-4 py-2 bg-primary text-onPrimary shadow">
        <div className="flex items-center gap-4">
          <img src="/GPSS.png" alt="School Logo" className="lg:h-20 lg:w-20 h-16 w-16 rounded-full invert" />
          <div>
            <h1 className="lg:text-2xl sm:xl font-bold font-school">Ghodaghodi Public Secondary School</h1>
            {/* <h1 className="text-2xl font-bold font-school">घाेडाघाेडी सामुदायक माध्यामिक विधालय</h1> */}
            <p className="text-sm text-onPrimary/80 font-school font-500]">Sukhad Kailali</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-accent">Home</a>
          <a href="#" className="hover:text-accent">About</a>
          <a href="#" className="hover:text-accent">Notices</a>
          <a href="#" className="hover:text-accent">Academics</a>
          <a href="#" className="hover:text-accent">Gallery</a>
          <a href="#" className="hover:text-accent">Contact</a>
        </nav>
      </header>
    </div>
  )
}

export default Header