function Button(props) {
    const {text, isAnswer, isSignIn, method} = props;
    const className = isSignIn ? 'btn__sign-in' : 'btn__ask';

    return (
        <button className={className} onClick={method}>{text}</button>
    )
}

export default Button;