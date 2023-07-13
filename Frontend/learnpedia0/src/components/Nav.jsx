import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Nav.css';
import { connect } from 'react-redux'
import { signOut, signIn } from '../action/learnpedia'
import { useNavigate } from 'react-router-dom'


const Nav = ({ userDetails, signOut }) => {
    let navigate = useNavigate()

    const [isSearchActive, setSearchActive] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const signoutUser = (event) => {
        event.preventDefault();
        signOut()
        navigate('/')
    }

    const search = (event) => {
        if (event.key === 'Enter') {
            navigate(`/search/${event.target.value}`)
        }
    }


    return (
        <>
            {userDetails.email ?
                <div>
                    <nav className={isSidebarOpen ? 'active' : ''} >
                        <div className="nav-bar">
                            <i className='bx bx-menu sidebarOpen' onClick={() => setIsSidebarOpen(prev => !prev)} ></i>
                            <span className="logo navLogo"><a href="/">Learnpedia</a></span>

                            <div className="menu">
                                <div className="logo-toggle">
                                    <span className="logo"><a href="/">CodingLab</a></span>
                                    <i className='bx bx-x siderbarClose' onClick={() => setIsSidebarOpen(prev => !prev)} ></i>
                                </div>

                                <ul className="nav-links">
                                    <li>
                                        {
                                            userDetails.role === 'student' ?
                                                <NavLink className="btn" to={`/shome`}> Home </NavLink> :
                                                <NavLink className="btn" to={`/educator`}> Home </NavLink>
                                        }
                                    </li>
                                    <li><NavLink className="btn" to={'/courses'}>
                                        Courses
                                    </NavLink></li>
                                    {/* <li><NavLink className="btn" to={'#'}>
                                        Services
                                    </NavLink></li> */}
                                    <li><NavLink className="btn" to={'/help'}>
                                        Help
                                    </NavLink></li>
                                    {/* <li><NavLink className="btn" to={'#'}>
                                        Contact
                                    </NavLink></li> */}

                                </ul>
                            </div>

                            <div className="darkLight-searchBox">
                                <div className="dark-light ">
                                    <i className='bx bx-moon moon'></i>
                                    <i className='bx bx-sun sun'></i>
                                </div>

                                <div className="searchBox">
                                    <div className={isSearchActive ? 'searchToggle active' : 'searchToggle'} onClick={() => setSearchActive(prev => !prev)}>
                                        <i className='bx bx-x cancel'></i>
                                        <i className='bx bx-search search'></i>
                                    </div>

                                    <div className="search-field">
                                        <input onKeyDown={search} type="text" placeholder="Search..." />
                                        <i className='bx bx-search'></i>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="dropdown-usericon">
                                <i className='bx bx-user-circle userIcon'></i>
                                <div className="dropdown-content">
                                    <NavLink to={'/sprofile'}>Profile</NavLink>
                                    <NavLink onClick={signoutUser}>Logout!</NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div> :
                <div>
                    <nav className={isSidebarOpen ? 'active' : ''} >
                        <div className="nav-bar">
                            <i className='bx bx-menu sidebarOpen' onClick={() => setIsSidebarOpen(prev => !prev)} ></i>
                            <span className="logo navLogo"><a href="/">Learnpedia</a></span>

                            <div className="menu">
                                <div className="logo-toggle">
                                    <span className="logo"><a href="/">CodingLab</a></span>
                                    <i className='bx bx-x siderbarClose' onClick={() => setIsSidebarOpen(prev => !prev)} ></i>
                                </div>

                                <ul className="nav-links">
                                    <li><NavLink className="btn" to={`/`}>
                                        Home
                                    </NavLink></li>
                                    <li><NavLink className="btn" to={'/courses'}>
                                        Courses
                                    </NavLink></li>
                                    {/* <li><NavLink className="btn" to={'#'}>
                                        Services
                                    </NavLink></li> */}
                                    <li><NavLink className="btn" to={'/help'}>
                                        Help
                                    </NavLink></li>
                                    {/* <li><NavLink className="btn" to={'#'}>
                                        Contact
                                    </NavLink></li> */}

                                </ul>
                            </div>

                            <div className="darkLight-searchBox">
                                <div className="dark-light ">
                                    <i className='bx bx-moon moon'></i>
                                    <i className='bx bx-sun sun'></i>
                                </div>

                                <div className="searchBox">
                                    <div className={isSearchActive ? 'searchToggle active' : 'searchToggle'} onClick={() => setSearchActive(prev => !prev)}>
                                        <i className='bx bx-x cancel'></i>
                                        <i className='bx bx-search search'></i>
                                    </div>
                                    
                                    <div className="search-field">
                                        <input onKeyDown={search} type="text" placeholder="Search..." />
                                        <i className='bx bx-search'></i>
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="login-btn">
                                <NavLink className="btn" to={'/login'}>
                                    Login
                                </NavLink>
                                <NavLink className="btn" to={'/signup'}>
                                    Signup
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        userDetails: state.learnpedia
    }
}


const mapDispatchToProps = dispatch => ({
    signOut: (userDetails) => {
        dispatch(signOut())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)