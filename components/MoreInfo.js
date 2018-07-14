/**
 * Created by zengwei on 2017/8/5.
 */

import Router from 'next/router'
import React, {Component,PropTypes} from 'react';
import styles from '../static/css/MoreInfo.css'
import cs from 'classnames/bind'

let cx = cs.bind(styles)

export default class MoreInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: ''
        }
        this.click = this.click.bind(this)
    }

    componentDidMount() {
        // console.log(this.props.classCell)
    }

    click(url){
        // // console.log(this)
        // let {history} = this.context.router
        // console.log(url)
        // history.push({
        //     pathname: url,
        //     // state: {
        //     //     data: this.props.data
        //     // }
        // })

        Router.push({
            pathname: url
        })
    }

    render() {
        return (
            <div className={cx('moreInfoCell')} style={this.props.cellStyle} onClick={()=>{this.click(this.props.url)}}>
                <span style={this.props.fontStyle}>
                    {this.props.info || this.state.info}
                    <span className={cx('bottomLine', this.props.classLine)}/>
                    <img src='../static/img/arrow.svg' alt=""
                         className={cx('arrowImage', this.props.classArrow)}/>
                </span>
            </div>
        )
    }
}

// MoreInfo.contextTypes = {
//     router: PropTypes.object.isRequired
// }
