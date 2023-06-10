import React from 'react';
import './HelpCenterPage.scss';
import HelpCenterHeaderSection from './components/help-center-header/HelpCenterHeaderSection';
import HelpCenterVideos from "./components/help-center-videos/HelpCenterVideos";
import HelpCenterStudentsGuide from "./components/help-center-students-guide/HelpCenterStudentsGuide";
import HelpCenterRules from "./components/help-center-rules/HelpCenterRules";
import HelpCenterFAQs from "./components/help-center-faqs/HelpCenterFAQs";
import HelpCenterSuggestions from "./components/help-center-suggestions/HelpCenterSuggestions";

const HelpCenterPage = () => {
    const listOfHelpCenterSections = [
        {
            icon: "student",
            title: "دليل الطالب"
        },
        {
            icon: "question",
            title: "الاسئلة الشائعة"
        },
        {
            icon: "video",
            title: "الفيديوهات التوضيحية"
        },
        {
            icon: "services",
            title: "وحدة الخدمات الطلابية"
        },
        {
            icon: "suggestions",
            title: "الشكاوى والاقتراحات"
        }
    ];


    return (
        <div className='help-center-page__container'>
            <HelpCenterHeaderSection/>

            <div className='help-center-page__content'>
                <div className="help-center-page__icons-wrapper">
                    {
                        listOfHelpCenterSections.map((section, index) => {
                            return (
                                <div className='help-center-page__icons-wrapper_icon' key={index}>
                                    <img src={`${process.env.PUBLIC_URL}/images/${section.icon}.png`}
                                         alt={section.title}/>
                                    <p className='help-center-page__icons-wrapper_icon'>{section.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="help-center-page__pattern" style={{
                    background: `url('${process.env.PUBLIC_URL}/images/student-guide-bg.png') 100% 100%  no-repeat`
                }}></div>
                <div className="help-center-page__student-guide-banner">
                    <div className='container-lg content-wrapper'>
                        <div className='image-wrapper'>
                            <img src={`${process.env.PUBLIC_URL}/images/student-guide-book.png`} alt="دليل الطالب"/>
                        </div>
                        <div className="help-center-page__student-guide-banner_text">
                            <h3>دلــيل الــطالب الشامل... في كتيب واحد</h3>
                            <p>كل ما يحتاجه الطالب معك في اي مكان بدون انترنت</p>
                            <button className='btn'>حمله الآن</button>
                        </div>
                    </div>
                </div>

                <div className="help-center-page__student-guide">
                    <HelpCenterStudentsGuide/>
                </div>

                <div className="help-center-page__rules" style={{
                    background: `url('${process.env.PUBLIC_URL}/images/pattern-c.png') 100% 100%  no-repeat, #061041`
                }}>
                    <HelpCenterRules/>
                </div>

                <div className="help-center-page__faq">
                    <HelpCenterFAQs/>

                </div>

                <div className='help-center-page__pattern-triangle' style={{
                    background: `url('${process.env.PUBLIC_URL}/images/pattern-traingle.png') 100% 100%  no-repeat`
                }}></div>

                <div className="help-center-page__videos">
                    <HelpCenterVideos/>
                </div>

                <div className='help-center-page__pattern-triangle'
                     style={{
                    background: `url('${process.env.PUBLIC_URL}/images/pattern-traingle.png') 100% 100%  no-repeat`,
                    height:'200px',
                    margin: '30px 0 0'
                }}></div>

                <div className="help-center-page__suggestions">
                    <HelpCenterSuggestions/>
                </div>
            </div>
        </div>
    )
}

export default HelpCenterPage;
