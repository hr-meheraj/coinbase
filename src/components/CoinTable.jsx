import React from 'react'
import { tableDatas } from '../apis/tableDatas'

function CoinTable() {
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