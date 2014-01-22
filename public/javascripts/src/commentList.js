/** @jsx React.DOM */
tutApp.components.CommentList = (function () {

    var Comment = tutApp.components.Comment;

    return React.createClass({
        render: function () {

            var commentNodes = this.props.data.map(function (comment) {
                return <Comment author={comment.author}>{comment.text}</Comment>;
            });

            return (
                <div className="commentList">
                    {commentNodes}
                </div>
            );
        }
    });
}());
