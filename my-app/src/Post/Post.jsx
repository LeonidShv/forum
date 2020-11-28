import AnswerHeader from '../AnswerHeader';
import Question from '../Questions/Question';
import WriteAnswer from './WriteAnswer';
import './index.css';

function Post() {
    return (
        <div className="content">
            <AnswerHeader />
            <Question borderTop titleNone />
            <p className="answers__amount">3 answers</p>
            <Question titleNone />
            <Question titleNone />
            <WriteAnswer />
        </div>
    )
}

export default Post;