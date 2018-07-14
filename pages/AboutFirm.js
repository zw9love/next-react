/**
 * Created by wwsoaring on 2017/11/17.
 */
import React, {Component} from 'react';
import styles from '../static/css/AboutFirm.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import AdverCell from '../components/AdverCell'
import Footer from '../components/Footer'

let cx = cs.bind(styles)
export default class AboutFirm extends Component {


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

                title: '落地生根',
                info: '北京零平数据处理有限公司成立于2014年9月，注册资本1000万元，公司主要由从事信息安全行业多年的网络安全专业人员及中青年技术骨干组成。' +
                '经过几年的快速发展，紧跟国家网络安全战略的步伐，零平数据已经迅速成长为网络安全领域从事计算环境行为安全采集、分析、处理的行业新兴企业。',

                reverse: true,
                src: '../static/img/ablout.png',
                moreInfo: ''
            },
            {

                title: '抽枝发芽',
                info: '参照国家相关政策法规和标准要求，依托多年技术积累，研发“蜂”系列以计算环境为核心的网络安全产品。' +
                '秉承“以可信计算为基础、行为精准识别为手段、核心数据保护为目”的技术理念，通过指纹追踪、虚拟化防御、' +
                '访问行为深度自学习等自主核心技术，结合原始通信实时采集与管理、威胁情报分析、历史数据挖掘等手段，对于访问行为进行动态关联分析和实时监控。',

                reverse: false,
                src: '../static/img/ablout.png',
                moreInfo: ''
            },
            {

                title: '开花吐香',
                info: '未来，随着物联网、大数据、云计算、中国制造2025等技术理念的逐渐普及，网络安全的重要性将更为突出。零平数据将以先进的技术理念、' +
                '有力的技术保障能力以及踏实的技术作风，给用户带来更好的体验、更专 业的服务与技术支持。',

                reverse: true,
                src: '../static/img/ablout.png',
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
                <section  style={{backgroundImage: `url('../static/img/solut1.png')`, backgroundSize: 'cover'}} className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <h1>关于我们</h1>
                        {/*<div>*/}
                        {/*<ThreeLevelBtn centerStyle={{backgroundColor: '#fff', color: '#000'}} title="了解我们"/>*/}
                        {/*</div>*/}
                    </div>
                </section>

                <section>
                    <div className={cx('adverContainer')}>
                        {this.renderAdverCell()}
                    </div>
                </section>

                <Footer/>
            </div>
        )
    }
}
