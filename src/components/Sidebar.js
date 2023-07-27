import {Link} from 'react-router-dom';
// import second from ''

const Sidebar = () => {
    return (
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>


            <hr class="sidebar-divider my-0" />


            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>


            <hr class="sidebar-divider" />


            <div class="sidebar-heading">
                Pages
            </div>


            <li class="nav-item">
                <Link class="nav-link collapsed">
                    <i class="fa-solid fa-disease"></i>
                    <span>Penyakit</span>
                </Link>
            </li>
   
            {/* <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div> */}

        </ul>
    )
}

export default Sidebar;