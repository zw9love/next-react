/**
 * Created by zw9love on 2017/8/4.
 */
import "../static/css/main.css"
import Router from 'next/router'
import React, {Component, PropTypes} from 'react';
import Head from '../components/head'
import styles from '../static/css/Header.css'
import cs from 'classnames/bind'
import SecondMenuCell from '../components/SecondMenuCell'
import axios from "axios/index";

let cx = cs.bind(styles)

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            flag: true,
            scrollZero: true,
            menuData: [
                {
                    name: '产品与服务',
                    hoverActive: false,
                    secondMenu: [
                        {
                            title: '产品',
                            info: [{name: '蜂眼', url: '/BeeEye'}, {name: '蜂巢', url: '/BeeHive'}]
                        },
                        {
                            title: '服务',
                            info: [{name: '网络安全服务', url: '/SecurityService'}]
                        }
                    ]
                },
                {
                    name: '解决方案',
                    hoverActive: false,
                    secondMenu: [

                        {
                            title: '解决方案',
                            info: [{name: '网络应用方案', url: '/Solution'}]
                        }
                    ]
                },
                {
                    name: '关于公司',
                    hoverActive: false,
                    secondMenu: [
                        {
                            title: '我们的团队',
                            info: [{name: '招聘', url: '/Recruit'}]
                        },
                        {
                            title: '新闻',
                            info: [{name: '新闻中心', url: '/PressCenter'}]
                        }
                    ]
                }
            ],
            hoverActive: false
        }

        this.handleScroll = this.handleScroll.bind(this)
        this.renderMenu = this.renderMenu.bind(this)
        this.jump = this.jump.bind(this)
        this.indexClick = this.indexClick.bind(this)
    }

    renderLogin() {
        return (
            <div className={cx('topWrapper')}>
                <div className={cx('loginWrapper')}>
                    <ul>
                        <li onClick={() => {
                            this.jump('/ContactUs')
                        }}><span className={cx('loginFontCell')}>联系</span></li>
                        {/*<li ><span className={cx('loginFontCell')}>登录</span></li>*/}
                        <li><span className={cx('loginFontCell')}>010-57235115</span></li>
                    </ul>
                </div>
            </div>
        )
    }

    jump(url) {
        Router.push({
            pathname: url
        })
        // let {history} = this.context.router
        // history.push({
        //     pathname: url,
        //     // state: {
        //     //     data: this.props.data
        //     // }
        // })
    }


    renderMenu(flag) {
        let data = this.state.menuData
        let arr = []
        let smc_style = {}
        let smh_style = {}
        let sms_style = {}
        if (flag) {
            smc_style = {top: 70}
            smh_style = {display: 'none'}
            // sms_style = {top:110}
        } else {
            smc_style = {top: 100}
            sms_style = {top: 20}
        }
        data.map((val, index) => {
            let secondMenu = val.secondMenu
            arr.push(
                <li key={index}>
                    <span className={cx('menuFontCell')}>{val.name}</span>
                    {/*<span className={cx('menuHoverCell')}/>*/}
                    <div className={cx('secondMenuContainer')} style={smc_style}>
                        {
                            !flag ? <div className={cx('menuCellShadow')}/> : null
                        }
                        <ul>
                            {
                                secondMenu.map((val2, index2) => {
                                    return (
                                        <li key={index2}>
                                            <ul>
                                                <li>{val2.title}</li>
                                                {
                                                    val2.info.map((val3, index3) => {
                                                        return <SecondMenuCell key={index3} name={val3.name}
                                                                               url={val3.url}/>
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/*<div className={cx('secondMenuHover')} style={smh_style}></div>*/}
                    <div style={{position: 'relative'}}>
                        <div className={cx('square')} style={sms_style}/>
                    </div>
                </li>
            )
        })

        return arr
    }


    handleScroll() {
        let scroll = document.documentElement.scrollTop || document.body.scrollTop
        scroll > 0 ? this.setState({scrollZero: false}) : this.setState({scrollZero: true})
    }

    componentDidMount() {
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll)
        // 解决Router跳转之后不刷新。。。。。。
        Router.onRouteChangeStart = url => {location.href = url}
        // console.log(this.refs)
        // 统一拦截https请求
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            // config.url = '/api' + config.url
            config.url = 'http://localhost' + config.url  // 需要后台设置  header("Access-Control-Allow-Origin:*")
            console.log('来了axios请求')
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    indexClick() {
        this.jump('/')
    }

    render() {
        let flag = this.state.scrollZero
        return (
            <div className={cx('container', {'containerTop': flag})}>
                <Head title="零平数据" />
                {
                    flag ? this.renderLogin() : null
                }
                <div className={cx('wrapper')}>
                    <div className={cx('logoWrapper', {'logoTopWrapper': flag})} onClick={this.indexClick}>
                        {
                            flag ? <img src='../static/img/logo2.gif'/> :
                                <img src='../static/img/logo.gif'/>
                        }
                    </div>
                    <div className={cx('menuWrapper', {'menuTopWrapper': flag})}>
                        <ul>
                            <li onClick={() => {
                                this.jump('/')
                            }}>
                                <span className={cx('menuFontCell')}>首页</span>
                            </li>
                            {this.renderMenu(flag)}
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill="#0a0a0a"
                                          d="M13.6 12.38a7.43 7.43 0 0 0 1.8-4.84 7.7 7.7 0 1 0-7.7 7.55 7.75 7.75 0 0 0 4.5-1.44l6.16 6.06a1 1 0 0 0 1.36 0 .93.93 0 0 0 0-1.33zM1.54 7.54a6.15 6.15 0 1 1 6.15 6 6.1 6.1 0 0 1-6.16-6" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

