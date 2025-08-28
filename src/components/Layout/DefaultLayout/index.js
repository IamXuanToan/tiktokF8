// import './Header';
import { Outlet } from 'react-router';
import Header from './Header';
// import './Sidebar';
import Sidebar from './Sidebar';

function DefaultLayout() {
    return (
        <div>
            <Header />
            <div className="container" style={{ display: 'flex' }}>
                <Sidebar />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
