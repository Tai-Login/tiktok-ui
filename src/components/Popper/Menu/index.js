import { useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = (className) => styles[className]

function Menu({ children, items, onChange }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]
    const renderItems = current.data.map((item, index) => {
        const isParent = !!item.children
        return (
            <MenuItem
                key={index}
                data={item}
                onClick={() => {
                    if (isParent) setHistory([...history, item.children])
                    else {
                        onChange(item)
                    }
                }}
            />
        )
    })

    return (
        <Tippy
            interactive
            delay={[0, 500]}
            offset={[14, 8]}
            placement="bottom-end"
            onHide={() => setHistory(history.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1">
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header title="Languages" onBack={() => setHistory(history.slice(0, history.length - 1))} />
                        )}
                        {renderItems}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu
