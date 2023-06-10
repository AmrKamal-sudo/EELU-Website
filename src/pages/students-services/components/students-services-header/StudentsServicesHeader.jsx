import {FiSearch} from "react-icons/fi";
import React from "react";
import './StudentsServicesHeader.scss';
const StudentsServicesHeader = () => {
    return (
        <div className='students-services-header-container' style={{
            background: `url('${process.env.PUBLIC_URL}/images/students-services-bg.png') 0% 0%  no-repeat`
        }}>
            <h1>وحدة الخدمات الطلابية</h1>
        </div>
    )
}

export default StudentsServicesHeader