import clsx from 'clsx';
import styles from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';
import { Link } from 'react-router';

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={clsx(styles.wrapper)}>
            <Image className={clsx(styles.avatar)} src={data.avatar} alt={data.full_name} />
            <div className={clsx(styles.info)}>
                <h4 className={clsx(styles.name)}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={clsx(styles.check)} icon={faCircleCheck} />}
                </h4>
                <span className={clsx(styles.username)}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
