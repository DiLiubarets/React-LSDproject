import React from 'react';

class NewsItem extends React.Component { 

  render() {
    var news = []
    if (this.props.data) {      
      for (var i=0; i < 6; i++){

        news.push(   <div key={i} className="mui-col-md-4">
        <div  className="card-example mui--text-center mui--z1">
          <img src={this.props.data[i].urlToImage} id="card-img" alt="crypto news"/>
          <div className="label">
            <br />
            <div
              id="title"
              className="title mui--text-dark mui--text-headline"
            > {this.props.data[i].title} </div>
            <br />
            <button className="mui-btn mui-btn--flat">
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
      <div className="mui--text-display4 mui--text-center"> NEWS</div>
  <div className="mui-container">
  <div className="mui-row">{news.splice(0,3)}</div>
  <div className="mui-row">{news}</div>
  </div> 
  </div>)
  }
}

export default NewsItem;
