import {Tabs, Tab} from "react-bootstrap";
import './EcpcCenterWorks.scss';
import React, {useState} from "react";
const EcpcCenterWorks = () => {
    const [selectedContent, setSelectedContent] = useState(1);
    return(
        <div className='ecpc-center_works' style={{
            background: `url('${process.env.PUBLIC_URL}/images/ecpc-pattern.png') no-repeat, #061041`,
        }}>
            <div className='ecpc-center_works-title'>
                <h1>أعمال المركز</h1>
                <img src={`${process.env.PUBLIC_URL}/images/works-icon.png`} alt="center-work"/>
            </div>
            <div className='ecpc-center_works_content'>
                <Tabs defaultActiveKey={'tab1'}>
                    <Tab eventKey='tab1' title='انتاج المقررات الإلكترونية' key={1}>
                        <h3>إنتاج المقررات الإلكترونية</h3>
                        <p>يعتــمــد المركـــز فــي إنــتـاج المقـررات على نمـوذج وهـو واحد من أشـهر
                            وأهـم النمـاذج المستخدمـة في إنـتـاج المـقـررات الإلكترونـيـة
                            حـيـث تـوفـر مراحـلـه المخـتـلـفـة عمليـة تقيـيـم ومراجعة دورية
                            للمقرر بمختلف مراحل الإنتاج بما يضمن تحقيق الأهداف التعليمية
                            للمقرر في النهاية يتكون هذا النموذج من خمسة مراحل موضحة بالشكل</p>
                        <div className='materials-btns'>
                            <button className={`btn btn-primary ${selectedContent==1? 'active': ''}`} onClick={() => {
                                setSelectedContent(1)
                            }}>نموذج انتاج المقررات الإلكترونية</button>
                            <button className={`btn btn-primary ${selectedContent==2? 'active': ''}`} onClick={() => {
                                setSelectedContent(2)
                            }}>خطوات انتاج القررات الإلكترونية</button>
                        </div>
                        <div className='ecpc-center_works_img'>
                            {
                                selectedContent === 1 ?
                                    <img src={`${process.env.PUBLIC_URL}/images/produce-materials.png`} alt="center-work"/>
                                    :
                                    <img src={`${process.env.PUBLIC_URL}/images/materials-steps.png`} alt="center-work"/>
                            }
                        </div>
                    </Tab>
                    <Tab eventKey='tab2' title='المحاضرات' key={2}>
                        <h3>المحاضرات</h3>
                        <p>هو عملية معالجة
                            لمقاطع الفيديو، للحصول على مقطع واحد متكامل، يعبر عن أحداث
                            متتالية وفق سيناريو واضح وبسيط، والعمل على تقسم المحاضرة
                            إلى أقسام وإضافة بعض العناوين الفرعية المهام والمسؤوليات
                        </p>
                        <h4>المهام والمسئوليات</h4>
                        <ul>
                            <li>حذف اللقطات غير المرغوب فيها أو تحرير بعض عناصر المشهد</li>
                            <li>اختيار أفضل اللقطات والدمج بينها</li>
                            <li> إضافة تأثيرات وفلاتر وعناصر إضافية</li>
                            <li> تقسيم الفيديو لعدة مقاطع كل مقطع يعنبر عن موضوع بعنوان فرعي</li>
                            <li>أضافة Quiz بنهاية كل فيديو</li>
                            <li>عمل render للفيديوهات </li>
                        </ul>
                        <div className='video-player'>
                            <iframe height="520" src="https://www.youtube.com/embed/BT_cCsjcqnE"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </div>
                    </Tab>
                    <Tab eventKey='tab3' title='التصوير' key={3}>
                        <h3>التصوير</h3>
                        <p>
                            تغطية الأحداث والفعاليات الخاصة بالجامعة مثل مناقشات رسائل الماجستير،
                            وتغطية الندوات التي يقوم بتنظيمها مختلف الوحدات مثل وحدة تكافؤ
                            الفرص أو الأنشطة الطلابية المختلفة سواء الرياضية أو الاجتماعية،
                            حيث يقوم بالتقاط الصور ومعالجتها لتحقيق الأهداف المطلوبة ويجب على
                            المصور الفوتوغرافي أن يملك القدرة الفنية الإبداعية والمعرفة القوية بأجهزة التصوير والملحقات المختلفة والقدرة على تحديد المواعيد النهائية لتسليم الأعمال والتكاليف المطلوبة للتنفيذ
                        </p>
                        <div className='img_wrapper'>
                            <img src={`${process.env.PUBLIC_URL}/images/photography.png`} alt="development-team"/>
                        </div>
                    </Tab>
                </Tabs>

            </div>
        </div>
    )
}

export default EcpcCenterWorks;