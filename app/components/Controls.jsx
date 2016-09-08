var React = require('react');

var Controls = React.createClass({
    propsTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
      }
    },
    render: function() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>&#9616;&#9616;</button>
            } else {
                return <button className="button primary" onClick={this.onStatusChange('started')}>&#9658;</button>
            }
        };

        return(
            <div className = "controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Reset</button>
            </div>
        )
    }
});

module.exports = Controls;
