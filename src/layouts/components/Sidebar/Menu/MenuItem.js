import { NavLink } from 'react-router';
import styles from './Menu.module.scss';
import clsx from 'clsx';

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink to={to} className={({ isActive }) => clsx(styles['menu-item'], { [styles.active]: isActive })}>
            {({ isActive }) => (
                <>
                    {isActive ? activeIcon : icon}
                    <span className={styles.title}>{title}</span>
                </>
            )}
        </NavLink>
    );
}

export default MenuItem;
