import { Outlet } from 'react-router';
import Header from '~/conponents/Layouts/components/Header';

function HeaderOnly() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
