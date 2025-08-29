import Button from '~/components/Button';
import clsx from 'clsx';
import styles from './Menu.module.scss';

function MenuItem({ data, onClick }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={clsx(styles['menu-item'])} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
