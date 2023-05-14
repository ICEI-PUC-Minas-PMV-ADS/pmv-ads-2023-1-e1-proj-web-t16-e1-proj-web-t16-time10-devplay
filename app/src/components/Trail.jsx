import { useState } from "react";
import SidebarVideo from "./Sidebar";
import thumb from "../images/exemploDethumb.svg"
export default function Trail({ course }) {
    const [sideBarVideo, setSidebar] = useState(false)
    const showSiderbarVideo = () => setSidebar(!sideBarVideo)

    return (
        <div onClick={ showSiderbarVideo }>
            <img
                src={ thumb }
                alt="Thumb"
                width="350px"
            />

            <p>{ course.nome }</p>

            { sideBarVideo && <SidebarVideo active={ setSidebar } />}
        </div>
    )
}
