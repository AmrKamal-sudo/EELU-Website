import React from "react";
import './EcpcCenterTeams.scss';
const EcpcCenterTeams = () => {
    return (
        <div className='ecpc-center_teams' style={{
            background: `url('${process.env.PUBLIC_URL}/images/ecpc-pattern.png') no-repeat, #061041`,
        }}>
            <div className='ecpc-center_teams-title'>
                <h1>فريق العمل</h1>
                <img src={`${process.env.PUBLIC_URL}/images/team-icon.png`} alt="center-work"/>
            </div>
            <div className='ecpc-center_teams_content'>
                <img src={`${process.env.PUBLIC_URL}/images/ecpc-center-teams.png`} alt="center-teams"/>
            </div>
        </div>
    )
}

export default EcpcCenterTeams;