import { useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import clsx from 'clsx';

function Image({ src, className, ...props }) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={clsx(styles.wrapper, {
                [className]: className,
            })}
            {...props}
            src={fallback || src}
            onError={handleError}
        />
    );
}

export default Image;
