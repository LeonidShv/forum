import Question from './Question';
import Filter from '../Filter/Filter';
import AnswerHeader from '../AnswerHeader';
import './index.css';

function Questions(props) {
    const { posts } = props;
    const filterContent = [
        { btn: 'Activity', key: 'Activity_1' },
        { btn: 'Votes', key: 'Votes_2' },
        { btn: 'Creation', key: 'Creation_3' }
    ];
    console.log(posts);
    const listQuestions = posts.map(post => <Question post={post} key={post.question_id} />);
    
    return (
        <div className="content">
            <AnswerHeader />
            <div className="filter__block flex-end">
                <Filter filterContent={filterContent} />
            </div>

            <div className="content__list">
            {listQuestions}
            </div>
        </div>
    )
}

export default Questions;