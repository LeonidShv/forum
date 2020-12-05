function Button(props) {
    const {text, isAnswer, isSignIn, method, isOut} = props;
    let className = isSignIn ? 'btn__sign-in' : 'btn__ask';
    className = isOut ? 'btn__sign-out' : className;

    return (
        <button className={className} onClick={method}>{text}</button>
    )
}

export default Button;