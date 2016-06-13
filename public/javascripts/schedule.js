var Schedule = React.createClass({
    render: function() {
        return (
            <div>
                <h1>{this.props.buildDate}</h1>
                <p>{this.props.deploymentSchedule}</p>
            </div>
        );
    }
});

React.render(<Schedule buildDate="06-13-16"
					   deploymentSchedule="blah">
			 </Schedule>, document.getElementById('react-container'));