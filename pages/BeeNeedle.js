import React, {Component} from 'react';
import styles from '../static/css/Beeneedle.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import ThreeLevelBtn from '../components/ThreeLevelBtn'
import Footer from '../components/Footer'

let cx = cs.bind(styles)
export default class BeeNeedle extends Component {

    render() {
        return(
            <div>
                <Header/>
                <div  style={{backgroundImage: `url('../static/img/beeneedle_bg.png')`, backgroundSize: 'cover'}} className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <p>蜂针</p>
                        <h1 />
                        <div>
                            <ThreeLevelBtn centerStyle={{backgroundColor: '#fff', color: '#000'}} title="了解我们"/>
                        </div>
                    </div>
                    <div className={cx('reverseTriangle1')}>
                        <svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 142h1280V0L640 112 0 0" />
                        </svg>
                    </div>
                </div>

                <Footer/>
            </div>
        )
    }
}
