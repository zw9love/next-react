import React, {Component} from 'react';
import styles from '../static/css/ContactUs.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import Footer from '../components/Footer'
let cx = cs.bind(styles)
export default class ContactUs extends Component {

    render() {
        return(
            <div>
                <Header/>
                <section  style={{backgroundImage: `url('../static/img/solut1.png')`, backgroundSize: 'cover'}} className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <h1>联系我们</h1>
                        {/*<div>*/}
                        {/*<ThreeLevelBtn centerStyle={{backgroundColor: '#fff', color: '#000'}} title="了解我们"/>*/}
                        {/*</div>*/}
                    </div>
                </section>

                <section className={cx('contact')}>
                    <div className={cx('area')}>

                        <div className={cx('title')}>
                            <h1>联系我们</h1>
                        </div>

                        <div className={cx('row')}>
                            <div className={cx('contact-info')}>
                                <p>零平数据专注于网络安全产品研发、咨询与服务。 基于多年安全行业经验，研发具有自主知识产权的信息安全产品，
                                    形成了一套具有层层防御、里应外合特色的网络安全解决方案。同时，公司注重网络安全前沿技术的研究和积累，
                                    拥有自己的网络安全研究实验室，在安全运维、渗透测试等方面具有较强的实力和能力。</p>
                                <h2>
                                    电话：010-57235115<br/>
                                    E-mail:info@zeronedata.cn<br/>
                                    邮编：100020<br/>
                                    地址: 北京市朝阳区安定门外大街1号信义大厦11层<br/>
                                </h2>
                            </div>

                            <div className={cx('offset')}>
                                <form className={cx('contact-form')}>
                                    <div className={cx('col-name')}><input type="text" name="name" required="required" placeholder="Name*"/></div>
                                    <div className={cx('col-name')}><input type="email" name="email" required="required" placeholder="Email*"/></div>
                                    <div className={cx('col-name')}><input type="text" name="subject" placeholder="Subject"/></div>
                                    <div className={cx('col-name')}><input type="text" name="website" placeholder="Website"/></div>
                                    <div className={cx('col-message')}><textarea name="message" required="required" cols="30" rows="7" placeholder="Message*" /></div>
                                    <div className={cx('col-submit')}><input type="submit" name="submit" value="Send Message" className={cx('btn')}/></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
            </div>
        )
    }
}
