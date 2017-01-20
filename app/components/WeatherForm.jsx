var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault(); {/*Prevent the page from reloading*/}

    var location = this.refs.location.value; {/*Pull fron field below ref*/}
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }

  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search weather by city"/>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
