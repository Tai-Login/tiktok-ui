import React from 'react'
import Button from '~/components/Button'
import styles from './Menu.module.scss'

const cx = (className) => styles[className]

function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    )
}

export default MenuItem
