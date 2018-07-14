/**
 * Created by zengwei on 2018/06/27.
 */

import React, {Component} from 'react';
import styles from '../static/css/ProductPrice.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import Footer from '../components/Footer'

let cx = cs.bind(styles)
export default class ProductPrice extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mainData: [
                {
                    title: '蜂眼主机计算环境安全监控平台',
                    tableData: [
                        {modelName: 'M16S06-100', type: '硬件', num: '1', price: '¥580,000.00'},
                        {modelName: 'M16S06-2000', type: '硬件', num: '1', price: '¥650,000.00 '},
                        {modelName: 'M16S06-5000', type: '硬件', num: '1', price: '¥860,000.00 '}
                    ]
                },
                {
                    title: '蜂巢全信息安全审计分析系统',
                    tableData: [
                        {modelName: 'B-T3-100', type: '硬件', num: '1', price: '¥680,000.00'},
                        {modelName: 'B-T6-200', type: '硬件', num: '1', price: '¥760,000.00'},
                        {modelName: 'B-T10-300', type: '硬件', num: '1', price: '¥910,000.00 '}
                    ]
                }
            ]
        }

        this.renderMainCell = this.renderMainCell.bind(this)
    }

    renderMainCell(){
        let data = this.state.mainData
        let arr = []
        data.map((val, index) => {
            // let style = index === data.length - 1 ? {marginBottom: 0} : {}
            arr.push(
                <div className={cx('main-cell')} key={index}>
                    {/*<p>蜂眼主机计算环境安全监控平台</p>*/}
                    <table>
                        <thead>
                            <tr>
                                <td colSpan={4} className={cx('title')}>{val.title}</td>
                            </tr>
                            <tr>
                                <td>产品型号</td>
                                <td>产品形式</td>
                                <td>数量</td>
                                <td>市场价（元）</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                val.tableData.map((val, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{val.modelName}</td>
                                            <td>{val.type}</td>
                                            <td>{val.num}</td>
                                            <td>{val.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        })

        return arr;
    }

    render() {
        return (
            <div>
                <Header/>
                <div style={{
                    backgroundImage: `url('../static/img/header_bg1.jpg')`,
                    backgroundSize: 'cover'
                }}
                     className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <h1>零平数据</h1>
                        <p>计算环境为核心的网络安全解决方案探索者</p>
                    </div>
                    <div className={cx('reverseTriangle1')}>
                        <svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 142h1280V0L640 112 0 0"/>
                        </svg>
                    </div>
                </div>

                {/*<div style={{textAlign: 'center'}}>*/}
                {/*<img src={require('../static/img/price.jpg')} style={{width: '50%'}}/>*/}
                {/*</div>*/}

                <div className={cx('main')}>
                    <p>北京零平数据处理有限公司   产品和服务报价表</p>
                    {this.renderMainCell()}
                </div>

                <div className={cx('info')}>
                    <p>报价说明 ：</p>
                    <p>1、本产品报价为人民币报价。</p>
                    <p>2、蜂眼主机计算环境安全监控平台、蜂巢全信息安全审计分析系统产品的报价均为单点产品报价。</p>
                    <p>3、以上产品报价含三年的服务费和一次产品集中培训。</p>
                    <p>4、服务包括：电话咨询、指导；E-mail问题解答服务；产品软件版本升级等。</p>
                    <p>5、保修期外产品服务费：产品成交价*25％。</p>
                    <p>6、本报价单最终解释权归北京零平数据处理有限公司所有。</p>
                </div>

                <Footer/>

            </div>


        )
    }
}
