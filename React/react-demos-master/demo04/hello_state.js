var HelloMessage = React.createClass({
	
	getInitialState:function(){
		return{name:"asd"};
	},
	
	render: function() {
		return <h1 > Hello {this.state.name} < /h1>;
	}
});

ReactDOM.render( < HelloMessage  / > ,
	document.getElementById('example')
);