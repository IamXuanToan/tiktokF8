import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

function Header() {
    console.log(images.logo);

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.logo)}>
                    <img src={images.logo} alt="Tiktok logo" />
                </div>
                <div className={clsx(styles.search)}>
                    <input placeholder="Search ..." />
                    <button className={clsx(styles.clear)}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />
                    {/* loading... */}
                    <button className={clsx(styles['search-btn'])}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={clsx(styles.action)}>action</div>
            </div>
        </header>
    );
}

export default Header;
