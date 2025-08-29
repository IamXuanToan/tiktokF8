import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import styles from './Menu.module.scss';
import { Wrapper as PoperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

function Menu({ children, items = [] }) {
    console.log(items);

    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive
            framer-motion
            delay={[0, 300]}
            placement="top-end"
            render={(attrs) => (
                <div className={clsx(styles['menu-list'])} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={clsx(styles['menu-poper'])}>{renderItems()}</PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
