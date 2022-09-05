import React from 'react'
import styles from './Popper.module.scss'

const cx = (className) => styles[className]

function Wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>
}

export default Wrapper
