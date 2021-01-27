import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyBNFkfQPJ8x0f3Kk8IrBH6jy-2E6DLFEHk';

class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
        // part: 'snippet',
        // maxResults: 5,
        // type: 'video',
        // key: KEY,
      },
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;