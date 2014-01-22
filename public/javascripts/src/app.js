/** @jsx React.DOM */
(function () {

    var CommentBox = tutApp.components.CommentBox;

    React.renderComponent(
        <CommentBox url="api/comments" pollInterval={2000} />,
        document.getElementById('content')
    );
}());
