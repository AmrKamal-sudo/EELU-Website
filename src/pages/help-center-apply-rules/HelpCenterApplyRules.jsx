import {Breadcrumb} from "react-bootstrap";
import './HelpCenterApplyRules.scss';
import {TfiArrowCircleLeft, TfiArrowCircleRight} from "react-icons/tfi";
const HelpCenterApplyRules = () => {
    const carouselItems = [
        {id: 1, title: 'المستندات المطلوبة للالتحاق'},
        {id: 2, title: 'الجهات المعنية للالتحاق'},
        {id: 3, title: 'المصروفات ووسائل الدفع'},
        {id: 4, title: 'الكليات و البرامج'},
        {id: 5, title: 'الكليات و البرامج'}
    ]
    return (
        <div className='help-center-apply-rules__container'>
            <div className='help-center-apply-rules__navigation-header' style={{
                background: `url('${process.env.PUBLIC_URL}/images/pattern-traingle.png') no-repeat, #F4F5FC`,
            }}>
                <div className='container-lg'>
                    <nav dir='rtl' className='breadcrumb'>
                        <a href="/" className='breadcrumb-link'>الرئيسية</a>
                        <a href="/" className='breadcrumb-link'>
                            مركز المساعدة
                        </a>
                        <a href="/" className='breadcrumb-link'>
                             دليل الطالب
                        </a>
                        <a active className='breadcrumb-link'>شروط الالتحاق بالجامعة</a>
                    </nav>
                    <h2>شروط الالتحاق بالجامعة</h2>
                </div>
            </div>
            <div className='help-center-apply-rules__content container-lg' style={{
                background: `url('${process.env.PUBLIC_URL}/images/pattern-c.png') no-repeat`,
                backgroundSize: 'contain',
                backgroundPosition: '-500px -100px'
            }}>
               <div className='content_text-wrapper'>
                   <h6>
                       اولا: كلية الحاسبات وتكنولوجيا المعلومات ، تقبل الحاصلين على الشهادات التالية للعام الحالي ، والأعوام السابقة بمدة بينية خمس سنوات حتى ثانوية 2022:-
                   </h6>
                   <ul>
                       <li>الثانوية العامة شعبة علمى رياضة أو علمي علوم</li>
                       <li>الثانوية الأزهرية شعبة علمى</li>
                       <li>
                           الثانوية العربية شعبة علمي مع توثيقها من الخارجية المصرية
                       </li>
                       <li>
                           الثانوية الأمريكية الحد الأدنى للقبول 800 Sat1 و 900 Sat2 أو دراسة مقرر Advanced Math فى Grade 12 ومادة Math في Grade 11 مع مادتي Chemistry و Physics الثانوية الإنجليزية I G بشرط اجتياز 8 مقررات بحد أدنى تقدير C على أن تكون أحداها اللغة الإنجليزية أو الأدب الإنجليزى + Math ( AL-Advanced level or AS-Advansed sub-level )

                       </li>

                       <li>
                           الكلية تقبل التحويل من الكليات المناظرة والغير مناظرة ، طبقاً لقواعد التحويل المعمول بها من مجلس الجامعات الخاصة والأهلية

                       </li>
                   </ul>
                   <h6>
                       ثانياً: كلية الدراسات التجارية وإدارة الأعمال ، تقبل الحاصلين على الشهادات التالية للعام الحالي ، والأعوام السابقة بمدة بينية خمس سنوات حتى ثانوية 2022:-

                   </h6>
                   <ul>
                       <li>الثانوية العامة شعبة علمى رياضة أو علمي علوم</li>
                       <li>الثانوية الأزهرية شعبة علمى</li>
                       <li>
                           الثانوية العربية شعبة علمي مع توثيقها من الخارجية المصرية
                       </li>
                       <li>
                           الثانوية الأمريكية الحد الأدنى للقبول 800 Sat1 و 900 Sat2 أو دراسة مقرر Advanced Math فى Grade 12 ومادة Math في Grade 11 مع مادتي Chemistry و Physics الثانوية الإنجليزية I G بشرط اجتياز 8 مقررات بحد أدنى تقدير C على أن تكون أحداها اللغة الإنجليزية أو الأدب الإنجليزى + Math ( AL-Advanced level or AS-Advansed sub-level )

                       </li>

                       <li>
                           الكلية تقبل التحويل من الكليات المناظرة والغير مناظرة ، طبقاً لقواعد التحويل المعمول بها من مجلس الجامعات الخاصة والأهلية

                       </li>
                   </ul>
                   <h6>
                       ثالثاَ: كلية الدراسات التربوية
                   </h6>
                   <ul>

                       <li> الدبلوم العام فى التربية يقبل الحاصلين على مؤهل عال معترف به .</li>
                       <li>الدبلوم المهني فى التربية يقبل الحاصلين على مؤهل عال تربوي بتقدير جيد على الأقل .</li>
                       <li>
                           الدبلوم الخاص فى التربية يقبل الحاصلين على دبلوم عام أو دبلوم مهني بتقدير جيد على الأقل .
                       </li>
                       <li>
                           الماجستير فى التربية يقبل الحاصلين على الدبلوم الخاص بتقدير جيد على الأقل
                       </li>

                       <li>
                           الكلية تقبل التحويل من الكليات المناظرة والغير مناظرة ، طبقاً لقواعد التحويل المعمول بها من مجلس الجامعات الخاصة والأهلية

                       </li>
                   </ul>
                   <h6>رابعاً : ماجستير هندسة البرمجيات ( تمنحة كلية الحاسبات للحاصلين على ) : </h6>
                   <ul>
                       <li>بكالوريوس الحاسبات أو اى مؤهل ذو علاقة بعلوم الحاسب بتقدير جيد على الأقل . </li>
                       <li>اجتياز TOEFL أو ILTS .</li>
                   </ul>
               </div>
                <div className='help-center-apply-rules__related-topics'>
                    <div className='header'>
                        <div className='header__carousal-btns'>
                            <button className='btn btn-icon'>
                                <TfiArrowCircleLeft fontSize={40}/>
                            </button>
                            <button className='btn btn-icon'>
                                <TfiArrowCircleRight fontSize={40}/>
                            </button>
                        </div>
                        <h4>مواضيع متعلقة</h4>
                    </div>
                    <div className='topics-items'>
                        {carouselItems.map((topic, index) => {
                            return (
                                <div key={index} className='topics-items_item'>
                                    <h6>{topic.title}</h6>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpCenterApplyRules;