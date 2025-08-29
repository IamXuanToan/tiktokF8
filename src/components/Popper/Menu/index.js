import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';

import { Wrapper as PoperWrapper } from '~/components/Popper';
import HeaderMenu from './HeaderMenu';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { useState } from 'react';
import { data } from 'react-router';

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            visible
            delay={[0, 300]}
            placement="top-end"
            render={(attrs) => (
                <div className={clsx(styles['menu-list'])} tabIndex="-1" {...attrs}>
                    <PoperWrapper className={clsx(styles['menu-poper'])}>
                        {history.length > 1 && (
                            <HeaderMenu
                                title={'Languge'}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </PoperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
