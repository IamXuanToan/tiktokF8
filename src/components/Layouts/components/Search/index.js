import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useRef, useState } from 'react';

import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import { Wrapper as PoperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounce]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
                <div className={clsx(styles['search-result'])} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        <h4 className={clsx(styles['search-title'])}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PoperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={clsx(styles.search)}>
                <input
                    ref={inputRef}
                    placeholder="Search ..."
                    value={searchValue}
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchResult && !loading && searchValue.length > 0 && (
                    <button
                        className={clsx(styles.clear)}
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        {<FontAwesomeIcon icon={faCircleXmark} />}
                    </button>
                )}
                {loading && <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />}

                {/* loading... */}
                <button className={clsx(styles['search-btn'])}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
