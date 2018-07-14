import React, {Component} from 'react';
import styles from '../static/css/Forum.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import MoreInfo from '../components/MoreInfo'
import Footer from '../components/Footer'

let cx = cs.bind(styles)
export default class Forum extends Component {

        render() {
            return(
                <div>
                    <Header/>

                    <section  style={{backgroundImage: `url('../static/img/forum_bg.jpg')`, backgroundSize: 'cover'}} className={cx('libContainer')}>
                        <h1 className={cx('h1')}>论坛</h1>
                        <div className={cx('libWrapper')}>
                            <div className={cx('libLeft')}>
                                <div className={cx('libHoverCell')}>
                                    <img src='../static/img/lib_left.png' alt="" className={cx('libLeftImage')}/>
                                    <div className={cx('libLeftShadow')}/>
                                    <div className={cx('libInfoWrapper', 'libInfoLeft')}>
                                        <p>时间/名称</p>
                                        <h1>/主题SC Magazine: “5 Stars” for Cb Defense</h1>
                                        <MoreInfo info="阅 读" fontStyle={{color: '#000'}}
                                                  cellStyle={{position: 'relative', left: 0, bottom: 0}}/>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('libRightTop')}>
                                <div className={cx('libHoverCell')}>
                                    <img src='../static/img/lib_right_top.png' alt=""
                                         className={cx('libLeftImage')}/>
                                    <div className={cx('libLeftShadow')} />
                                    <div className={cx('libInfoWrapper', 'libInfoRight')}>
                                        <p>时间/名称</p>
                                        <h2>/主题Stop Petya/NotPetya Ransomware</h2>
                                        <MoreInfo info="阅 读" fontStyle={{color: '#000'}}
                                                  cellStyle={{position: 'relative', left: 0, bottom: 0}}/>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('libRightBottom')}>
                                <div className={cx('libHoverCell')}>
                                    <img src='../static/img/lib_right_top.png' alt=""
                                         className={cx('libLeftImage')}/>
                                    <div className={cx('libLeftShadow')} />
                                    <div className={cx('libInfoWrapper', 'libInfoRight')}>
                                        <p>时间/名称</p>
                                        <h2>/主题Stop Petya/NotPetya Ransomware</h2>
                                        <MoreInfo info="阅 读" fontStyle={{color: '#000'}}
                                                  cellStyle={{position: 'relative', left: 0, bottom: 0}}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className={cx('navigation')}>
                        <ul className={cx('')}>
                            <li><a href="#" /></li>
                            <li className={cx('')}>
                                <label className={cx('label')} >
                                    <span >?</span>
                                    <input  placeholder="输入关键字"/>
                                    <span><a href="#" >搜索</a></span>
                                </label>
                            </li>
                            <li data-taxonomy="category">
                                {/*<a href="#" > Category <span /></a>*/}
                                {/*<ul >*/}
                                {/*<li><input/><label >Compliance</label></li>*/}
                                {/*<li><input/><label >Detection and Response</label></li>*/}
                                {/*<li><input/><label>Endpoint and Server Security</label></li>*/}
                                {/*</ul>*/}
                            </li>
                        </ul>
                    </section>

                    <Footer/>
                </div>
            )
    }
}
