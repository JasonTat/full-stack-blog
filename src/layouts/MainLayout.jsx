import {Outlet} from "react-router-dom"

import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 2xl:px-64">
            <Navbar />

            {/* Outlet represents all the pages. doesn't matter which page you're on, itll show your main layout(the code on this file) and then whatever page content.  */}
            <Outlet />


        </div>
    )
}

export default MainLayout