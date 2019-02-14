import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      photos: []
    };
  }
  
  componentDidMount() {
    this.getPhotos();
  }

  getPhotos(id) {
    axios.get('/photos')
      .then(res => {

        console.log('got data to Client!!');
        const photos = res.data;
        this.setState({ 
          isLoaded: true,
          photos 
        });
      });
  }

  render() {

    return (
      <ul>
        { 
          this.state.photos.length && 
          this.state.photos.map((photo, i) => <img key={i} src={photo.url} />)
        }
      </ul>
    );
  }

  // render() {
  //   return <h1>React Component</h1>;
  // }
}

export default App;
