/**
 * Created by zengwei on 2017/8/5.
 */
import React, {Component,PropTypes} from 'react';
import Router from 'next/router'
import styles from '../static/css/ThreeLevelBtn.css'
import cs from 'classnames/bind'

let cx = cs.bind(styles)

export default class ThreeLevelBtn extends Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
    }

    click(url){
        console.log(url)
        Router.push({
            pathname: url
        })
    }

    render() {
        return (
            <div className={cx('btnCell')} style={this.props.cellStyle} onClick={()=>{this.click(this.props.path)}}>
                <div className={cx('btnCellLeft')} />
                <div className={cx('btnCellCenter')}
                     style={this.props.centerStyle}>{this.props.title || '更多资源'}</div>
                <div className={cx('btnCellRight')} />
            </div>
        )
    }
}

// ThreeLevelBtn.contextTypes = {
//     router: PropTypes.object.isRequired
// }
