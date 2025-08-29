import clsx from 'clsx';
import { Link } from 'react-router';
import styles from './Button.module.scss';

// passProps dùng để ví dụ khi truyền target='_blank' thì sẽ nhận

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    //Remove event listener when button disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && props[key] === typeof 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    console.log(className);

    const classes = clsx(styles.wrapper, {
        [className]: className,
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.text]: text,
        [styles.disabled]: disabled,
        [styles.rounded]: rounded,
        [styles.small]: small,
        [styles.large]: large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={clsx(styles.icon)}>{leftIcon}</span>}
            <span className={clsx(styles.title)}>{children}</span>
            {rightIcon && <span className={clsx(styles.icon)}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
