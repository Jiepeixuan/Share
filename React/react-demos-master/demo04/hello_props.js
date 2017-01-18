var myStyle = {
	fontSize: 100,
	color: '#FF0000'
};

var HelloMessage = React.createClass({
	render: function() {
		return <h1 style = {myStyle} >Hello {this.props.name} < /h1>;
	}
});

ReactDOM.render( < HelloMessage name = "props" / > ,
	document.getElementById('example')
);