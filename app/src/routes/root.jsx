import Rails from "../components/VideoRails/Rails";
import LogoDevPlay from "../images/DevPlayLogo.svg"
import { FaBars} from 'react-icons/fa'
import { FiUser } from 'react-icons/fi';
export default function Root() {
    return (
        <>
            <div className="topBar">
            <FaBars size= "20px" />
            <img src={LogoDevPlay} alt="Logo" width= "150px"/>
            <FiUser size= "20px" />
            </div>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href={`/contacts/1`}>Your Name</a>
                        </li>
                        <li>
                            <a href={`/contacts/2`}>Your Friend</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
            <Rails />
        </>
    );
}
