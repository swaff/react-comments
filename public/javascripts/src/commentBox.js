/** @jsx React.DOM */
tutApp.components.CommentBox = (function () {

    var CommentList = tutApp.components.CommentList,
        CommentForm = tutApp.components.CommentForm;

    return React.createClass({

        loadCommentsFromServer: function () {

            $.ajax({
                url: this.props.url,
                dataType: 'json',
                success: function (data) {

                    this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error("comments.json", status, err.toString());
                }.bind(this)
            });
        },

        handleCommentSubmit: function (comment) {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                type: 'POST',
                data: comment,
                success: function(data) {
                    this.setState({ data: data });
                }.bind(this)
            });
        },

        getInitialState: function () {
            return {data: []};
        },

        componentWillMount: function () {
            this.loadCommentsFromServer();
            setInterval(this.loadCommentsFromServer, this.props.pollInterval);
        },

        render: function () {
            return (
                <div className="commentBox">
                    <h1>Comments</h1>
                    <CommentList data={this.state.data} />
                    <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                </div>
            );
        }
    });
}());

