import clsx from 'clsx';
import styles from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function AccountItem() {
    return (
        <div className={clsx(styles.wrapper)}>
            <img
                className={clsx(styles.avatar)}
                src="https://maunailxinh.com/wp-content/uploads/2025/05/anh-meo-ngao-cute-1.jpg"
                alt="a"
            />
            <div className={clsx(styles.info)}>
                <h4 className={clsx(styles.name)}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={clsx(styles.check)} icon={faCircleCheck} />
                </h4>
                <span className={clsx(styles.username)}>avan</span>
            </div>
        </div>
    );
}

export default AccountItem;
