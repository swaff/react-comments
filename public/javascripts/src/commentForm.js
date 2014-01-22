/** @jsx React.DOM */
tutApp.components.CommentForm = React.createClass({

    handleSubmit: function () {

        var authorNode = this.refs.author.getDOMNode(),
            textNode = this.refs.text.getDOMNode(),
            author = authorNode.value.trim(),
            text = textNode.value.trim();

        this.props.onCommentSubmit({
            author: author,
            text: text
        });

        if (!text || !author) return false;

        // clear the form
        authorNode.value = '';
        textNode.value = '';

        return false;
    },

    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    ref="author"
                    placeholder="Your name" />
                <input
                    type="text"
                    ref="text"
                    placeholder="Say something..." />
                <input type="submit" value="Post" />
            </form>
        );
    }
});
