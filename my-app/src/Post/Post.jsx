import AnswerHeader from '../AnswerHeader';
import Question from '../Questions/Question';
import WriteAnswer from './WriteAnswer';
import Answer from './Answer';
import './index.css';

function Post(props) {
    const {post, post: {answers}} = props;
    console.log(answers);
    let listAnswers;
    if (answers) {
        listAnswers = answers.map(answer => <Answer post={post} answer={answer} key={answer.answer_id} />)
    }
    
    return (
        <div className="content">
            <AnswerHeader title={post.title} isAnswer />
            <Question post={post} borderTop titleNone />
            <p className="answers__amount">{answers.length} answers</p>
            {listAnswers}
            <WriteAnswer  />
        </div>
    )
}

export default Post;