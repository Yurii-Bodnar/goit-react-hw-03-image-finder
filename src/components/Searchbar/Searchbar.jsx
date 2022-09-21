import { Component } from 'react';
import './../../styles.css';


class Searchbar extends Component {
  state = {
    // page: 1,
    // images:[],
    // q:'',
    imagesName:'',
  };
//   ApiKey = "29465886-f70572c8b9c11640077f8b34a";
//    componentDidMount() {
//     fetch(
//       `https://pixabay.com/api/?q=${this.state.q}&page=${this.state.page}&key=${this.ApiKey}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`
//     )
//       .then(res => res.json())
//       .then(image => this.setState({image}));
//   }
  handleSearch = (e) => {
    this.setState({imagesName:e.currentTarget.value.toLowerCase()})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.imagesName.trim() === ''){
        return ;
    }
    this.setState({imagesName:""})
    this.props.onSubmit(this.state.imagesName)


  }
//   e.target.elements.imagesName.value
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button ">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleSearch}
            className="SearchForm-input"
            name='imagesName'
            value={this.state.imagesName}
            type="text"
            // autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
