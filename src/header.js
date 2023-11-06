import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <ul>
                <li className="header">
                    <Link to='/'>Home</Link>
                </li>
                <li className="header">
                    <Link to='/user'>User</Link>
                </li>
                <li className="header">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}