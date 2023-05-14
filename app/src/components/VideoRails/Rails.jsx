import ExemploDeThumb from "../../images/Exemplo2.svg"

import React, { useState } from 'react'
// import '../styles/styles.css';
import SidebarVideo from "../lateralModal/SideBarVideo/SideBarVideo"
function Rails() {
    const [sideBarVideo, setSidebar] = useState(false)

    const showSiderbarVideo = () => setSidebar(!sideBarVideo)
  return (
    <div className="trilhos">
      <img
        src={ExemploDeThumb}
        alt="Thumb"
        width="350px"
        onClick={showSiderbarVideo}
      />
      {sideBarVideo && <SidebarVideo active={setSidebar} />}
    </div>
  );
}

export default Rails;
