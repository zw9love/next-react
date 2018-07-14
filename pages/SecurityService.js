/**
 * Created by wwsoaring on 2017/12/18.
 */
import Router from 'next/router'
import React, {Component} from 'react';
import styles from '../static/css/SecurityService.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import Footer from '../components/Footer'
let cx = cs.bind(styles)
export default class SecurityService extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div  style={{backgroundImage: `url('../static/img/beeneedle_bg.png')`, backgroundSize: 'cover'}} className={cx('container')}>
                    <div className={cx('wrapper')}>
                        <p />
                        <h1>网络安全服务</h1>
                        {/*<div>*/}
                            {/*<ThreeLevelBtn centerStyle={{backgroundColor: '#fff', color: '#000'}} title="了解我们"/>*/}
                        {/*</div>*/}
                    </div>
                    <div className={cx('reverseTriangle1')}>
                        <svg viewBox="0 0 1280 125" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 142h1280V0L640 112 0 0" />
                        </svg>
                    </div>
                </div>

                <section className={cx('contact')}>
                    <div className={cx('area')}>

                            <div className={cx('title')}>
                                <div className={cx('section-title')}>
                                    <h1>网站渗透测试技术服务</h1>

                                </div>
                            </div>

                            <div className={cx('offset')}>

                                <table >
                                    <tbody>
                                    <tr className={cx('row-tr')}>
                                        <td >阶段</td>
                                        <td >高端安全运维(定制服务)</td>
                                        <td >渗透测试-高级服务</td>
                                        <td >渗透测试-标准服务</td>
                                        <td >网站安全体检</td>
                                    </tr>
                                    <tr>
                                        <td>专业安全工具扫描</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                    </tr>
                                    <tr>
                                        <td>被动式信息收集</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                    </tr>
                                    <tr>
                                        <td>*安全误配置</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>*提权漏洞</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>*代码逻辑漏洞测试</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>*业务逻辑漏洞测试</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>*社会工程学</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>*代码安全审计</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>*专业报告和修复建议</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                    </tr>
                                    <tr>
                                        <td>*专家答疑</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>*回归测试</td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td><img src='../static/img/dui.png' /></td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>团队可靠性</td>
                                        <td><img src='../static/img/dui.png' width="30"/></td>
                                        <td><img src='../static/img/dui.png' width="30"/></td>
                                        <td><img src='../static/img/dui.png' width="30"/></td>
                                        <td><img src='../static/img/dui.png' width="30"/></td>
                                    </tr>
                                    <tr>
                                        <td>网络安全检测证明</td>
                                        <td><img src='../static/img/dui.png' width="30"/></td>
                                        <td><img src='../static/img/dui.png' width="30"/></td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>*应急响应</td>
                                        <td><img src='../static/img/dui.png' width="30" alt=""/></td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        <p>用户网站由于暴露在互联网上经常受到各种侵扰，以及各监管机构的检查测试。零平数据提供网站的渗透测试目标主要是发现更多的安全漏洞和弱点风险。</p>
                    </div>
                </section>

                <section className={cx('contact2')}>
                    <div className={cx('title2')}>
                        <div className={cx('section-title2')}>
                            <h1>信息系统渗透测试服务</h1>
                            <h5>渗透测试服务是由零平数据的渗透测试专家, 模拟黑客的攻击方法，对信息系统的安全现状进行评估的一种方法。
                                渗透测试过程包括对系统的弱点、技术缺陷或漏洞的主动分析,并通过对发现的漏洞进行利用,从而达到测试目的。
                                渗透测试根据发起的地点及方式不同,分为外部渗透测试EPTS（External Penetration Test Service）
                                和内部渗透测试IPTS（Internal Penetration Test Service）。</h5>
                            {/*<h2>外部渗透测试</h2>*/}
                            {/*<h5>外部渗透测试EPTS通过Internet发起，对客户的Web站点，Mail服务器等可以通过Internet访问的主机和设备进行渗透。*/}
                                {/*外部渗透测试可以测试当前网络防火墙及其他安全措施对站点的防护能力，及时发现对外防御措施存在的漏洞或缺陷。</h5>*/}
                            {/*<h2>内部渗透测试</h2>*/}
                            {/*<h5>内部渗透测试IPTS从客户企业内部网络发起，对客户的各种应用系统和网络设备进行渗透。*/}
                                {/*内部渗透测试模拟黑客来自企业内部或者黑客已经控制个别内部主机的情况，*/}
                                {/*可以测试客户对内部机密信息的保护能力及内部网络系统的防护能力。</h5>*/}
                            {/*<h5>结合用户的实际需求进行渗透测试,提供渗透测试报告，并详细解释报告内容，包括发现的风险点及需要采取的补救措施。*/}
                                {/*在客户修补完成后，进行补充测试，确定所发现的漏洞已经被完全修复。</h5>*/}
                            <table>
                                <tbody>
                                <tr>
                                    <td>外部渗透测试</td>
                                    <td>
                                        <p>外部渗透测试EPTS通过Internet发起，对客户的Web站点，Mail服务器等可以通过Internet访问的主机和设备进行渗透。</p>
                                        <p>外部渗透测试可以测试当前网络防火墙及其他安全措施对站点的防护能力，及时发现对外防御措施存在的漏洞或缺陷。</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>内部渗透测试</td>
                                    <td>
                                        <p>内部渗透测试IPTS从客户企业内部网络发起，对客户的各种应用系统和网络设备进行渗透。</p>
                                        <p>内部渗透测试模拟黑客来自企业内部或者黑客已经控制个别内部主机的情况</p>
                                        <p>可以测试客户对内部机密信息的保护能力及内部网络系统的防护能力。</p>
                                        <p>结合用户的实际需求进行渗透测试,提供渗透测试报告，并详细解释报告内容，包括发现的风险点及需要采取的补救措施。</p>
                                        <p>在客户修补完成后，进行补充测试，确定所发现的漏洞已经被完全修复。</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className={cx('contact3')}>
                    <div className={cx('area3')}>

                        <div className={cx('title')}>
                            <div className={cx('section-title')}>
                                <h1>信息系统安全培训服务</h1>
                            </div>
                        </div>

                        <div className={cx('offset3')}>
                            <h2>WEB安全培训</h2>
                            <h5>随着Web2.0、社交网络、微博等等一系列新型的互联网产品的诞生，基于Web环境的互联网应用越来越广泛，企业信息化的过程中各种应用都架设在Web 平台上，
                                Web业务的迅速发展也引起黑客们的强烈关注，接踵而至的就是Web安全威胁的凸显，黑客利用网站操作系统的漏洞和Web服务程序的SQL注入漏洞等得到Web服务器的控制权限，
                                轻则篡改网页内容，重则窃取重要内部数据，更为严重的则是在网页中植入恶意代码，使得网站访问者受到侵害。
                                WEB安全培训课程基于OWASP TOP10 与国内主流漏洞所演化，包括但不限于：SQL注入、跨站脚本攻击、命令执行等。</h5>
                            <table >
                                <tbody>
                                <tr>
                                    <td className={cx('row-td')}>WEB安全基础</td>
                                    <td className={cx('tow-td')}>
                                        <p>基础信息安全意识</p>
                                        <p>OWASP TOP 10漏洞讲解</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('row-td')}>代码审计基础</td>
                                    <td className={cx('tow-td')}>
                                        <p>漏洞产生的原因</p>
                                        <p>代码审计的流程</p>
                                        <p>代码审计工具介绍</p>
                                        <p>漏洞简单利用</p>
                                        <p>完整的开源代码审计过程</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={cx('row-td')}>代码审计进阶</td>
                                    <td className={cx('tow-td')}>
                                        <p>高级SQL注入挖掘及应用</p>
                                        <p>PHPCMS 0day 分析</p>
                                        <p>跨站脚本漏洞挖掘方法</p>
                                        <p>变量覆盖概念</p>
                                        <p>变量覆盖常见代码与函数</p>
                                        <p>实例讲解变量覆盖漏洞挖掘</p>
                                        <p>变量覆盖漏洞利用</p>
                                        <p>PHPDISK 变量覆盖漏洞分析</p>
                                        <p>上传漏洞的挖掘方法</p>
                                        <p>文件包含的挖掘方法</p>
                                        <p>文件包含的利用方式</p>
                                        <p>代码执行漏洞挖掘</p>
                                        <p>代码执行漏洞的利用</p>
                                        <p>逻辑漏洞挖掘</p>
                                        <p>逻辑漏洞利用</p>
                                        <p>二次漏洞挖掘及利用</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <h2>系统安全培训</h2>
                        <h5>缓冲区溢出是一种非常普遍、非常危险的漏洞，在各种操作系统、应用软件中广泛存在。
                            利用缓冲区溢出攻击，可以导致程序运行失败、系统宕机、重新启动等后果。
                            更为严重的是，可以利用它执行非授权指令，甚至可以取得系统特权，
                            进而进行各种非法操作。系统安全培训涉及基础的缓冲区溢出原理，shellcode编写，漏洞高级利用等。</h5>

                        <table >
                            <tbody>
                            <tr>
                                <td className={cx('row-td')}>反汇编及逆向分析基础课程</td>
                                <td className={cx('tow-td')}>
                                    <p>C\C++语言基础</p>
                                    <p>C\C++基本语法及编程基础</p>
                                    <p>函数，数组及指针的使用</p>
                                    <p>结构体，类相关知识及使用</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('row-td')}>调试工具的使用</td>
                                <td className={cx('tow-td')}>
                                    <p>OllyDbg简介及使用</p>
                                    <p>WinDbg简介及使用</p>
                                    <p>IDA Pro 简介及使用</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('row-td')}>反汇编揭秘</td>
                                <td className={cx('tow-td')}>
                                    <p>汇编基础指令讲解</p>
                                    <p>整数类型，浮点数，字符，字符串，地址，指针，引用，常量等汇编表示形式</p>
                                    <p>C程序入口函数，main函数识别</p>
                                    <p>观察各种表达式求值过程(算数运算及赋值，关系逻辑运算，位运算，编译器优化)并实战逆向某个程序</p>
                                    <p>流程控制语句识别(if else语句，switch语句)</p>
                                    <p>函数工作原理(栈帧，ebp，esp寻址，函数参数，函数返回值)</p>
                                    <p>变量在内存中位置和访问方式(全局变量，局部变量，数组寻址)</p>
                                    <p>结构体和类的分析</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('row-td')}>系统漏洞挖掘基础</td>
                                <td className={cx('tow-td')}>
                                    <p>系统栈的工作原理</p>
                                    <p>shellcode编写及使用msf生成shellcode</p>
                                    <p>漏洞挖掘的基本方法</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <h2>系统安全培训</h2>
                        <table >
                            <tbody>
                            <tr>
                                <td className={cx('row-td')}>调试工具的使用</td>
                                <td className={cx('tow-td')}>
                                    <p>信息收集：Google Hacking信息搜索，Nmap、wwwscan、DirBuster等工具使用</p>
                                    <p>火狐浏览器插件使用</p>
                                    <p>漏洞扫描：Nessus，WVS等扫描工具使用</p>
                                    <p>社会工程学在渗透中的利用</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('row-td')}>攻击进行时</td>
                                <td className={cx('tow-td')}>
                                    <p>SQL注入技巧</p>
                                    <p>注入工具的使用：SQLMAP，Pangolin使用技巧</p>
                                    <p>XSS高级利用技巧：内网探测</p>
                                    <p>常规漏洞实战：上传漏洞，命令执行等</p>
                                    <p>暴力破解：Burpsuite，Hydra等工具实战</p>
                                    <p>隐蔽WEBSHELL的几种实现</p>
                                    <p>Metasploit渗透实践</p>
                                    <p>Kali安全渗透实践</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('row-td')}>检测躲避</td>
                                <td className={cx('tow-td')}>
                                    <p>WAF绕过技术</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('row-td')}>权限提升</td>
                                <td className={cx('tow-td')}>
                                    <p>Windows服务器常见的提权方法</p>
                                    <p>Linux服务器常见的提权方法</p>
                                </td>
                            </tr>
                            <tr>
                                <td className={cx('row-td')}>长期控制</td>
                                <td className={cx('tow-td')}>
                                    <p>木马免杀技术概述</p>
                                    <p>木马免杀方法</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </section>

                <Footer/>
            </div>
        )
    }
}
