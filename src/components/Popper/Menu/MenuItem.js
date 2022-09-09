import React from 'react'
import Button from '~/components/Button'
import styles from './Menu.module.scss'

const cx = (className) => styles[className]

function MenuItem({ data, onClick }) {
    const styles = data.separate && { borderTop: '1px solid rgba(22, 24, 35, 0.2)' }
    return (
        <Button className={cx('menu-item')} style={styles} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    )
}

export default MenuItem
