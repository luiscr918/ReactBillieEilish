import { Link } from "react-router-dom"


export const NavbarComponent = () => {
    return (
        <>
            {/* <!--Bar Nav--> */}
            <nav className="sticky top-0 z-50 bg-white border-gray-200  dark:border-gray-700 component-background-billie ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/src/assets/img/logoBarra.svg" className="h-8" alt="Billie Eilish Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eilish Vibes</span>
                    </Link>
                    <button data-collapse-toggle="navbar-dropdown" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul
                            className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <Link to={'/'}
                                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                                    aria-current="page">Home</Link>
                            </li>
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    Store
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbar"
                                    className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 component-background-billie  dark:divide-white">
                                    <div className="py-1">
                                        <Link to={'/store'}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">All
                                            Categories</Link>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                        aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="/src/pages/store.html#normalVinyl"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Normal
                                                Vinyl</a>
                                        </li>
                                        <li>
                                            <a href="/src/pages/store.html#limitedEditionVinyl"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Limited
                                                Edition Vinyl</a>
                                        </li>
                                        <li>
                                            <a href="/src/pages/store.html#misteryBoxs"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mistery
                                                Boxs(Only Holidays)</a>
                                        </li>
                                        <li>
                                            <a href="/src/pages/store.html#hoddies"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hoodies</a>
                                        </li>
                                        <li>
                                            <a href="/src/pages/store.html#oversideTshirst"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Overside
                                                T-shirts</a>
                                        </li>
                                        <li>
                                            <a href="/src/pages/store.html#necklaces"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Necklaces</a>
                                        </li>
                                        <li>
                                            <a href="/src/pages/store.html#shoes"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shoes</a>
                                        </li>
                                        <li>
                                            <a href="/src/pages/store.html#signedThings"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Signed
                                                Things</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to={'/news'}
                                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">News</Link>
                            </li>
                            <li>
                                <Link to={'/tour'}
                                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tour</Link>
                            </li>
                            <li>
                                <Link to={'/aboutUs'}
                                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About
                                    Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-3/12 flex justify-end md:w-3/12 md:justify-end xs:w-1/2 xs:justify-center ">
                        <button id="botonLupa">
                            <svg className="h-8 p-1 text-white hover:text-blue-700 duration-200 svg-inline--fa fa-search fa-w-16 fa-9x" aria-hidden="true"
                                focusable="false" data-prefix="far" data-icon="search" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                                    className=""></path>
                            </svg>
                        </button>
                        <a href="/src/pages/carrito.html">
                            <svg className="h-8 p-1   text-white hover:text-blue-500 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x" aria-hidden="true"
                                focusable="false" data-prefix="far" data-icon="shopping-cart" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z">
                                </path>
                            </svg>
                        </a>
                        <button id="botonSesion">
                            <img className="h-9 w-9 min-h-9 min-w-9 p-1 hover:bg-blue-500 duration-200" aria-hidden="true"
                                src="/src/assets/img/accountIcon.svg" alt="logo de cuenta" />
                        </button>

                    </div>
                </div>
            </nav>


        </>
    )
}
