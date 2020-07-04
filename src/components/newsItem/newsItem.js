import React from 'react';

class NewsItem extends React.Component { 

  render() {
    var news = []
    if (this.props.data) {      
      for (var i=0; i < 6; i++){

        news.push(   <div key={i} class="mui-col-md-4">
        <div  class="card-example mui--text-center mui--z1">
          <img src={this.props.data[i].urlToImage} id="card-img" />
          <div class="label">
            <br />
            <div
              id="title"
              class="title mui--text-dark mui--text-headline"
            > {this.props.data[i].title} </div>
            <br />
            <button class="mui-btn mui-btn--flat">
              <a href={this.props.data[i].url}>Explore</a>
            </button>
          </div>
        </div>
        <br />
      </div>
      )
      }
    }

  return (

    <div id="cryptoNews">
      <br />
      <div class="mui--text-display4 mui--text-center"> NEWS</div>
  <div class="mui-container">
  <div class="mui-row">{news.splice(0,3)}</div>
  <div class="mui-row">{news}</div>
  </div> 
  </div>)
  }
}

export default NewsItem;
