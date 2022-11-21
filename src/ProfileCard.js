function ProfileCard({ title, handle }) {
    //below is same as above, but we can condense further as below
    //const title = props.title
    //const handle = props.handle

    //below is same as above, but we can condense further as what is being called in ProfileCard
    //const { title, handle } = props;

    return (
    <div>
        <div>Title is { title }</div>
        <div> Handle is { handle }</div>
    </div>
    );
}

export default ProfileCard;