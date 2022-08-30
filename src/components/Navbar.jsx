import React from 'react'

function Navbar() {
    return (
        <div className="navbar navbar-end max-w-[1200px] w-[100%] mx-auto shadow ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Explore </a></li>
                        <li><a>Learn </a></li>
                        <li><a>Individuals </a></li>
                        <li><a>Businesses </a></li>
                        <li><a>Developers </a></li>
                        <li><a>Company </a></li>
                    </ul>
                </div>
                <a className="cursor-pointer normal-case text-xl">
                    <img src='https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg' className='w-[112px]' />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">

                    <li><a>Explore </a></li>
                    <li><a>Learn </a></li>
                    <li><a>Individuals </a></li>
                    <li><a>Businesses </a></li>
                    <li><a>Developers </a></li>
                    <li><a>Company </a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="">Sign In</a>
                <a className="py-2 px-4 text-white rounded-md outline-none font-semibold bg-[#0a46e4]">Get started</a>
            </div>
        </div>
    )
}

export default Navbar