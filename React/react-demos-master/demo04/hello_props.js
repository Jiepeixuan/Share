var myStyle = {
	fontSize: 100,
};

var yStyle = {
	color: '#FFD000'
};

var HelloMessage = React.createClass({
	render: function() {
		return <h1 style=[{myStyle},{yStyle}]>Hello {this.props.nam} < /h1>;
	}
});






ReactDOM.render( < HelloMessage nam = "tom" / > ,
	document.getElementById('example')
);