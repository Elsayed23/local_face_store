import React from 'react'
import logo from '../../assets/images/logo.png'
import { navIcons } from '../../constants'
import { Link, useLocation } from 'react-router-dom';
import MobileNav from './navbar/MobileNav';
import NavItems from './navbar/NavItems';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { pathname } = useLocation();

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setIsOpen(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);



    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    const isMobile = windowWidth < 768

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <header className='py-8 absolute w-full top-0 left-0 z-50'>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <div className="hidden md:block">
                    <NavItems isMobile={isMobile} pathname={pathname} />
                </div>
                <div className="hidden lg:flex items-center gap-3 text-white">
                    {
                        navIcons.map((Icon, idx) => {
                            return <Icon key={idx} size={25} className='cursor-pointer' />
                        })
                    }
                </div>
                {
                    isMobile
                    &&
                    <MobileNav isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
                }
            </div>


        </header>
    )
}

export default Navbar
