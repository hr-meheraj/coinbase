import React from 'react'

function Services() {
    return (
        <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[100px]'>
            {
                [1, 2, 3].map((e) => {
                    return (
                        <div className='cursor-pointer text-center p-6 hover:rounded-md hover:shadow-md transition-all'>
                            <div className='flex justify-center'>
                            <img src='https://img.icons8.com/color-glass/2x/self-service-kiosk.png' className='w-[100px] h-[100px]' />

                            </div>
                            <br />
                            <h2 className='text-2xl text-center'>Secure Storage</h2>
                            <br />
                            <p className=''>We store the vast majority of the digital assets in secure offline storage.</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Services