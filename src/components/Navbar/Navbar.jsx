import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

//Logo
import Logo from '../../assets/shared/logo.svg';

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <header className="primary-header flex">
            <div>
                <img src={Logo} alt="space tourism logo" className="logo" />
            </div>
            <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded={visible} onClick={() => setVisible(!visible)}>
                <span className="sr-only">Menu</span>
            </button>
            <nav>
                <ul id="primary-navigation" data-visible={visible} className="primary-navigation underline-indicators flex">
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active ff-sans-cond uppercase text-white letter-spacing-2' : 'ff-sans-cond uppercase text-white letter-spacing-2')} to="/"><span aria-hidden="true">
                        00</span>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active ff-sans-cond uppercase text-white letter-spacing-2' : 'ff-sans-cond uppercase text-white letter-spacing-2')} to="/destination"><span aria-hidden="true">01</span>Destination</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active ff-sans-cond uppercase text-white letter-spacing-2' : 'ff-sans-cond uppercase text-white letter-spacing-2')} to="/crew"><span aria-hidden="true">02</span>Crew</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active ff-sans-cond uppercase text-white letter-spacing-2' : 'ff-sans-cond uppercase text-white letter-spacing-2')} to="/technology"><span aria-hidden="true">03</span>Technology</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
