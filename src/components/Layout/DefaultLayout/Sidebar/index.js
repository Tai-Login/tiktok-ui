import React from 'react'
import styles from './Sidebar.module.scss'

const cx = (className) => styles[className]

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    )
}

export default Sidebar
