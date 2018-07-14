/**
 * Created by wwsoaring on 2017/11/14.
 */
import React, {Component, PropTypes} from 'react';
import styles from '../static/css/PressCenter.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import Footer from '../components/Footer'

let cx = cs.bind(styles)
export default class PressCenter extends Component {

    constructor(props){
        super(props)
        this.jump = this.jump.bind(this)
    }

    jump(url){
        // let {history} = this.context.router
        // history.push({
        //     pathname: url,
        //     // state: {
        //     //     data: this.props.data
        //     // }
        // })
    }

    render() {
        return(
            <div>
                <Header/>
                <div  style={{backgroundImage: `url('../static/img/press_bg.jpg')`, backgroundSize: 'cover'}} className={cx('libContainer')}>
                    <h1 className={cx('h1')}>新闻中心</h1>
                    {/*<div className={cx('libWrapper')}>*/}
                        {/*<div className={cx('libLeft')}>*/}
                            {/*<div className={cx('libHoverCell')}>*/}
                                {/*<img src={require('../static/img/lib_left.png')} alt="" className={cx('libLeftImage')}/>*/}
                                {/*<div className={cx('libLeftShadow')}></div>*/}
                                {/*<div className={cx('libInfoWrapper', 'libInfoLeft')}>*/}
                                    {/*<p>25th / September / 2014</p>*/}
                                    {/*<h1>/公司成立</h1>*/}
                                    {/*<MoreInfo info="" fontStyle={{color: '#000'}}*/}
                                              {/*cellStyle={{position: 'relative', left: 0, bottom: 0}}/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className={cx('libRightTop')}>*/}
                            {/*<div className={cx('libHoverCell')}>*/}
                                {/*<img src={require('../static/img/lib_right_top.png')} alt=""*/}
                                     {/*className={cx('libLeftImage')}/>*/}
                                {/*<div className={cx('libLeftShadow')}></div>*/}
                                {/*<div className={cx('libInfoWrapper', 'libInfoRight')}>*/}
                                    {/*<p>6th / April / 2015</p>*/}
                                    {/*<h2>/公司中标国家XX局等保相关项目</h2>*/}
                                    {/*<MoreInfo info="" fontStyle={{color: '#000'}}*/}
                                              {/*cellStyle={{position: 'relative', left: 0, bottom: 0}}/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className={cx('libRightBottom')}>*/}
                            {/*<div className={cx('libHoverCell')}>*/}
                                {/*<img src={require('../static/img/lib_right_top.png')} alt=""*/}
                                     {/*className={cx('libLeftImage')}/>*/}
                                {/*<div className={cx('libLeftShadow')}></div>*/}
                                {/*<div className={cx('libInfoWrapper', 'libInfoRight')}>*/}
                                    {/*<p>15th / July / 2017</p>*/}
                                    {/*<h2>/公司中标XX省信息中心项目</h2>*/}
                                    {/*<MoreInfo info="" fontStyle={{color: '#000'}}*/}
                                              {/*cellStyle={{position: 'relative', left: 0, bottom: 0}}/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>

                <div className={cx('filters')}>
                    <div className={cx('filter-bar')}>
                        <ul className={cx('filter-buttons')}>
                            <li className={cx('is-active')}><a href="javascript:;" data-type="all" onClick={()=>{this.jump('')}}><span>零平事记</span></a></li>
                            <li><a href="javascript:;" data-type="news" onClick={()=>{this.jump('presscenter')}}><span>新闻事件</span></a></li>
                            <li><a href="javascript:;" data-type="press-release" onClick={()=>{this.jump('recruit')}}><span>加入我们</span></a></li>
                            <li><a href="javascript:;" data-type="broadcast" onClick={()=>{this.jump('contactus')}}><span>联系我们</span></a></li>
                        </ul>
                    </div>
                </div>

                <section className={cx('qt-body')}>
                    <div className={cx('news')}>
                        <div className={cx('news-container')}>

                            <div className={cx('news-list')}>
                                <div className={cx('news-logo')}>
                                    <img src='../static/img/qualification/logo-lp.gif' width="95" alt="新闻图片"/>
                                </div>
                                <div className={cx('news-text')}>
                                    <h2 className={cx('news-content')}>
                                        零平数据"蜂眼主机计算环境安全监控平台"入围2017年中央政府采购协议供货指定产品名录；
                                    </h2>
                                    <h2 className={cx('news-title')}> <a href="http://www.zycg.gov.cn/td_xxlcpxygh/products_by_brand?brand=%E9%9B%B6%E5%B9%B3%E6%95%B0%E6%8D%AE&category_id=2508&" target="_blank">-- 中央政府采购协议供货指定产品名录|零平数据"蜂眼主机计算环境安全监控平台"</a></h2>
                                </div>
                            </div>

                            <div className={cx('news-list')}>
                                <div className={cx('news-logo')}>
                                    <img src='../static/img/qualification/logo-lp.gif' width="95" alt="新闻图片"/>
                                </div>

                                <div className={cx('news-text')}>
                                    <h2 className={cx('news-content')}>
                                        零平数据"蜂巢全信息安全审计分析系统"入围2017年中央政府采购协议供货指定产品名录；
                                    </h2>
                                    <h2 className={cx('news-title')}> <a href="http://www.zycg.gov.cn/td_xxlcpxygh/products_by_brand?brand=%E9%9B%B6%E5%B9%B3%E6%95%B0%E6%8D%AE&category_id=7174&page=1" target="_blank">-- 中央政府采购协议供货指定产品名录|零平数据"蜂巢全信息安全审计分析系统"</a></h2>
                                </div>
                            </div>

                            <div className={cx('news-list')}>
                                <div className={cx('news-logo')}>
                                    <img src='../static/img/qualification/beeeye-sm.png' width="95" alt="新闻图片"/>
                                </div>
                                <div className={cx('news-text')}>
                                    <h2 className={cx('news-content')}>
                                        2017年10月30日，蜂眼主机计算环境安全监控平台获得《涉密信息系统产品检测证书》；
                                    </h2>
                                    <h2 className={cx('news-title')}> <a href="" target="_blank" /></h2>
                                </div>
                            </div>

                            <div className={cx('news-list')}>
                                <div className={cx('news-logo')}>
                                    <img src='../static/img/qualification/hive-aqzs.png' width="95" alt="新闻图片"/>
                                </div>
                                <div className={cx('news-text')}>
                                    <h2 className={cx('news-content')}>
                                        2017年10月18日，蜂巢全信息安全审计分析系统获得《中国国家信息安全产品认证证书》；
                                    </h2>
                                    <h2 className={cx('news-title')}><a href="" target="_blank" /></h2>
                                </div>
                            </div>

                            <div className={cx('news-list')}>
                                <div className={cx('news-logo')}>
                                    <img src='../static/img/qualification/beeeye-licence.png' alt="新闻图片"/>
                                </div>
                                <div className={cx('news-text')}>
                                    <h2 className={cx('news-content')}>
                                        2017年4月7日，蜂眼主机计算环境安全监控平台获得《计算机系统安全专用产品销售许可证》；
                                    </h2>
                                    <h2 className={cx('news-title')}><a href="" target="_blank" /></h2>
                                </div>
                            </div>

                            <div className={cx('news-list')}>
                                <div className={cx('news-logo')}>
                                    <img src='../static/img/qualification/beehive-dj.png'  width="95" alt="新闻图片"/>
                                </div>
                                <div className={cx('news-text')}>
                                    <h2 className={cx('news-content')}>
                                        2016年12月1日，蜂巢全信息安全审计分析系统获得中华人民共和国国家版权局《计算机软件著作权登记证书》；
                                    </h2>
                                    <h2 className={cx('news-title')}><a href="" target="_blank" /></h2>
                                </div>
                            </div>

                            <div className={cx('news-list')}>
                                <div className={cx('news-logo')}>
                                    <img src='../static/img/qualification/beeeye-dj.png' width="95" alt="新闻图片"/>
                                </div>
                                <div className={cx('news-text')}>
                                    <h2 className={cx('news-content')}>
                                        2016年12月1日，蜂眼主机计算环境安全监控平台获得中华人民共和国国家版权局《计算机软件著作权登记证书》；
                                    </h2>
                                    <h2 className={cx('news-title')}><a href="" target="_blank" /></h2>
                                </div>
                            </div>

                            <div className={cx('news-list')}>
                                <div className={cx('news-logo')}>
                                    <img src='../static/img/qualification/beehive-licence.png' alt="新闻图片"/>
                                </div>
                                <div className={cx('news-text')}>
                                    <h2 className={cx('news-content')}>
                                        2016年9月30日，蜂巢全信息安全审计分析系统获得《计算机系统安全专用产品销售许可证》；
                                    </h2>
                                    <h2 className={cx('news-title')}><a href="https://www.baidu.com/" target="_blank" /></h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <Footer/>

            </div>

    //         <div className={cx('press')}>
    // <div className={cx('pressHoverCell')} >
    //
    // <img src={require('../static/img/lib_right_top.png')} alt=""
    //     className={cx('pressImage')}/>
    // <div className={cx('pressShadow')}></div>
    //     <div className={cx('pressInfo', 'pressInfoRight')}>
    // <p>1th / October / 2016</p>
    //     <h2>蜂巢网络全信息安全审计系统V1.0正式发布</h2>
    //     <MoreInfo info="" fontStyle={{color: '#000'}}
    //     cellStyle={{position: 'relative', left: 0, bottom: 0}}/>
    // </div>
    //     </div>
    //     </div>
    //
    //     <div className={cx('press')}>
    // <div className={cx('pressHoverCell')}>
    // <img src={require('../static/img/lib_right_top.png')} alt=""
    //     className={cx('pressImage')}/>
    // <div className={cx('pressShadow')}></div>
    //     <div className={cx('pressInfo', 'pressInfoRight')}>
    // <p>10th / February / 2017</p>
    //     <h2>蜂眼计算环境安全监控平台V1.0正式发布</h2>
    //     <MoreInfo info="" fontStyle={{color: '#000'}}
    //     cellStyle={{position: 'relative', left: 0, bottom: 0}}/>
    // </div>
    //     </div>
    //     </div>
    //
    //     <div className={cx('press')}>
    // <div className={cx('pressHoverCell')}>
    // <img src={require('../static/img/lib_right_top.png')} alt=""
    //     className={cx('pressImage')}/>
    // <div className={cx('pressShadow')}></div>
    //     <div className={cx('pressInfo', 'pressInfoRight')}>
    // <p>10th / February / 2017</p>
    //     <h2>蜂眼计算环境安全监控平台V1.0正式发布</h2>
    //     <MoreInfo info="" fontStyle={{color: '#000'}}
    //     cellStyle={{position: 'relative', left: 0, bottom: 0}}/>
    // </div>
    //     </div>
    //     </div>
    //     {/*<section className={cx('presslevebtn')} >*/}
    //     {/*<ThreeLevelBtn centerStyle={{backgroundColor: '#fff', color: '#000'}} title="更多新闻"/>*/}
    //     {/*</section>*/}


        )
    }
}

// PressCenter.contextTypes = {
//     router: PropTypes.object.isRequired
// }
