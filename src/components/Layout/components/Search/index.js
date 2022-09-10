import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import AccountItem from '~/components/AccountItem'
import styles from './Search.module.scss'
import { useDebounced } from '~/hooks'
import * as request from '~/utils/request'
import { searchServices } from '~/apiServices'

const cx = (className) => {
    return styles[className]
}

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [showResults, setShowResults] = useState(true)
    const [loading, setLoading] = useState(false)
    const debouncedValue = useDebounced(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResults([])
            return
        }

        const fetchApi = async () => {
            setLoading(true)

            const response = await searchServices.search(debouncedValue)
            setSearchResults(response)
            setLoading(false)
        }

        fetchApi()
    }, [debouncedValue])
    return (
        <div>
            <Tippy
                interactive
                visible={showResults && searchResults.length > 0}
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex="-1">
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <div>
                                {searchResults.map((data) => (
                                    <AccountItem key={data.id} data={data} />
                                ))}
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResults(false)}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setShowResults(true)}
                    />
                    {searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('')
                                inputRef.current.focus()
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
        </div>
    )
}

export default Search
