import React from 'react'

function CoinTable() {
    const tableDatas = [
        {
            id: 1,
            title: "Bitcoin",
            subTitle: "BTC",
            imgURL: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
            price: "1,20,743.94",
            rate: "+3.18%"
        },
        {
            id: 2,
            title: "Bitcoin",
            subTitle: "BTC",
            imgURL: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
            price: "1,20,743.94",
            rate: "+3.18%"
        },
        {
            id: 3,
            title: "Bitcoin",
            subTitle: "BTC",
            imgURL: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
            price: "1,20,743.94",
            rate: "+3.18%"
        },
        {
            id: 4,
            title: "Bitcoin",
            subTitle: "BTC",
            imgURL: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
            price: "1,20,743.94",
            rate: "+3.18%"
        },
        {
            id: 5,
            title: "Bitcoin",
            subTitle: "BTC",
            imgURL: "https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png",
            price: "1,20,743.94",
            rate: "+3.18%"
        },
    ]
    return (
        <div class="overflow-x-auto border-2 rounded-md my-[50px]">
            <table class="table w-full">
                <thead className=''>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Chart</th>
                        <td>Trade</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableDatas.map((data, index) => {
                            return (
                                <tr className='hover'>
                                    <th className='text-xl'>{index + 1}</th>
                                    <td className='flex min-w-[140px] gap-3 items-center'>
                                        <img src={data.imgURL} className='w-[36px] h-[36px]' />
                                        <div className='flex gap-4 items-center'>
                                            <h2 className="text-2xl">{data.title}</h2>
                                            <h3 className='text-xl text-gray-400'>{data.subTitle}</h3>
                                        </div>
                                    </td>
                                    <td className='text-[18px]'>BDT {data.price}</td>
                                    <td className='text-[#098551] text-[20px]'>{data.rate}</td>
                                    <td>
                                        <img src="https://img.icons8.com/windows/2x/combo-chart.png" alt='Chart' className='w-[40px]' />
                                    </td>
                                    <td>
                                        <button className='py-2 px-4 bg-blue-500 text-white rounded-md'>Buy Now</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CoinTable