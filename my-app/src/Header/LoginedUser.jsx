import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignOut from './SignOut';

function LoginedUser(props) {
    console.log(props.posts);
    if (!props.posts) {
        return '';
    }
    const {posts: {
        display_name: name,
        profile_image: profileImage
    },
    switchContent,
    getCookie } = props;

    return (
        <>
        <SignOut getCookie={getCookie} />
        <Link to="/profile" name="profile" onClick={switchContent}>
        <div className="header__user">
            <img src={profileImage} alt="user" className="header__photo" />
            <p className="header__login">{name}</p>
        </div>
      </Link>
        </>
    )
}

export default LoginedUser;
