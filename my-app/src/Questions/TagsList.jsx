function TagsList(props) {
    const {tags} = props;
    const tagsList = tags.map(tag =>  <button key={tag} className="question__tag">{tag}</button>);

    return (
        <div>
            {tagsList}
        </div>
    );
}

export default TagsList;
