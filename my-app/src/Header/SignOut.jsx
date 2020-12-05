import React, { useState, useEffect } from "react";
import Button from '../Button';

function SignIn(props) {
    const {getCookie} = props;
    const [userId, setUserId] = useState('123');
    function saveId(e) {
        if (userId.length <= 3) {
            return;
        } else if (e.type === 'keypress' && e.key === 'Enter') {
            document.cookie = `userId=${userId}`;
            getCookie();
            console.log(userId);
        } else if (e.type === 'click') {
            document.cookie = `userId=${userId}`;
            getCookie(userId);
            console.log(userId);
        }
    }

    function signOut() {
        document.cookie = `userId=0;`;
        getCookie('0000');
    }

    return (
        <Button text='Sign Out' method={signOut} isOut  />
    )
}

export default SignIn;