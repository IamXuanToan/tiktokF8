import clsx from 'clsx';
import styles from './Popper.module.scss';

function Wrapper({ children, className }) {
    return <div className={clsx(styles.wrapper, { [className]: className })}>{children}</div>;
}

export default Wrapper;
