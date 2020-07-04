import React from 'react';

class NewsItem extends React.Component { 

  render() {
    return <p> {this.props.data} </p>
  }
}

export default NewsItem;
