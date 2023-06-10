import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './HelpCenterHeader.scss';
const HelpCenterHeaderSection = () => {
    return (
        <div className='help-center-header-container' style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('${process.env.PUBLIC_URL}/images/help-center-header-bg.png') 0% 0%  no-repeat`
        }}>
            <div className='help-center-header-container-search-wrapper'>
                <h3>مركز المساعدة</h3>
                <p>كل ما يخص دليل الطالب و الاسئلة الشائعة وتقديم الطلبات  و الشكاوى</p>
                <div className='search-wrapper-input-container'>
                    <div class="input-group search-field">
                        <input type='text' placeholder='كيف يمكننا مساعدتك...' className='form-control' />
                        <div class="input-group-append">
                            <FiSearch fontSize={30}/>
                        </div>
                    </div>
                    <button className='btn search-btn'>ابحث</button>
                </div>
            </div>
        </div>

    )
}

export default HelpCenterHeaderSection;
