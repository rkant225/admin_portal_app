import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import userImage from '../../Assets/alexander.jpg';

const Layout = () => {
    
    const getNavLinkClassName=(isActive)=>{
        const className = isActive ? 'nav-list-item active-nav-link' : 'nav-list-item';
        console.log(className)
        return className;
    }

    const handleOpenAndColapseOfLeftMenu=()=>{
        const mainNavigationContainer = document.getElementById('main-navigation-container-id');
        mainNavigationContainer.classList.toggle('colapsed')

    }

    const MainNavItemComponent = (props)=>{
        const {path, iconName, title} = props;
        return(
            <NavLink to={path} title={title} className={({isActive})=>getNavLinkClassName(isActive)}>
                <span className='nav-icon'>
                    <ion-icon name={iconName}></ion-icon>
                </span>
                <span className='nav-title'>{title}</span>                
            </NavLink>
        );
    }

    const NAV_ITEMS = [
        {title : 'Dashboard', path : '/admin_portal_app/dashboard', iconName : 'home-outline'},
        {title : 'Customers', path : '/admin_portal_app/customer', iconName : 'people-outline'},
        {title : 'Message', path : '/admin_portal_app/message', iconName : 'chatbubble-outline'},
        {title : 'Help', path : '/admin_portal_app/help', iconName : 'help-circle-outline'},
        {title : 'Setting', path : '/admin_portal_app/setting', iconName : 'settings-outline'},
        {title : 'Password', path : '/admin_portal_app/password', iconName : 'lock-closed-outline'},
        {title : 'SignOut', path : '/admin_portal_app/signOut', iconName : 'log-out-outline'},
    ];

    return (
        <div className='navigation-page-container'>
            <div className='main-navigation-container colapsed' id='main-navigation-container-id'>
                <div className='nav-list'>
                    <NavLink to='/admin_portal_app' className={'brand-name-logo-container'} title='Home'>
                        <span className='nav-icon'>
                            <ion-icon name="logo-apple" ></ion-icon>
                        </span>
                        <span className='nav-title'>BrandName</span>
                    </NavLink>

                    {NAV_ITEMS.map((navItem)=>{
                        return <MainNavItemComponent path={navItem.path} iconName={navItem.iconName} title={navItem.title}/>
                    })}
                </div>

            </div>
            
            <div className='main-content'>
                <div className='top-bar-container'>
                    <div className='menu-button-container' onClick={()=>{handleOpenAndColapseOfLeftMenu()}}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    <div className='search-bar-container'>
                        <input className='search-bar-input' placeholder='Search'/>
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <div className='user-profile-pic-container'>
                        <img className='user-profile-pic' src={userImage} alt="user-profile-pic"/>
                    </div>
                </div>

                <div className='current-page-content'>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Layout;

