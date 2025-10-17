import React from 'react'

const MenuLinks = [
    {
        id : 1, 
        name : "Home" ,
        link : "/#"

    },
    {
        id : 2, 
        name : "Shop" ,
        link : "/#Shop"

    },
    {
        id : 3, 
        name : "About" ,
        link : "/#About"

    },
    {
        id : 4, 
        name : "Blogs" ,
        link : "/#Blogs"

    },
]

function Navbar() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'> 
        <div className='py-4'>
            <div className="container">
                {/* logo and link section */}
                
                <div className='flex items-center gap-4'>
                    <a href="#" className='text-[#f42c37] font-semibold tracking-wider text-2xl uppercase sm:text-3xl'><span className='text-black'>BLACK</span>shop</a>

                    {/* menu list */}

                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4'>
                            {
                                MenuLinks.map((data , index) =>(
                                    <li key={index}>
                                        <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>{data.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>


                {/* navbar right section */}


            </div>
    </div>
    </div>
  )
}

export default Navbar