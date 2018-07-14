import React, {Component} from 'react';
import styles from '../static/css/Beeeye.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import Footer from '../components/Footer'

let cx = cs.bind(styles)
export default class BeeEye extends Component {

    render() {
        return(
            <div>
                <Header/>
                <section  style={{backgroundImage: `url('../static/img/beeeye_bg.png')`, backgroundSize: 'cover'}} className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <p>蜂眼</p>
                        <h1>主机计算环境安全监控平台</h1>
                        {/*<div>*/}
                            {/*<ThreeLevelBtn centerStyle={{backgroundColor: '#fff', color: '#000'}} title="了解我们"/>*/}
                        {/*</div>*/}
                    </div>
                    <div className={cx('reverseTriangle1')}>
                        <svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 142h1280V0L640 112 0 0" />
                        </svg>
                    </div>

                    {/*<div className={cx('triangle')} style={{borderLeftWidth:borderWidth,borderRightWidth:borderWidth}}></div>*/}
                </section>
                <div className={cx('defenseTitle')}>
                    <h1>探索蜂眼</h1>
                    <p>可信计算技术为基础，以有效的访问控制为核心，构造完整可信的信息安全立体防护体系</p>
                </div>
                <section className={cx('defenseInfoAll')}>
                    <div className={cx('defenseInfo')}>
                        <div className={cx('defenseInfoLeft')}>
                            <h2>系统级全面监控</h2>

                            <ul>
                                <li>
                                    <span>实时掌握系统（进程、端口、共享文件夹、开机启动程序…）运行状况</span>
                                </li>
                                <li>
                                    <span>实时掌握软硬件资产变更</span>
                                </li>
                                <li>
                                    <span>实时掌握进程与服务状态</span>
                                </li>
                                <li>
                                    <span>核心资源完整性监控</span>
                                </li>
                                <li>
                                    <span>监控安全配置、漏洞补丁、协议攻击</span>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('defenseInfoRight')}>
                            <div className={cx('defenseImageWrapper')}>
                                <img src='../static/img/defense2.png' alt="" className={cx('defenseImage')}/>
                            </div>
                            <img src='../static/img/defense_bottom.png' alt=""
                                 className={cx('defenseBottomImage')}/>
                        </div>
                    </div>
                </section>

                <section className={cx('defendInfoAll')}>
                    <div className={cx('defendInfo')}>
                        <div className={cx('defendInfoLeft')}>
                            <div className={cx('defendImageWrapper')}>
                                <img src='../static/img/defense11.png' alt="" className={cx('defendImage')}/>
                            </div>
                            <img src='../static/img/defense_bottom.png' alt=""
                                 className={cx('defendBottomImage')}/>
                        </div>
                        <div className={cx('defendInfoRight')}>
                            <h2>内核级安全管控</h2>
                            <ul>
                                <li>
                                    <span>多重身份鉴别</span>
                                </li>
                                <li>
                                    <span>自主与强制访问控制</span>
                                </li>
                                <li>
                                    <span>移动介质管理</span>
                                </li>
                                <li>
                                    <span>进程保护</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </section>

                <section className={cx('defenseInfoAll')}>
                    <div className={cx('defenseInfo')}>
                        <div className={cx('defenseInfoLeft')}>
                            <h2>可信应用程序管理</h2>

                            <ul>
                                <li>
                                    <span>黑白灰应用程序控制</span>
                                </li>
                                <li>
                                    <span>自主与强制访问控制</span>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('defenseInfoRight')}>
                            <div className={cx('defenseImageWrapper')}>
                                <img src='../static/img/defense.png' alt="" className={cx('defenseImage')}/>
                            </div>
                            <img src='../static/img/defense_bottom.png' alt=""
                                 className={cx('defenseBottomImage')}/>
                        </div>
                    </div>
                </section>



                <Footer/>
            </div>
        )
    }
}
