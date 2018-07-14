import React, {Component} from 'react';
import styles from '../static/css/Beehive.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import AdverCell from '../components/AdverCell'
import Footer from '../components/Footer'

let cx = cs.bind(styles)
export default class BeeHive extends Component {

    constructor(props) {
        super(props)
        this.state = {
            protectAdverData: {},
            adverData: [],
            borderWidth: '0px',
            defenseData: []
        }

        this.renderBorderWidth = this.renderBorderWidth.bind(this)
        this.renderData = this.renderData.bind(this)
        this.renderAdverCell = this.renderAdverCell.bind(this)
    }

    renderBorderWidth() {
        this.context.router.history.push("/otherPath")
        let width;
        let clientHeight = window.innerHeight
        let docHeight = document.body.scrollHeight || document.documentElement.scrollHeight
        if (docHeight > clientHeight) {
            // 滚动轴出现了
            width = ( window.innerWidth - 17 ) / 2 + 1
        } else {
            // 没有滚动轴
            width = window.innerWidth / 2 + 1
        }
        this.setState({borderWidth: width})
    }


    componentDidMount() {
        this.renderData();
        // this.context.router.history.push("/otherPath")
    }

    renderData() {


        let data = [
            {

                title: '网站入侵检测',
                info: '蜂巢全信息安全审计分析系统是一款网站入侵检测产品，产品具有实时数据流量分析和记录IP网络数据包的能力，' +
                '能够进行协议分析，对网络数据包内容进行搜索/匹配。同时产品能够检测各种不同的攻击方式，对攻击进行实时报警，' +
                '当告警信息产生后，安全管理员通过分析报警信息，可对受攻击网站的漏洞进行修复，从而提升网站服务器的安全性。',

                reverse: true,
                src: '../static/img/beehive.png',
                moreInfo: ''
            }

        ]

        this.setState({ adverData: data })
    }

    renderAdverCell() {
        let data = this.state.adverData
        let arr = []
        data.map((val, index) => {
            arr.push(<AdverCell data={val} key={index}/>)
        })

        return arr;
    }

    render() {
        return(
            <div>
                <Header/>

                <section  style={{backgroundImage: `url('../static/img/beehive_bg.png')`, backgroundSize: 'cover'}} className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <p>蜂巢</p>
                        <h1>全信息安全审计分析系统</h1>
                        <div>
                            {/*<ThreeLevelBtn centerStyle={{backgroundColor: '#fff', color: '#000'}} title="了解我们"/>*/}
                        </div>
                    </div>
                    <div className={cx('reverseTriangle1')}>
                        <svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 142h1280V0L640 112 0 0" />
                        </svg>
                    </div>
                </section>

                <section className={cx('defenseTitle')}>
                    <h1>探索蜂巢</h1>
                    {/*<p>集网络数据管理、恶意流量检测、恶意行为分析、攻击溯源与事件还原为一体，基于大数据技术智能数据汇总与挖掘的审计类产品，为网络管理提供了全新、高效的解决方案</p>*/}
                    {/*<p>海量采集，实时分析，高效诊断，精准溯源</p>*/}
                    <p>对网络中的行为异常、应用异常实时发现并进行智能化的回溯与分析、提升对关键业务系统的运行保障能力和问题处置效率</p>
                </section>

                {/*<section>*/}
                    {/*<div className={cx('adverContainer')}>*/}
                        {/*{this.renderAdverCell()}*/}
                    {/*</div>*/}
                {/*</section>*/}

                <section className={cx('defendInfoAll')}>
                    <div className={cx('defendInfo')}>
                        <div className={cx('defendInfoLeft')}>
                            <div className={cx('defendImageWrapper')}>
                                <img src='../static/img/beehive.png' alt="" className={cx('defendImage')}/>
                            </div>
                            <img src='../static/img/defense_bottom.png' alt=""
                                 className={cx('defendBottomImage')}/>
                        </div>
                        {/*<div className={cx('defendInfoRight')}>*/}
                            {/*<h2></h2>*/}
                            {/*<ul>*/}
                                {/*<li>*/}
                                    {/*<span>先进数据处理技术</span>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<span>可扩展数据存储</span>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<span>全面数据挖掘</span>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<span>虚拟化沙箱技术</span>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<span>智能化安全检测</span>*/}
                                {/*</li>*/}

                            {/*</ul>*/}
                        {/*</div>*/}
                    </div>
                </section>

                <section className={cx('defenseInfoAll')}>
                    <div className={cx('defenseInfo')}>
                        <div className={cx('defenseInfoLeft')}>
                            <h2>智能化的分析</h2>
                            <ul>
                                <li>
                                    <span>网络原始通信数据的实时采集管理</span>
                                </li>
                                <li>
                                    <span>历史数据挖掘与分析</span>
                                </li>
                                <li>
                                    <span>高效、海量的网络数据存储</span>
                                </li>
                                <li>
                                    <span>网络攻击溯源与还原</span>
                                </li>
                                <li>
                                    <span>网络与应用安全威胁检测</span>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('defenseInfoRight')}>
                            <div className={cx('defenseImageWrapper')}>
                                <img src='../static/img/defense-hive2.png' alt="" className={cx('defenseImage')}/>
                            </div>
                            <img src='../static/img/defense_bottom.png' alt="" className={cx('defenseBottomImage')}/>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        )
    }
}
