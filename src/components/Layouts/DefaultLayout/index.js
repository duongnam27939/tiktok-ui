import { Children } from 'react';
import Header from '@/components/Layouts/components/Header';
import Sidebar from './Sidebar';
import Profile from '@/Profile';
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind';



const cx = classNames.bind(styles)
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
