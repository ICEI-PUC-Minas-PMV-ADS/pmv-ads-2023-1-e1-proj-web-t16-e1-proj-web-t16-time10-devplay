import React, { useState } from 'react'
// import "../styles/lateralVideo"
// import ExemploDeThumb from "../images/exemploDethumb.svg"
import { FaBars} from "react-icons/fa"
import Sidebar from './sidebar'
const LateralVideo = () => {
    const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

    return (
      <div className='mainDiv'>

        <FaBars onClick={showSiderbar} />
        {sidebar && <Sidebar active={setSidebar} />}

      </div>
    )
  }

export default LateralVideo