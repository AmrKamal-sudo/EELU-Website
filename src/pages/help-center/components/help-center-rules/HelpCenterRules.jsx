import {IoIosListBox} from "react-icons/io";
import {FiSearch} from "react-icons/fi";
import HelpCenterGuideHorizontalTabs from "../help-center-guide-horizontal-tabs/HelpCenterGuideHorizontalTabs";
import React from "react";

const HelpCenterRules = () => {
    return (
        <>
            <div className='section_title-wrapper'>
                <IoIosListBox fontSize={50} color='#FFB03A'/>
                <div className="section_title-wrapper_text">
                    <h3>القوانين واللوائح والعقوبات</h3>
                    <div className="input-group search-wrapper">
                        <input type='text' placeholder='كيف يمكننا مساعدتك...' className='form-control'/>
                        <div className="input-group-append">
                            <FiSearch fontSize={30} color='#D3E2F9'/>
                        </div>
                    </div>
                </div>
            </div>
            <HelpCenterGuideHorizontalTabs tabsList={[
                {id: 1, title: 'القوانين'},
                {id: 2, title: 'المخالفات'},
                {id: 3, title: 'العقوبات'},
                {id: 4, title: 'حالات الغش'}
            ]}/>
        </>
    )
}

export default HelpCenterRules;