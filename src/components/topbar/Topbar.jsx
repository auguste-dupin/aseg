import React from 'react'
import "./topbar.css"
import { EMPRESA } from '../../env'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">{EMPRESA}</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://media-exp3.licdn.com/dms/image/C5603AQHEtHwVL5PgkA/profile-displayphoto-shrink_200_200/0/1516945129218?e=1630540800&v=beta&t=x8soSdAkQi8dUAfsmCofyZBmDBVXovmkLO7JaYMS5C8" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
