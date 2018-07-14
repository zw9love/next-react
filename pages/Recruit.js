/**
 * Created by wwsoaring on 2018/1/2.
 */
import React, {Component} from 'react';
import styles from '../static/css/Recruit.css'
import cs from 'classnames/bind'
import Header from '../components/Header'
import Footer from '../components/Footer'

let cx = cs.bind(styles)
export default class Recruit extends Component {

    render() {
        return(
            <div>
                <Header/>

                <section  style={{backgroundImage: `url('../static/img/press_bg.jpg')`, backgroundSize: 'cover'}} className={cx('libContainer')}>
                    <h1 className={cx('h1')}>招聘中心</h1>
                </section>

                <section className={cx('defenseTitle')}>
                    <h1>加入我们</h1>
                    <p>零平数据专注于网络安全产品研发、咨询与服务。 基于多年安全行业经验，研发具有自主知识产权的信息安全产品，形成了一套具有层层防御、
                        里应外合特色的网络安全解决方案。同时，公司注重网络安全前沿技术的研究和积累，拥有自己的网络安全研究实验室，在安全运维、渗透测试
                        等方面具有较强的实力和能力。</p>
                </section>

                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>
                            <div className={cx('text-holder')}>
                                <h3>我们可以为你提供</h3>
                                <p>
                                    弹性制上班时间，让你工作更舒心；<br/>
                                    五险一金，加班打车报销、调休；<br/>
                                    餐补640元/月，零食供应、生日会等；<br/>
                                </p>
                            </div>
                            <div className={cx('text-holder')}>
                                <h3>投递简历</h3>
                                <p>
                                    请发送简历到：info@zeronedata.cn 标题请注明应聘方向。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={cx('defenseTitle')}>
                    <h1>职位信息</h1>
                    <p></p>
                </section>

                {/*软件测试工程师*/}
                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>

                            <div className={cx('text-holder')}>
                                <h5>软件测试工程师</h5>
                                <h6>任职要求</h6>
                                <p>
                                    计算机相关专业专科以上学历；<br/>
                                    1年以上软件测试经验；<br/>
                                    高度的责任感、积极的工作态度；<br/>
                                    有较强的逻辑分析能力和学习能力、良好的文档撰写能力；<br/>
                                    良好的团队精神和职业素质；<br/>
                                    有性能测试工作经验者优先；<br/>
                                </p>
                                <h6>技术要求</h6>
                                <p>
                                    掌握B/S、C/S架构的软件测试，能够独立完成测试工作；<br/>
                                    熟悉软件测试流程,掌握测试用例设计方法；<br/>
                                    熟练编写测试方案、测试用例、缺陷报告、测试报告等测试文档；<br/>
                                    熟悉Linux操作系统和主流数据库；<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*销售经理（北京）*/}
                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>

                            <div className={cx('text-holder')}>
                                <h5>销售经理（北京）</h5>
                                <h6>岗位职责</h6>
                                <p>
                                    在销售总监指导下，制定本年度个人的工作计划和销售目标；<br/>
                                    根据年度市场推广方案，协助市场部实施市场调研、产品推广，宣传公司形象，挖掘收集客户资源；<br/>
                                    组织客户管理工作，开拓和维持客户关系，对客户定期拜访，建立和完善客户关系网；<br/>
                                    根据年度销售任务，完成产品及服务的销售工作，向客户介绍公司产品，挖掘客户需求；<br/>
                                    配合项目经理，协调签约项目实施工作的内、外部关系，处理客户需求变化的商务内容；<br/>
                                    根据项目合同，及时回收项目款项。<br/>
                                </p>
                                <h6>任职要求</h6>
                                <p>
                                    本科及以上学历，计算机，市场营销等相关专业；<br/>
                                    性别不限；<br/>
                                    具备较强的人际沟通能力，及逻辑思维能力和团队合作精神；<br/>
                                    认真负责，吃苦耐劳，对工作有激情，有上进心；<br/>
                                    热爱销售工作，有强烈的成功欲望；<br/>
                                    善于发现问题，并有推动解决问题的能力；<br/>
                                    快速学习能力强，有一定的自我驱动力；<br/>
                                    形象较好，具备较强的亲和力；<br/>
                                    精力充沛，具备在较强压力下出色完成任务的能力。<br/>
                                </p>
                                <h6>优先录用条件</h6>
                                <p>
                                    有技术背景；<br/>
                                    安全行业背景；<br/>
                                    互联网行业背景。<br/>
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/*大数据分析师*/}
                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>

                            <div className={cx('text-holder')}>
                                <h5>大数据分析师</h5>
                                <h6>岗位职责</h6>
                                <p>
                                    通过大数据平台分析行业数据，完成统计与预测的工作；<br/>
                                    有海量数据处理经验，挖掘数据特征及潜在的关联，为运营提供参考依据；<br/>
                                    负责从数据的角度给出决策建议；<br/>
                                    行业数据的整理、统计、建模与分析，完成数据分析相关软件的设计与开发。<br/>
                                </p>
                                <h6>任职要求</h6>
                                <p>
                                    本科以上学历，3年以上工作经验；<br/>
                                    对Hadoop有实施经验，对基于hadoop、Spark、Storm、MapReduce、HDFS、YARN等技术开发大数据处理引擎有深入了解；<br/>
                                    熟悉Linux开发环境，具有良好的编程基础，掌握C/C++/Java/Python等至少一门高级编程语言；<br/>
                                    具备良好沟通能力和团队合作精神，工作认真细致，责任心强；<br/>
                                    具备较强的分析解决问题的能力，以及优秀的逻辑思维能力，对有挑战的问题充满激情。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*python开发工程师*/}
                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>

                            <div className={cx('text-holder')}>
                                <h5>python开发工程师</h5>
                                <h6>岗位职责</h6>
                                <p>
                                    利用python实现安全产品的相关功能；<br/>
                                    负责产品的核心功能增强以及新功能预研和demo。<br/>
                                </p>
                                <h6>技术要求</h6>
                                <p>
                                    设计过一种安全产品，或者深入了解过一种安全产品，多多益善；<br/>
                                    精通两种以上(lua,python,php等)的脚本编程技术，能够用脚本书写中等复杂的程序。<br/>
                                </p>
                                <h6>工作素质要求</h6>
                                <p>
                                    对网络安全攻防有浓厚的兴趣并愿意为之倾注大量精力；<br/>
                                    有较强的工作责任心、主动学习、团队沟通协作能力；<br/>
                                    能够承受高压力高强度的工作。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*安全顾问*/}
                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>

                            <div className={cx('text-holder')}>
                                <h5>安全顾问</h5>
                                <h6>岗位职责</h6>
                                <p>
                                    把握客户需求、协助销售做好竞争分析，负责排除销售技术障碍，与销售人员共同协作推广公司产品；<br/>
                                    负责公司产品及项目的售前技术支持，包括客户交流、需求分析、产品介绍、解决方案制定、项目实施规划撰写等；<br/>
                                    理解用户的需求，了解潜在用户对公司解决方案的要求，并根据客户的需求和实际情况，提供相应的解决方案和实施方案；<br/>
                                    及时了解业界趋势，汇总客户反馈意见并与后台研发积极沟通，从而提升产品在市场中的竞争力。<br/>
                                </p>
                                <h6>任职要求</h6>
                                <p>
                                    本科及以上学历，计算机、信息安全、网络、软件工程等相关专业；<br/>
                                    熟悉安全相关产品，有渗透测试、应急响应、安全行业从业背景者优先；<br/>
                                    善于学习，具有分析、解决问题的能力；<br/>
                                    思维清晰敏捷，逻辑分析能力强，具有较强的文档编写能力，能独立撰写PPT、方案建议书等，面试时需携带个人制作的专业PPT文件进行展示；<br/>
                                    具有良好的语言表达能力、沟通能力、分析能力，善于引导客户需求。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*客户服务工程师*/}
                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>

                            <div className={cx('text-holder')}>
                                <h5>客户服务工程师</h5>
                                <h6>岗位职责</h6>
                                <p>
                                    产品安装和部署实施；<br/>
                                    产品培训，对用户进行产品日常使用技术培训；<br/>
                                    及时分享实施、故障处理过程中出现的问题；<br/>
                                    收集整理用户需求信息，及时转换为通用的产品相关工具类文档；<br/>
                                    协助渗透测试人员进行常规漏洞验证及渗透测试等工作；<br/>
                                    收集整理并定期分析用户反馈的BUG、使用问题、原始需求等信息；<br/>
                                    提出针对产品的用户体验、功能方面的改进建议；<br/>
                                    协助部门总监完善产品售后服务体系。<br/>
                                </p>
                                <h6>任职要求</h6>
                                <p>
                                    良好的沟通表达能力和协调能力；<br/>
                                    最好具备至少1年以上安全行业经验并具备良好的语言表达能力；<br/>
                                    能够独立完成常见安全产品的安装、调试等工作；<br/>
                                    熟悉Word、Excel、PowerPoint等常见办公软件；<br/>
                                    责任心强，较强的快速学习能力，能够接受新鲜事物；<br/>
                                    品格正直，具备良好的职业素养。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*客户服务经理*/}
                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>

                            <div className={cx('text-holder')}>
                                <h5>客户服务经理</h5>
                                <h6>岗位职责</h6>
                                <p>
                                    负责对客户进行漏洞修复推进、补丁更新、渗透测试、应急响应、安全培训等安全工作；<br/>
                                    负责沟通客户需求、推进工作落实、把握项目进度与质量；<br/>
                                    提出针对产品的用户体验、功能方面的改进建议；<br/>
                                    维护客户关系，满足公司客户需求要求；<br/>
                                    协助部门总监完善产品售后服务体系。<br/>
                                </p>
                                <h6>任职要求</h6>
                                <p>
                                    较强的语言表达沟通能力，文字表达能力，推进落实能力，项目管理能力；<br/>
                                    熟悉互联网企业安全体系建设；<br/>
                                    熟悉各种安全产品功能与原理，熟悉互联网企业安全解决方案；<br/>
                                    了解渗透测试的套路与方法，理解各类漏洞成因与原理；<br/>
                                    熟悉linux/windows系统与网络，了解Linux、Windows、Web服务器、数据库安全配置和加固；<br/>
                                    具有团队意识和责任感，对工作积极严谨，勇于承担压力，有良好学习能力、独立解决问题能力；<br/>
                                    熟悉云计算优先/熟悉1-2门脚本语言优先（php/python/jsp/asp不限）。<br/>
                                </p>
                                <h6>优先条件</h6>
                                <p>
                                    有渗透测试经验或软件安全产品服务商工作经验者优先。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*C++开发工程师*/}
                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>

                            <div className={cx('text-holder')}>
                                <h5>C++开发工程师</h5>
                                <h6>岗位职责</h6>
                                <p>
                                    具备较强面向对象设计能力，具备一定的学习能力、解决问题能力、团队协作沟通能力；<br/>
                                    参与软件产品项目规划工作，制定具体项目实施方案；<br/>
                                    负责软件开发技术和规范及标准流程的改进；<br/>
                                    根据开发进度和任务分配，完成相应模块软件的设计、开发任务。<br/>
                                </p>
                                <h6>任职要求</h6>
                                <p>
                                    本科以上学历，3年以上工作经验；<br/>
                                    熟练掌握 C/C++ 编程语言；<br/>
                                    熟练使用STL、套接字、多线程等相关开发技术；<br/>
                                    熟悉Windows系统或者Linux系统的开发。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*服务端开发工程师*/}
                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>

                            <div className={cx('text-holder')}>
                                <h5>服务端开发工程师</h5>
                                <h6>技术要求</h6>
                                <p>
                                    熟悉Erlang/Java/C/C++语言；<br/>
                                    熟悉TCP/IP协议；<br/>
                                    熟悉分布式数据库, 如Hbase/Couchbase/MongoDB等；<br/>
                                    熟悉Mysql数据库；<br/>
                                    熟悉Linux的常用命令，调试工具，性能调优工具；<br/>
                                    有良好的编码风格，重视代码的质量和容错性，习惯单元测试。<br/>
                                </p>
                                <h6>任职要求</h6>
                                <p>
                                    注重团队协作，容易相处；<br/>
                                    良好的英文阅读能力；<br/>
                                    能够在不受监督的情况下完成项目；<br/>
                                    良好的表达能力，能够清晰和准确地描述问题；<br/>
                                    良好的发现并解决问题能力；<br/>
                                    愿意追根究底的态度。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*安全工程师*/}
                <section className={cx('area')}>
                    <div className={cx('protectContainer')}>
                        <div className={cx('protectLeft')}>

                            <div className={cx('text-holder')}>
                                <h5>安全工程师</h5>
                                <h6>岗位职责</h6>
                                <p>
                                    对客户安全进行负责，跟进客户安全风险；<br/>
                                    应对突发安全事件紧急响应；<br/>
                                    跟进客户需求给出安全解决方案，协助客户逐步建立和完善安全体系；<br/>
                                    给客户进行安全技术和意识培训；<br/>
                                    提升青藤产品的质量(测试产品功能和BUG,提交需求)；<br/>
                                    安全漏洞研究和工具开发。<br/>
                                </p>
                                <h6>任职要求</h6>
                                <p>
                                    熟悉主流的安全攻防知识，OWASP TOP 10等；<br/>
                                    精通常见的安全漏洞及修复方法,具有分析研究安全漏洞的能力；<br/>
                                    能够对Linux、WEB服务器、数据库进行安全配置和加固；<br/>
                                    具备编程能力: Java、Python、shell，可写EXP或POC。<br/>
                                </p>
                                <h6>优先条件</h6>
                                <p>
                                    在甲方推进并落地安全项目或在大型互联网公司有工作经验；<br/>
                                    安全团队的leader。<br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>

            </div>


        )
    }
}
