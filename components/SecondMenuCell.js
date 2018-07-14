/**
 * Created by zw9love on 2017/8/8.
 */

import Router from 'next/router'
import React, {Component, PropTypes} from 'react';
import styles from '../static/css/SecondMenuCell.css'
import cs from 'classnames/bind'

let cx = cs.bind(styles)

export default class SecondMenuCell extends Component {
    constructor(props) {
        super(props)
        this.secClick = this.secClick.bind(this)
    }

    /**
     * @description 路由跳转
     * @param data
     */
    secClick(data){
        Router.push({
            pathname: data.url
        })
    }

    render() {
        return (
            <li className={cx('secondMenuCell')} onClick={()=>{this.secClick(this.props)}}>
                <span>{this.props.name}</span>
                <svg xmlns='http://www.w3.org/2000/svg' data-name='Layer 1' viewBox='0 0 5.38 9.6'>
                    <path fill='#fc6215' d='M.7 0L0 .7l3.78 4.1L0 8.84l.7.76 4.68-4.8L.68 0'/>
                </svg>
            </li>
        )
    }
}

// SecondMenuCell.contextTypes = {
//     router: PropTypes.object.isRequired
// }
