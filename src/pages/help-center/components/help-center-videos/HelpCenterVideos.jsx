import {FiSearch} from "react-icons/fi";
import HelpCenterGuideTabs from "../help-center-guide-tabs/HelpCenterGuideTabs";
import {Tab} from "react-bootstrap";
import React from "react";

const HelpCenterVideos = () => {
    const listOfVideosTabs= [
        {id: 1, title: "عن الجامعة"},
        {id: 2, title: "الخدمات الطلابية"},
        {id: 3, title: "المراكز الدراسية"},
        {id: 4, title: "الكورسات"},
        {id: 5, title: "بوابة الطالب"},
        {id: 6, title: "المحاضرات و نظام الـWEBEX"},
        {id: 7, title: "نظام الـMoodle"},
        {id: 8, title: "نظام ابن الهيثم (SIS)"},
        {id: 9, title: "البريد الجامعي"},
    ]
    const getVideoTabContent = (id) => {
        switch(id) {
            case 1:
                return () => (
                    <div className='help-center-guide-tabs__tab-content'>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className='content'>
                            <h3>عن الجامعة</h3>
                            <h6>تعرف على الجامعة المصرية للتعلم الإلكتروني الأهلية</h6>
                            <p>تم إنشاء الجامعة المصرية للتعلم الإلكتروني الأهلية بالقرار الجمهوري رقم 233 لسنه 2008 كأول جامعة مصرية تتبنى مبدأ التعلم الإلكتروني. وفي عام 2018، صدر القرار الجمهوري رقم 71 بتحويل الجامعة من جامعة خاصة إلى جامعة أهلية وذلك بهدف تقديم خدمات تعليمية لجميع المحافظات المصرية بأعلى مستويات الجودة، وبتكلفة مناسبة اجتماعيا.</p>
                            <button className='btn btn-primary'>اقرأ المزيد</button>
                        </div>
                    </div>
                )
                break;
            case 2:
                return () => (
                    <div className='help-center-guide-tabs__tab-content'>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className='content'>
                            <h3>عن الجامعة</h3>
                            <h6>تعرف على الجامعة المصرية للتعلم الإلكتروني الأهلية</h6>
                            <p>تم إنشاء الجامعة المصرية للتعلم الإلكتروني الأهلية بالقرار الجمهوري رقم 233 لسنه 2008 كأول جامعة مصرية تتبنى مبدأ التعلم الإلكتروني. وفي عام 2018، صدر القرار الجمهوري رقم 71 بتحويل الجامعة من جامعة خاصة إلى جامعة أهلية وذلك بهدف تقديم خدمات تعليمية لجميع المحافظات المصرية بأعلى مستويات الجودة، وبتكلفة مناسبة اجتماعيا.</p>
                            <button className='btn btn-primary'>اقرأ المزيد</button>
                        </div>
                    </div>
                )
                break;
            case 3:
                return () => (
                    <div className='help-center-guide-tabs__tab-content'>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className='content'>
                            <h3>عن الجامعة</h3>
                            <h6>تعرف على الجامعة المصرية للتعلم الإلكتروني الأهلية</h6>
                            <p>تم إنشاء الجامعة المصرية للتعلم الإلكتروني الأهلية بالقرار الجمهوري رقم 233 لسنه 2008 كأول جامعة مصرية تتبنى مبدأ التعلم الإلكتروني. وفي عام 2018، صدر القرار الجمهوري رقم 71 بتحويل الجامعة من جامعة خاصة إلى جامعة أهلية وذلك بهدف تقديم خدمات تعليمية لجميع المحافظات المصرية بأعلى مستويات الجودة، وبتكلفة مناسبة اجتماعيا.</p>
                            <button className='btn btn-primary'>اقرأ المزيد</button>
                        </div>
                    </div>
                )
                break;
            case 4:
                return () => (
                    <div className='help-center-guide-tabs__tab-content'>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className='content'>
                            <h3>عن الجامعة</h3>
                            <h6>تعرف على الجامعة المصرية للتعلم الإلكتروني الأهلية</h6>
                            <p>تم إنشاء الجامعة المصرية للتعلم الإلكتروني الأهلية بالقرار الجمهوري رقم 233 لسنه 2008 كأول جامعة مصرية تتبنى مبدأ التعلم الإلكتروني. وفي عام 2018، صدر القرار الجمهوري رقم 71 بتحويل الجامعة من جامعة خاصة إلى جامعة أهلية وذلك بهدف تقديم خدمات تعليمية لجميع المحافظات المصرية بأعلى مستويات الجودة، وبتكلفة مناسبة اجتماعيا.</p>
                            <button className='btn btn-primary'>اقرأ المزيد</button>
                        </div>
                    </div>
                )
                break;
            case 5:
                return () => (
                    <div className='help-center-guide-tabs__tab-content'>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className='content'>
                            <h3>عن الجامعة</h3>
                            <h6>تعرف على الجامعة المصرية للتعلم الإلكتروني الأهلية</h6>
                            <p>تم إنشاء الجامعة المصرية للتعلم الإلكتروني الأهلية بالقرار الجمهوري رقم 233 لسنه 2008 كأول جامعة مصرية تتبنى مبدأ التعلم الإلكتروني. وفي عام 2018، صدر القرار الجمهوري رقم 71 بتحويل الجامعة من جامعة خاصة إلى جامعة أهلية وذلك بهدف تقديم خدمات تعليمية لجميع المحافظات المصرية بأعلى مستويات الجودة، وبتكلفة مناسبة اجتماعيا.</p>
                            <button className='btn btn-primary'>اقرأ المزيد</button>
                        </div>
                    </div>
                )
                break;
            case 6:
                return () => (
                    <div className='help-center-guide-tabs__tab-content'>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className='content'>
                            <h3>عن الجامعة</h3>
                            <h6>تعرف على الجامعة المصرية للتعلم الإلكتروني الأهلية</h6>
                            <p>تم إنشاء الجامعة المصرية للتعلم الإلكتروني الأهلية بالقرار الجمهوري رقم 233 لسنه 2008 كأول جامعة مصرية تتبنى مبدأ التعلم الإلكتروني. وفي عام 2018، صدر القرار الجمهوري رقم 71 بتحويل الجامعة من جامعة خاصة إلى جامعة أهلية وذلك بهدف تقديم خدمات تعليمية لجميع المحافظات المصرية بأعلى مستويات الجودة، وبتكلفة مناسبة اجتماعيا.</p>
                            <button className='btn btn-primary'>اقرأ المزيد</button>
                        </div>
                    </div>
                )
                break;
            case 7:
                return () => (
                    <div className='help-center-guide-tabs__tab-content'>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className='content'>
                            <h3>عن الجامعة</h3>
                            <h6>تعرف على الجامعة المصرية للتعلم الإلكتروني الأهلية</h6>
                            <p>تم إنشاء الجامعة المصرية للتعلم الإلكتروني الأهلية بالقرار الجمهوري رقم 233 لسنه 2008 كأول جامعة مصرية تتبنى مبدأ التعلم الإلكتروني. وفي عام 2018، صدر القرار الجمهوري رقم 71 بتحويل الجامعة من جامعة خاصة إلى جامعة أهلية وذلك بهدف تقديم خدمات تعليمية لجميع المحافظات المصرية بأعلى مستويات الجودة، وبتكلفة مناسبة اجتماعيا.</p>
                            <button className='btn btn-primary'>اقرأ المزيد</button>
                        </div>
                    </div>
                )
                break;
            case 8:
                return () => (
                    <div className='help-center-guide-tabs__tab-content'>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                        <div className='content'>
                            <h3>عن الجامعة</h3>
                            <h6>تعرف على الجامعة المصرية للتعلم الإلكتروني الأهلية</h6>
                            <p>تم إنشاء الجامعة المصرية للتعلم الإلكتروني الأهلية بالقرار الجمهوري رقم 233 لسنه 2008 كأول جامعة مصرية تتبنى مبدأ التعلم الإلكتروني. وفي عام 2018، صدر القرار الجمهوري رقم 71 بتحويل الجامعة من جامعة خاصة إلى جامعة أهلية وذلك بهدف تقديم خدمات تعليمية لجميع المحافظات المصرية بأعلى مستويات الجودة، وبتكلفة مناسبة اجتماعيا.</p>
                            <button className='btn btn-primary'>اقرأ المزيد</button>
                        </div>
                    </div>
                )
                break;
            case 9:
                return () => (
                    <div className='help-center-guide-tabs__tab-content'>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>                        <div className='content'>
                            <h3>عن الجامعة</h3>
                            <h6>تعرف على الجامعة المصرية للتعلم الإلكتروني الأهلية</h6>
                            <p>تم إنشاء الجامعة المصرية للتعلم الإلكتروني الأهلية بالقرار الجمهوري رقم 233 لسنه 2008 كأول جامعة مصرية تتبنى مبدأ التعلم الإلكتروني. وفي عام 2018، صدر القرار الجمهوري رقم 71 بتحويل الجامعة من جامعة خاصة إلى جامعة أهلية وذلك بهدف تقديم خدمات تعليمية لجميع المحافظات المصرية بأعلى مستويات الجودة، وبتكلفة مناسبة اجتماعيا.</p>
                            <button className='btn btn-primary'>اقرأ المزيد</button>
                        </div>
                    </div>
                )
                break;
            default:
                return () => (
                    <div className='help-center-guide-tabs__tab-content'>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>                        <div className='content'>
                            <h3>عن الجامعة</h3>
                            <h6>تعرف على الجامعة المصرية للتعلم الإلكتروني الأهلية</h6>
                            <p>تم إنشاء الجامعة المصرية للتعلم الإلكتروني الأهلية بالقرار الجمهوري رقم 233 لسنه 2008 كأول جامعة مصرية تتبنى مبدأ التعلم الإلكتروني. وفي عام 2018، صدر القرار الجمهوري رقم 71 بتحويل الجامعة من جامعة خاصة إلى جامعة أهلية وذلك بهدف تقديم خدمات تعليمية لجميع المحافظات المصرية بأعلى مستويات الجودة، وبتكلفة مناسبة اجتماعيا.</p>
                            <button className='btn btn-primary'>اقرأ المزيد</button>
                        </div>
                    </div>
                )
        }
    }
    return (
        <>
            <div className='section_title-wrapper'>
                <img src={`${process.env.PUBLIC_URL}/images/video-colored.png`} alt='video-icon'/>
                <div className="section_title-wrapper_text">
                    <h3>الفيديوهات التوضيحية</h3>
                    <div className="input-group">
                        <input type='text' placeholder='كيف يمكننا مساعدتك...' className='form-control'/>
                        <div className="input-group-append">
                            <FiSearch fontSize={30} color='#D3E2F9'/>
                        </div>
                    </div>
                </div>
            </div>
            <HelpCenterGuideTabs listOfTabs={listOfVideosTabs}>
                {
                    listOfVideosTabs.map((tab, index) => (
                        <Tab.Pane key={index+tab.id} eventKey={`tab-${tab.id}`}>
                            {getVideoTabContent(tab.id)()}
                        </Tab.Pane>
                    ))
                }
            </HelpCenterGuideTabs>
        </>
    )
}

export default HelpCenterVideos;