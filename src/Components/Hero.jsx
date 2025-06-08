import React from 'react'

const Hero = () => {
  return (
    <div>
        <section className="relative bg-[url('/gpss-bg.jpg')] bg-cover bg-center text-white h-[85vh] flex items-center justify-center opacity-50">
        <div className='h-full w-full bg-black opacity-50'>

            
                <p className="text-4xl lg:text-6xl font-bold text-center mb-4 text-primary">
                    Welcome to Ghodaghodi Public Secondary School  
                </p>

            
        </div>
        {/* <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-2">Welcome to Shree XYZ Secondary School</h2>
          <p className="text-lg">Dedicated to Quality Education in Nepal</p>
          <button className="mt-4 px-4 py-2 bg-accent text-black rounded hover:bg-accentDark">Learn More</button>
        </div> */}
      </section>
    </div>
  )
}

export default Hero