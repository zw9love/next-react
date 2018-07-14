/**
 * Created by wwsoaring on 2017/11/23.
 * 解决方案
 */

import React, {Component} from 'react';
import styles from '../static/css/Solution.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import Footer from '../components/Footer'

let cx = cs.bind(styles)
export default class Solution extends Component {

    render() {
        return(
            <div>
                <Header/>

                <section  style={{backgroundImage: `url('../static/img/solut1.png')`, backgroundSize: 'cover'}} className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <h1>网络应用方案</h1>
                        {/*<div>*/}
                            {/*<ThreeLevelBtn centerStyle={{backgroundColor: '#fff', color: '#000'}} title="了解我们"/>*/}
                        {/*</div>*/}
                    </div>

                </section>

                <section className={cx('area')}>
                    <div className={cx('defenseTitle')}>
                        <h1>通用办公网络应用</h1>
                    </div>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>
                            <ul >
                                <li>
                                    <div className={cx('img-holder')}><img src='../static/img/graph-01.svg' width="50" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>重要服务器</h3>
                                        <p>内核级安全管控 可信应用程序管理与分析</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('img-holder')}><img src='../static/img/graph-01.svg' width="40" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>办公网络系统</h3>
                                        <p>系统级安全监控 可信应用程序管理与分析</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('img-holder')}><img src='../static/img/graph-01.svg' width="30" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>分支机构、下属单位</h3>
                                        <p>系统级安全监控 可信应用程序管理与分析</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('img-holder')}><img src='../static/img/graph-01.svg' width="60" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>网络计算环境</h3>
                                        <p>网络信息全记录 网络态势感知 网络异常定位 网络攻击重现</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('protectRight')}>
                            <img className={cx('protectImage')} src='../static/img/solution1.png' height="624" width="684" alt=""/>
                        </div>
                    </div>

                </section>

                <section className={cx('area')}>
                    <div className={cx('defenseTitle')}>
                        <h1>工业网络应用</h1>
                    </div>
                    <div className={cx('protectContainer')}>

                        <div className={cx('protectLeft')}>
                            <ul >
                                <li>
                                    <div className={cx('img-holder')}><img className={cx('pull-left')} src='../static/img/graph-04.svg' width="60" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>生产调度终端及服务器</h3>
                                        <p>系统级安全监控 可信应用程序管理与分析</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('img-holder')}><img className={cx('pull-left')} src='../static/img/graph-04.svg' width="60" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>工程师站、下属单位</h3>
                                        <p>系统级安全监控 可信应用程序管理与分析</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('img-holder')}><img className={cx('pull-left')} src='../static/img/graph-04.svg' width="60" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>工业网络计算环境</h3>
                                        <p>网络信息全记录
                                            网络态势感知
                                            网络异常定位
                                            网络攻击重现</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('protectRight')}>
                            <img className={cx('protectImage')} src='../static/img/solution2.png' height="624" width="684" alt=""/>
                        </div>

                    </div>
                    {/*<div className={cx('reverseTriangle1')}>*/}
                    {/*<svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*<path d="M0 142h1280V0L640 112 0 0"></path>*/}
                    {/*</svg>*/}
                    {/*</div>*/}
                </section>

                <section className={cx('area')}>
                    <div className={cx('defenseTitle')}>
                        <h1>医疗系统网络应用</h1>
                    </div>
                    <div className={cx('protectContainer')}>

                        <div className={cx('protectLeft')}>
                            <ul >
                                <li>
                                    <div className={cx('img-holder')}><img src='../static/img/graph-03.svg' width="40" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>重要服务器</h3>
                                        <p>内核级安全管控 可信应用程序管理与分析</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('img-holder')}><img src='../static/img/graph-03.svg' width="40" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>办公网络系统</h3>
                                        <p>系统级安全监控 可信应用程序管理与分析</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('img-holder')}><img src='../static/img/graph-03.svg' width="40" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>本地外网服务区</h3>
                                        <p>系统级安全监控
                                            可信应用程序管理与分析</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('img-holder')}><img src='../static/img/graph-03.svg' width="40" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>分支机构、下属单位</h3>
                                        <p>系统级安全监控 可信应用程序管理与分析</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('img-holder')}><img src='../static/img/graph-03.svg' width="40" alt=""/></div>
                                    <div className={cx('text-holder')}>
                                        <h3>网络计算环境</h3>
                                        <p>网络信息全记录 网络态势感知 网络异常定位 网络攻击重现</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('protectRight')}>
                            <img className={cx('protectImage')} src='../static/img/solution3.png' height="624" width="684" alt=""/>
                        </div>
                    </div>
                    {/*<div className={cx('reverseTriangle1')}>*/}
                    {/*<svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*<path d="M0 142h1280V0L640 112 0 0"></path>*/}
                    {/*</svg>*/}
                    {/*</div>*/}
                </section>

                <Footer/>
            </div>
        )
    }
}
