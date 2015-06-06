
var React = require('react');

// STORES
// var ???Store = require('../../stores/???Store');
// ACTIONS
// var ???Actions = require('../../actions/???Actions');
// REACT COMPONENTS


var DistributorColumn = React.createClass({

    getInitialState() {
      return {};
    },

    getDefaultProps() {
      return {
      };
    },

    componentDidMount() {

    },

    componentDidUnmount() {

    },

    render() {
      var checkboxes = this.props.distributors.map( (distributor, i) => {
        return (<div key={i} className='with-padding-6'><input type='checkbox' /><span className='push-right-6'>{distributor.name}</span></div>);
      });
      return (
        <div>
          {checkboxes}
        </div>
      );
    }
});

module.exports = DistributorColumn;