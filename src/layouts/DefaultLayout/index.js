// import './Header';
import { Outlet } from 'react-router';
import clsx from 'clsx';
import Header from '~/layouts/components/Header';
// import './Sidebar';
import Sidebar from '~/layouts/components/Sidebar';

import styles from './DefaultLayout.module.scss';

function DefaultLayout() {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <Sidebar />
                <div className={clsx(styles.content)}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
