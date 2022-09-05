import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './AccountItem.module.scss'

const cx = (className) => styles[className]

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662512400&x-signature=xOAmk7se7BdJtmARIspJTxFAECk%3D"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4>
                    Tai Thai
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>@taithai</span>
            </div>
        </div>
    )
}

export default AccountItem
