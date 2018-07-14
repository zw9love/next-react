/**
 * Created by wwsoaring on 2018/1/23.
 */
import React, {Component} from 'react';
import styles from '../static/css/MoreInfo.css'
import cs from 'classnames/bind'

let cx = cs.bind(styles)

export default class Diamonds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: ''
        }
    }

    componentDidMount() {
        // console.log(this.props.classCell)
    }

    render() {
        return (
            <div className={cx('moreInfoCell')} style={this.props.cellStyle}>
                <span style={this.props.fontStyle}>
                    {this.props.info || this.state.info}
                    <span className={cx('bottomLine', this.props.classLine)}/>
                    <img src='../static/img/arrow.svg' className={cx('arrowImage', this.props.classArrow)}/>
                </span>

                <span>
                    <span>
                        <img src='' className={cx('arrowImage',this.props.classArrow)} />
                    </span>
                </span>

            </div>
        )
    }
}
