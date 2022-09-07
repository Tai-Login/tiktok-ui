import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = (classNames) => {
    let results = ''
    for (var key in classNames) {
        if (classNames[key]) {
            if (styles[key]) results += ' ' + styles[key]
            else results += ' ' + key
        }
    }
    return results
}

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    leftIcon,
    rightIcon,
    className,
    ...props
}) {
    let Comp = 'button'
    const classes = cx({
        ['wrapper']: true,
        [className]: true,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    })
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') delete props[key]
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else {
        props.href = href
        Comp = 'a'
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={styles['icon']}>{leftIcon}</span>}{' '}
            <span className={styles['title']}>{children}</span>
            {rightIcon && <span className={styles['icon']}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button
