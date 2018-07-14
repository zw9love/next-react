import Link from 'next/link'
import axios from 'axios';
import {connect} from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../store'
import Router from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MoreInfo from '../components/MoreInfo'
import ThreeLevelBtn from '../components/ThreeLevelBtn'
import AdverCell from '../components/AdverCell'
// import Head from '../components/head'
import {Component} from "react";
import styles from '../static/css/Home.css'
import cs from 'classnames/bind'
let cx = cs.bind(styles)

class Index extends Component {
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
        this.renderDefenseCell = this.renderDefenseCell.bind(this)
    }

    renderBorderWidth() {
        // this.context.router.history.push("/otherPath")
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

    // static async getInitialProps () {
    //     // eslint-disable-next-line no-undef
    //     // const res = await fetch('https://api.github.com/repos/zeit/next.js')
    //     // const json = await res.json()
    //     // return { stars: json.stargazers_count }
    //
    //     // const {data} = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull', {
    //     //     params: {
    //     //         fsyms: 'BTC,ETH,XRP,BCH,LTC,ADA,NEO,XLM,EOS,DASH,IOT,XMR,XEM,ETC,TRX,VEN,LSK,QTUM,BTG,USDT',
    //     //         tsyms: 'USD'
    //     //     }
    //     // });
    //
    //     const {data} = await axios.get('/test.php', {});
    //     return {}
    // }

    static getInitialProps ({ store, req }) {
        // console.log(store)
        // console.log(111222333)
        // console.log(req)
        return {}
    }

    async componentDidMount() {
        this.renderData();
        // const {data} = await axios.get('/test.php', {})
        // console.log(data)
        console.log(this.props)
    }

    renderData() {

        let defenseData = [
            {
                title: '蜂巢网络全信息安全审计分析系统',
                info: '智能化的回溯分析',
                src: '../static/img/safe1.png',
                url: '/BeeHive'
            },
            {
                title: '蜂眼主机计算环境安全监控平台',
                info: '可信计算+智能检测+安全运行',
                src: '../static/img/safe2.png',
                url: '/BeeEye'
            },
            {
                title: '网络安全服务',
                info: '网站技术服务+信息测试服务+信息安全培训服务',
                src: '../static/img/safe3.png',
                url: '/SecurityService'
            }
        ]

        let json = {
            title: '“蜂”系列以计算环境安全为核心的解决方案',
            info: '通过自主研发的指纹追踪技术、虚拟化防御技术、访问行为深度自学习技术，结合威胁情报对于访问行为进行动态关联分析和实时监控，感知未知风险和威胁、实时阻断攻击链、修复安全盲区，“蜂”系列产品从主机、应用、网络等方面为用户信息系统提供有力安全保障。',
            reverse: false,
            src: '../static/img/protect.gif',
            moreInfo: '“蜂”系列产品',
        }

        let data = [
            {
                title: '网络应用安全解决方案',
                info: '',
                reverse: true,
                src: '../static/img/adver.jpg',
                moreInfo: '了解更多'
            }

        ]

        this.setState({ defenseData: defenseData,protectAdverData: json, adverData: data })
    }

    renderAdverCell() {
        let data = this.state.adverData
        let arr = []
        data.map((val, index) => {
            arr.push(<AdverCell data={val} key={index}/>)
        })

        return arr;
    }

    defenseCellClick(url){
        // let {history} = this.context.router
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

    renderDefenseCell() {
        let data = this.state.defenseData
        let arr = []
        data.map((val, index) => {
            arr.push(
                <li key={index} onClick={()=>{this.defenseCellClick(val.url)}}>
                    <img src={val.src} alt="" className={cx('bgImage')}/>
                    <div className={cx('safeCellFontWrapper')}>
                        <p>{val.title}</p>
                        <h1>{val.info}</h1>
                        <MoreInfo info="查看产品" classArrow={cx('arrowImage')} classLine={cx('bottomLine')} cellStyle={{bottom: 20}} url={val.url}/>
                    </div>
                </li>
            )
        })

        return arr;
    }

    add(){
        this.props.dispatch(incrementCount())
    }


    render(){
        return (
            <div>
                {/*<Head title="零平数据" />*/}
                <h1>{this.props.count}</h1>
                <button onClick={this.add.bind(this)}>+1</button>
                {/*<Header />*/}
                <div className={cx('container')} style={{backgroundImage: `url('../static/img/header_bg1.jpg')`, backgroundSize: 'cover'}}>
                    <div className={styles.wrapper}>
                        <h1>零平数据</h1>
                        <p>计算环境为核心的网络安全解决方案探索者</p>
                    </div>
                    <div className={cx('reverseTriangle1')}>
                        <svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 142h1280V0L640 112 0 0"/>
                        </svg>
                    </div>
                </div>
                <section className={cx('safeIntroContainer')}>
                    <p>“蜂”系列计算环境安全解决方案</p>
                    <h1>全面的计算环境安全解决方案</h1>
                </section>

                <section style={{backgroundColor: '#edf0f4'}}>

                    <div className={cx('safeCellContainer')}>
                        <ul>
                            {this.renderDefenseCell()}
                        </ul>
                    </div>

                    {/*<div className={cx('defenseTitle')}>*/}
                    {/*<h1>探索蜂眼</h1>*/}
                    {/*<p>可信计算技术为基础，以有效的访问控制为核心，构造完整可信的信息安全立体防护体系</p>*/}
                    {/*</div>*/}
                    {/*<div className={cx('defenseInfo')}>*/}
                    {/*<div className={cx('defenseInfoLeft')}>*/}
                    {/*<ul>*/}
                    {/*<li>*/}
                    {/*<span>数字证书作为用户身份的唯一标识</span>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<span>完整性保护</span>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<span>开创“黑白灰名单”机制</span>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<span>多种虚拟化系统</span>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<span>软、硬件资产监控</span>*/}
                    {/*</li>*/}
                    {/*</ul>*/}
                    {/*</div>*/}
                    {/*<div className={cx('defenseInfoRight')}>*/}
                    {/*<div className={cx('defenseImageWrapper')}>*/}
                    {/*<img src={require('../static/img/defense.png')} alt="" className={cx('defenseImage')}/>*/}
                    {/*</div>*/}
                    {/*<img src={require('../static/img/defense_bottom.png')} alt=""*/}
                    {/*className={cx('defenseBottomImage')}/>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    <AdverCell data={this.state.protectAdverData} />

                    <div className={cx('btnContainer')} >
                        <ul>
                            <li>
                                <ThreeLevelBtn  title="招聘中心" path="/Recruit"/>
                            </li>
                            <li>
                                <ThreeLevelBtn  title="新闻中心" path="/PressCenter"/>
                            </li>
                            <li>
                                <ThreeLevelBtn  title="联系我们" path="/ContactUs"/>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('reverseTriangle2')} >
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
                             viewBox="0 0 100 102" preserveAspectRatio="none">
                            <path d="M0 0 L50 100 L100 0 Z" />
                        </svg>
                    </div>
                </section>

                <section className={cx('section-contac')}>
                    {/*<div className={cx('adverContainer')}>*/}
                    {/*{this.renderAdverCell()}*/}
                    {/*</div>*/}
                    <div className={cx('area')}>
                        <div className={cx('title')}>
                            <div className={cx('section-title')}>
                                <h1>这些行业都在体验“蜂”系列产品</h1>
                            </div>
                        </div>
                        <div className={cx('holder')}>
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <img className={cx('log')} src='../static/img/case-1.jpg'/>
                                        <div className={cx('pressShadow')}>电力行业</div>
                                    </td>
                                    <td >
                                        <img className={cx('log')} src='../static/img/case-2.jpg'/>
                                        <div className={cx('pressShadow')}>政府机关</div>
                                    </td>
                                    <td >
                                        <img className={cx('log')} src='../static/img/case-3.jpg'/>
                                        <div className={cx('pressShadow')}>大型企业</div>
                                    </td>
                                    <td >
                                        <img className={cx('log')} src='../static/img/case-4.jpg' />
                                        <div className={cx('pressShadow')}>金融证券</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td >
                                        <img className={cx('log')} src='../static/img/case-5.jpg'/>
                                        <div className={cx('pressShadow')}>医疗卫生</div>
                                    </td>
                                    <td >
                                        <img className={cx('log')} src='../static/img/case-6.jpg'/>
                                        <div className={cx('pressShadow')}>交通运输</div>
                                    </td>
                                    <td >
                                        <img className={cx('log')} src='../static/img/case-7.jpg'/>
                                        <div className={cx('pressShadow')}>教育科研</div>
                                    </td>
                                    <td >
                                        <img className={cx('log')} src='../static/img/case-8.jpg' />
                                        <div className={cx('pressShadow')}>能源行业</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>


                <Footer />

            </div>
        )
    }
}


// export default () => (
//   <div>
//     <Head title="Home" />
//     {/*<Nav />*/}
//     <div className="hero">
//       <p className="test">Welcome to Next!</p>
//       {/*<h1 className="title">Welcome to Next!</h1>*/}
//       {/*<p className="description">To get started, edit <code>pages/index.js</code> and save to reload.</p>*/}
//
//       {/*<div className="row">*/}
//         {/*<Link href="https://github.com/zeit/next.js#getting-started">*/}
//           {/*<a className="card">*/}
//             {/*<h3>Getting Started &rarr;</h3>*/}
//             {/*<p>Learn more about Next on Github and in their examples</p>*/}
//           {/*</a>*/}
//         {/*</Link>*/}
//         {/*<Link href="https://open.segment.com/create-next-app">*/}
//           {/*<a className="card">*/}
//             {/*<h3>Examples &rarr;</h3>*/}
//             {/*<p>*/}
//               {/*Find other example boilerplates on the <code>create-next-app</code> site*/}
//             {/*</p>*/}
//           {/*</a>*/}
//         {/*</Link>*/}
//         {/*<Link href="https://github.com/segmentio/create-next-app">*/}
//           {/*<a className="card">*/}
//             {/*<h3>Create Next App &rarr;</h3>*/}
//             {/*<p>Was this tool helpful? Let us know how we can improve it</p>*/}
//           {/*</a>*/}
//         {/*</Link>*/}
//       {/*</div>*/}
//     </div>
//     <style jsx>{`
//       .hero {
//         width: 100%;
//         color: #333;
//       }
//       .title {
//         margin: 0;
//         width: 100%;
//         padding-top: 80px;
//         line-height: 1.15;
//         font-size: 48px;
//       }
//       .title, .description {
//         text-align: center;
//       }
//       .row {
//         max-width: 880px;
//         margin: 80px auto 40px;
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//       }
//       .card {
//         padding: 18px 18px 24px;
//         width: 220px;
//         text-align: left;
//         text-decoration: none;
//         color: #434343;
//         border: 1px solid #9B9B9B;
//       }
//       .card:hover {
//         border-color: #067df7;
//       }
//       .card h3 {
//         margin: 0;
//         color: #067df7;
//         font-size: 18px;
//       }
//       .card p {
//         margin: 0;
//         padding: 12px 0 0;
//         font-size: 13px;
//         color: #333;
//       }
//     `}</style>
//   </div>
// )

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps)(Index)

