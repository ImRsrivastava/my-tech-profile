import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BsFillHouseFill, BsFillInfoSquareFill, BsFillFileEarmarkPdfFill, BsX, BsList, BsGearFill } from "react-icons/bs";

const Header = () => {
    const location = useLocation ();
    const [headerShow, setHeaderShow] = useState(false);

    const showMobileViewHeader = () => { setHeaderShow(true) }
    const hideMobileViewHeader = () => { setHeaderShow(false) }
    
    // `setHeaderShow` as false on component change
    useEffect(() => {
        setHeaderShow(false);
    }, [location.pathname]);

    return (
        <>
            <header id="header" className={(headerShow) ? "header d-flex flex-column justify-content-center header-show" : "header d-flex flex-column justify-content-center"}>
                {(headerShow) ? 
                    <BsX className="header-toggle d-xl-none fs-6" onClick={hideMobileViewHeader} />
                    :
                    <BsList className="header-toggle d-xl-none fs-6" onClick={showMobileViewHeader} />
                }
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li>
                            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                                <BsFillHouseFill className="fs-6" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                                <BsFillInfoSquareFill className="fs-6" />
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>
                                <BsFillFileEarmarkPdfFill className="fs-6" />
                                <span>Resume</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/skill-set" className={location.pathname === "/skill-set" ? "active" : ""}>
                                <BsGearFill className="fs-6" />
                                <span>Skills</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>
                                <BsFillInfoSquareFill className="fs-6" />
                                <span>Portfolio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                                <BsFillInfoSquareFill className="fs-6" />
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <Outlet />
            </main>
        </>
    );
};

export default Header;
