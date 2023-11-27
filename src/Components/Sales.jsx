import React from 'react'

function Sales() {
  return (
    <>
    
    <div className='z-0 md:relative container md:w-[70%] w-full md:mx-auto rounded-2xl mt-14 md:bg-[#E8F9FD] py-8 md:py-0 flex items-center md:justify-normal flex-col md:flex-row'>
        
        <section className='basis-[40%] md:p-10 mb-10 md:mb-0'>
            <h4 className='text-[#F43A09] md:text-[4em] text-[2em] w-full md:w-60 md:font-[Anton] font-[Poppins] md:font-medium font-bold'>FREE DELIVERY ON FIRST ORDER</h4>
        </section> {/* Sale */}

        <section className='md:basis-1/4 w-full'>
            <div className='bg-[#F43A09] py-6 md:py-14 md:px-6 text-white text-4xl font-bold text-center w-full'>
                WHITE
            </div>
            <div className='bg-[#FFF] py-6 md:py-14 md:px-6 text-[#F43A09] text-4xl font-bold text-center w-full'>
                FRIDAY
            </div>
            <div className='relative bg-[#F43A09] py-6 md:py-14 md:px-6 text-white text-4xl font-bold text-center w-full'>
                SALE
            </div>
        </section>

        <section className='w-full md:absolute md:top-0 md:right-0 md:mt-[-40px] md:mr-[-20px] md:w-48 md:h-48 bg-[#FFF] md:rounded-full text-[#F43A09] text-3xl font-bold text-center'>
            <p className='md:mt-14 mt-4 md:text-5xl'>UP TO <p className='md:text-[#F43A09] text-white bg-[#F43A09] md:bg-transparent md:py-0 md:mt-0 py-6 mt-4 text-center w-full'>70%</p></p>   
        </section>
        
    </div> {/* Main Container */}

    </>
  )
}

export default Sales