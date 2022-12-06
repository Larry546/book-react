const CommentListItem = () => {
    return(
        <li className="list-group-item border-bottom wd-bg-sameblue">
            <button className="btn btn-danger float-end ms-2">Delete</button>
            <p className="m-1" ><span className="fs-5 text-secondary">1234:</span> Good books</p>
        </li>
    );
};
export default CommentListItem;