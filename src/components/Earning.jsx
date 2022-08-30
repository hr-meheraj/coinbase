import React from 'react'

function Earning() {
  return (
    <div className='my-[80px] grid grid-cols-1 md:grid-cols-2 gap-4 content-center'>
        <div className=''>
            <h2 className="text-3xl font-semibold">Earn up to $16 worth of <br/>crypto</h2>
            <br/>
            <p>Discover how specific cryptocurrencies work — and <br/>get a bit of each crypto to try out for yourself.</p>
            <br/>
            <button className='btn  bg-blue-800 border-none'>Start Earning</button>
        </div>
        <div>

        <div className='border-2 flex-col gap-x-[40px] md:gap-x-[20px] rounded-md'>
            <div className='hover:shadow-md rounded-md cursor-pointer flex items-center justify-between md:p-4'>
                <div className='flex gap-2 items-center '>
                    <img src='https://published-assets.coinbase.com/processed/62/36/62365d11-b992-47f4-beed-588a457f71ed' className='w-[40px] h-[40px]'/>
                    <h2 className='text-2xl'>The Graph</h2>
                    <h4 className='text-xl hidden md:inline-block'>GRT</h4>
                </div>
                <div className='text-xl font-bold text-[#098551]'>
                    Earn $4 GRT
                </div>
            </div>
            <div className='hover:shadow-md rounded-md cursor-pointer flex items-center justify-between md:p-4'>
                <div className='flex gap-2 items-center '>
                    <img src='https://published-assets.coinbase.com/processed/62/36/62365d11-b992-47f4-beed-588a457f71ed' className='w-[40px] h-[40px]'/>
                    <h2 className='text-2xl'>The Graph</h2>
                    <h4 className='text-xl  hidden md:inline-block'>GRT</h4>
                </div>
                <div className='text-xl font-bold text-[#098551]'>
                    Earn $4 GRT
                </div>
            </div>
            <div className='hover:shadow-md rounded-md cursor-pointer flex items-center justify-between md:p-4'>
                <div className='flex gap-2 items-center '>
                    <img src='https://published-assets.coinbase.com/processed/62/36/62365d11-b992-47f4-beed-588a457f71ed' className='w-[40px] h-[40px]'/>
                    <h2 className='text-2xl'>The Graph</h2>
                    <h4 className='text-xl  hidden md:inline-block'>GRT</h4>
                </div>
                <div className='text-xl font-bold text-[#098551]'>
                    Earn $4 GRT
                </div>
            </div>
            <div className='hover:shadow-md rounded-md cursor-pointer flex items-center justify-between md:p-4'>
                <div className='flex gap-2 items-center '>
                    <img src='https://published-assets.coinbase.com/processed/62/36/62365d11-b992-47f4-beed-588a457f71ed' className='w-[40px] h-[40px]'/>
                    <h2 className='text-2xl'>The Graph</h2>
                    <h4 className='text-xl hidden md:inline-block'>GRT</h4>
                </div>
                <div className='text-xl font-bold text-[#098551]'>
                    Earn $4 GRT
                </div>
            </div>
        </div>
        <div className='mt-[40px] text-blue-800 font-sans font-bold'>
                    {"< " } See More
            </div>
        </div>
    </div>
  )
}

export default Earning