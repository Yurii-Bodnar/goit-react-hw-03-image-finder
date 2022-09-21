import { Component } from 'react';

class Button extends Component {


  render() {
    if (this.props.images.length !== 0) {
      return (
        <button onClick={this.props.loadMore} className="Button" type="button">
          Load more
        </button>
      );
    }

    return;
  }
}

export default Button;

