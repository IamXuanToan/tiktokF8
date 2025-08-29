import Button from '~/components/Button';
import clsx from 'clsx';
import styles from './Menu.module.scss';

function MenuItem({ data }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={clsx(styles['menu-item'])}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
