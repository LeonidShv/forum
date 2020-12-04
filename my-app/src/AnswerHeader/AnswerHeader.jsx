import Button from "../Button";

function AnswerHeader(props) {
  const { title, isAnswer } = props;

  const button = isAnswer ? '' : <Button text='Ask Question' />;

  return (
    <div className="content__header">
      <h2 className="title">{title}</h2>
      {button}
    </div>
  );
}

export default AnswerHeader;
