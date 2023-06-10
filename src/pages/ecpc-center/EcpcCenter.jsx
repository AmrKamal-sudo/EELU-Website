import './EcpcCenter.scss';
import {useState} from "react";
import EcpcCenterInfo from "./components/ecpc-center-info/EcpcCenterInfo";
import EcpcCenterWorks from "./components/ecpc-center-works/EcpcCenterWorks";
import EcpcCenterTeams from "./components/ecpc-center-teams/EcpcCenterTeams";
const EcpcCenter = () => {
    const [currentTab, setCurrentTab] = useState(1);
    return (
        <div className="ecpc-center_container">
            <div className='ecpc-center_container__header' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/ecpc-center-bg.png)`
            }}>
                <h1>مـــــركـــــــــــز انـــتـــــاج المقررات الإلكترونية</h1>
                <p>يعتبر مركز انتاج المقررات الإلكترونية هو أحد مراكـز التطويـر بالجامعـة،
                    ويسعـى المركز إلى أن يصبح من أحد المراكز الرائدة في مجال التعليم والتعلم الإلكتروني</p>
            </div>
            <div className='ecpc-center_container__content'>
                <div className='ecpc-center_container__content__tabs'>
                        <a className='ecpc-center_container__content__tabs_item' href="#info">
                            <img src={`${process.env.PUBLIC_URL}/images/ecpc-center-about.png`} alt="center"/>
                            <p>عن المركز</p>
                        </a>
                        <a className='ecpc-center_container__content__tabs_item' href="#works">
                            <img src={`${process.env.PUBLIC_URL}/images/ecpc-center-works.png`} alt="center-work"/>
                            <p>أعمال المركز</p>
                        </a>
                        <a className='ecpc-center_container__content__tabs_item' href="#teams">
                            <img src={`${process.env.PUBLIC_URL}/images/ecpc-center-team.png`} alt="teams"/>
                            <p>فريق العمل</p>
                        </a>
                </div>
                <div className='ecpc-center_container__content_sections'>
                    <div id="info">
                        <EcpcCenterInfo/>
                    </div>
                    <div id="works">
                        <EcpcCenterWorks/>
                    </div>
                    <div id="teams">
                        <EcpcCenterTeams/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default EcpcCenter;