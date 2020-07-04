import React from 'react';
import $ from 'jquery'
import Moment from 'react-moment'


class News extends React.Component {
  componentDidMount() {
    var today =  <Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment> 
    const urlNews = 'https://cors-anywhere.herokuapp.com/' + "https://newsapi.org/v2/everything?language=en&q=bitcoin&from="+ today +"&sortBy=publishedAt&apiKey=46f225ffb36d463dbf82d74ee65a1700"
    
    $.ajax({
      url: urlNews,
      method: "GET",
    }).then(function (response) {
      //console.log(response)
      for (let i=0; i<6; i++){
        var articles = response.articles
        // console.log(articles)
        var title = response.articles[i].title
        var description = response.articles[i].description
        var explore = response.articles[i].url
        var image = response.articles[i].urlToImage
        // console.log(explore)
        $('#title'+ i).text(title)
        $('#des' + i).text(description)
        $('#link-button' + i).attr('href',explore)
        $('#card-img' + i).attr('src', image)
      }
      
    });
    }
    render() {
  return (
  <div>
    <div
      id="crypto-news"> 
      <div id="title-crypto" className="mui--text-display3">Crypto</div>
      <br />
      <div className="mui--text-display4">NEWS</div>
    </div>
    <div className="mui-container">
      <div className="mui-row">
        <div  className="mui-col-md-4">
          <div className="card-example mui--text-center mui--z1">
            <img id="card-img0" alt="" />
            <div className="label">
              <br />
              <div
                id="title0"
                className="title mui--text-dark mui--text-headline"
              ></div>
              <br />
              <div className="mui--text" id="des0"></div>
              <button className="mui-btn mui-btn--flat">
                <a id="link-button0">Explore</a>
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="mui-col-md-4">
          <div className="card-example mui--text-center mui--z1">
            <img id="card-img1" alt="" />
            <div className="label">
              <br />
              <div
                id="title1"
                className="title mui--text-dark mui--text-headline"
              ></div>
              <br />
              <div className="mui--text" id="des1"></div>
              <button className="mui-btn mui-btn--flat">
                <a id="link-button1">Explore</a>
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="mui-col-md-4">
          <div className="card-example mui--text-center mui--z1">
            <img id="card-img2" alt="" />
            <div className="label">
              <br />
              <div
                id="title2"
                className="title mui--text-dark mui--text-headline"
              ></div>
              <br />
              <div className="mui--text" id="des2"></div>
              <button className="mui-btn mui-btn--flat">
                <a id="link-button2">Explore</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="mui-row">
        <div  className="mui-col-md-4">
          <div className="card-example mui--text-center mui--z1">
            <img id="card-img3" alt="" />
            <div className="label">
              <br />
              <div
                id="title3"
                className="title mui--text-dark mui--text-headline"
              ></div>
              <br />
              <div className="mui--text" id="des3"></div>
              <button className="mui-btn mui-btn--flat">
                <a id="link-button3">Explore</a>
              </button>
            </div>
          </div>
        </div>
        <br />
        <div  className="mui-col-md-4">
          <div className="card-example mui--text-center mui--z1">
            <img id="card-img4" alt="" />
            <div className="label">
              <br />
              <div
                id="title4"
                className="title mui--text-dark mui--text-headline"
              ></div>
              <br />
              <div className="mui--text" id="des4"></div>
              <button className="mui-btn mui-btn--flat">
                <a id="link-button4">Explore</a>
              </button>
            </div>
          </div>
        </div>
        <br />
        <div  className="mui-col-md-4">
          <div className="card-example mui--text-center mui--z1">
            <img id="card-img5" alt="" />
            <div className="label">
              <br />
              <div
                id="title5"
                className="title mui--text-dark mui--text-headline"
              ></div>
              <br />
              <div className="mui--text" id="des5"></div>
              <button className="mui-btn mui-btn--flat">
                <a id="link-button5">Explore</a>
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
);
  }}
  export default News;