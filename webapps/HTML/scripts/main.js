
var TestBox = React.createClass({
	getInitialState: function() {
    	return {data: {}};
  	},

  	componentDidMount: function() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
  	},

	render: function() {
	    return (
	    	<div className="commentBox">
	        	<h1>Value</h1>
	        	<Test data={this.state.data} />
	      	</div>
	    );
	}
});

var Test = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        {this.props.data.value}
      </div>
    );
  }
});



ReactDOM.render(
  <TestBox url="/test" />,
  document.getElementById('content')
);
