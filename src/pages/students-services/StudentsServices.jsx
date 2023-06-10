import './StudentsServices.scss';
import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import StudentsServicesHeader from "./components/students-services-header/StudentsServicesHeader";

const StudentsServices = () => {
    return (<div className='students-services__container'>
            <StudentsServicesHeader/>
            <div className='students-services__container_content row justify-content-between'>
                <div className='section_title-wrapper'>
                    <img src={`${process.env.PUBLIC_URL}/images/services.png`} alt='services-icon'/>
                    <div className="section_title-wrapper_text">
                        <h3>وحدة الخدمات الطلابية</h3>
                    </div>
                </div>
                <h6>في حال اردت طلب خدمة من قبل وحدة الخدمات الطلابية يرجي ملئ النموذج التالي:</h6>
                <div className='col-lg-4 cards-section'>
                    <div className='card rules-notes'>
                        <h6>عزيزي الطالب / ة، يرجى مراعاة الشروط الآتية لضمان فحص طلبك:</h6>
                        <div className='rules-notes_list'>
                            <div className='list-item'>
                                <span className='item-order'>1</span>
                                <span>                            تقديم الطلب مرة واحدة ثم انتظار الرد، تكرار الطلب اكثر من مرة يعرضه للرفض</span>
                            </div>
                            <div className='list-item'>
                                <span className='item-order'>2</span>
                                <span>                            يرجى التأكد اولاً أن سؤالك مجاوب عليه في دليل الطالب او الأسئلة الشائعة او الفيديوهات التوضيحية قبل تقديم الطلب لتوفير وقتك ووقت وحدة الخدمات الطلابية.
                            </span>
                            </div>
                            <div className='list-item'>
                                <span className='item-order'>3</span>
                                <span>يرجى ادخال معلومات صحيحة و كاملة اثناء تقديم الطلب، ادخال معلومات خاطئة او ناقصة يعرض طلبك للرفض</span>
                            </div>
                            <div className='list-item'>
                                <span className='item-order'>4</span>
                                <span>                            بعد تقديم الطلب، يرجى متابعة الايميل الجامعي لترقب اي تحديثات لطلبك واجراء المطلوب لضمان سرعة انجاز طلبك
                        </span>
                            </div>
                        </div>
                        <h4>المساعدة و الدعم</h4>
                        <div className='support-list'>
                            <div className='list-item'>
                                <img src={`${process.env.PUBLIC_URL}/images/student.png`} alt='student-icon'/>
                                <p>دليل الطالب</p>
                            </div>
                            <div className='list-item'>
                                <img src={`${process.env.PUBLIC_URL}/images/question.png`} alt='question-icon'/>
                                <p>الأسئلة الشائعة</p>
                            </div>
                            <div className='list-item'>
                                <img src={`${process.env.PUBLIC_URL}/images/video.png`} alt='video-icon'/>
                                <p>الفيديوهات التوضيحية</p>
                            </div>
                        </div>
                    </div>
                    <div className='card other-services'>
                        <h4>خدمات أخرى</h4>
                        <ul>
                            <li>بيانات الحساب للطلاب الجدد2022-2023</li>
                            <li>بيانات السكاشن الخاصة بالطلاب</li>
                            <li>تغيير كلمة المرور للطالب</li>
                            <li>نظام التسجيل في دورة تربية عسكرية</li>
                            <li>تغيير كلمة لمرور لأعضاء هيئة التدريس و الموظفين</li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-6 form-section'>
                    <div className='students-services__form'>
                        <h6>معلومات الطالب</h6>
                        <Form className='form'>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>اسم الطالب</Form.Label>
                                <Form.Control type="text" placeholder="اسم الطالب"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>الرقم الجامعي</Form.Label>
                                <Form.Control type="text" placeholder="1234567"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>البريد الالكتروني</Form.Label>
                                <Form.Control type="email" placeholder="example@student.eelu.edu.eg"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>رقم الموبايل </Form.Label>
                                <Form.Control type="text" placeholder="00012345678"/>
                            </Form.Group>

                        </Form>
                        <h6>بيانات الطلب</h6>
                        <Form className='form'>
                            <Form.Group controlId="requestType">
                                <Form.Label>نوع الطلب</Form.Label>
                                <div key={`default-radio`} className="radio-btns">
                                    <div className='form-group'>
                                        <label className="form-check-label" htmlFor="complain">
                                            خدمة
                                        </label>
                                        <input className="form-check-input" type="radio" name="msgType"
                                               id="complain"/>
                                    </div>
                                    <div className='form-group'>
                                        <label className="form-check-label" htmlFor="suggest">
                                            شكوى
                                        </label>
                                        <input className="form-check-input" type="radio" name="msgType"
                                               id="suggest"/>
                                    </div>
                                    <div className='form-group'>
                                        <label className="form-check-label" htmlFor="suggest">
                                            استفسار
                                        </label>
                                        <input className="form-check-input" type="radio" name="msgType"
                                               id="suggest"/>
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="topic">
                                <Form.Label>الموضوع</Form.Label>
                                <Form.Control type="text" placeholder="مثال: لدي مشكلة في تسجيل الدخول"/>
                            </Form.Group>
                            <Form.Group controlId="dep">
                                <Form.Label>الادارة المختصة</Form.Label>
                                <div key={`default-radio`} className="radio-btns">
                                    <div className='form-group'>
                                        <label className="form-check-label" htmlFor="complain">
                                            تقنية المعلومات
                                        </label>
                                        <input className="form-check-input" type="radio" name="msgType"
                                               id="complain"/>
                                    </div>
                                    <div className='form-group'>
                                        <label className="form-check-label" htmlFor="suggest">
                                            الإدارة الأكاديمية
                                        </label>
                                        <input className="form-check-input" type="radio" name="msgType"
                                               id="suggest"/>
                                    </div>
                                    <div className='form-group'>
                                        <label className="form-check-label" htmlFor="suggest">
                                            شؤون الطلاب و الدراسات العليا و الخريجين
                                        </label>
                                        <input className="form-check-input" type="radio" name="msgType"
                                               id="suggest"/>
                                    </div>
                                </div>
                            </Form.Group>
                            <Form.Group controlId="specialist">
                                <Form.Label>القسم</Form.Label>
                                <Form.Select aria-label="spec. select">
                                    <option disabled selected>-- اختر القسم المختص --</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="requestReasons">
                                <Form.Label>سبب الطلب</Form.Label>
                                <Form.Select aria-label="spec. select">
                                    <option disabled selected>-- اختر سبب الطلب --</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>البريد الالكتروني</Form.Label>
                                <Form.Control type="email" placeholder="ادخل البريد الالكتروني"/>
                            </Form.Group>
                            <div className='row flex-lg-nowrap align-baseline'>
                                <Col md={10}>
                                    <Form.Group controlId="receivingCenter">
                                        <Form.Label>مركز الاستلام</Form.Label>
                                        <Form.Select aria-label="center select">
                                            <option disabled selected>-- اختر مركز الاستلام --</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={2}>
                                    <Form.Group controlId="copyCount">
                                        <Form.Label>عدد النسخ</Form.Label>
                                        <Form.Control type="number" placeholder="1" min={1}/>
                                    </Form.Group>
                                </Col>

                            </div>
                            <Form.Group controlId="notes">
                                <Form.Label>ملاحظات</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
                            </Form.Group>
                        </Form>
                        <button className='btn btn-primary w-100'>إرسال</button>
                    </div>
                </div>
            </div>
        </div>);
}

export default StudentsServices;