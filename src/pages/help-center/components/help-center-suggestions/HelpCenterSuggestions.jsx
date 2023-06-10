import {Form} from "react-bootstrap";
import React from "react";

const HelpCenterSuggestions = () => {
    return (
        <>
            <div className='section_title-wrapper'>
                <img src={`${process.env.PUBLIC_URL}/images/suggest-colored.png`} alt='video-icon'/>
                <div className="section_title-wrapper_text">
                    <h3>الشكاوى و الإقتراحات</h3>
                </div>
            </div>
            <div className='help-center-page__suggestions_content'>
                <p>لأننا دائماً نسعى لرضاء طلابنا و نأمل الأفضل لهم و لمستقبلهم، ان كان لديكم شكوى او استفسار او اقتراح
                    لتحسين جودة الخدمة يرجى ملئ النموذج التالي و سنعمل علىيها في اقرب وقت</p>
                <Form>
                    <div className='row form-row gap-5'>
                        <div className='col'>
                            <Form.Label>الرقم الجامعي</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com"/>
                        </div>
                        <div className='col'>
                            <Form.Label>الاسم</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com"/>
                        </div>

                    </div>
                    <div className='row form-row gap-5'>
                        <div className='col'>
                            <Form.Label>نوع الطالب</Form.Label>
                            <div key={`default-radio`} className="radio-btns">
                                <div className='form-group'>
                                    <label className="form-check-label" htmlFor="complain">
                                        شكوى
                                    </label>
                                    <input className="form-check-input" type="radio" name="msgType"
                                           id="complain"/>
                                </div>
                                <div className='form-group'>
                                    <label className="form-check-label" htmlFor="suggest">
                                        اقتراح
                                    </label>
                                    <input className="form-check-input" type="radio" name="msgType"
                                           id="suggest"/>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <Form.Label>البريد الالكتروني</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className='row form-row'>
                        <Form.Label>الرسالة</Form.Label>
                        <Form.Control as="textarea"/>
                    </div>
                    <button className='btn btn-outline-light' type='submit'>ارسال</button>
                </Form>
            </div>
        </>
    )
}

export default HelpCenterSuggestions;