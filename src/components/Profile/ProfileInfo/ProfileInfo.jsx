import React from "react";
import s from "./ProfileInfo.module.css"


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://s4.reutersmedia.net/resources/r/?m=02&d=20220218&t=2&i=1591617855&w=780&fh=&fw=&ll=&pl=&sq=&r=2022-02-18T151501Z_17646_MRPRC20HS9IYUCY_RTRMADP_0_PORTUGAL-NAZARE-BIG-WAVE-TOUR"></img>
            </div>
            <div className={s.descriptionBlock}>
                logo +details
            </div>
        </div>
    )
}

export default ProfileInfo;