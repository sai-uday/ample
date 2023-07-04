import React, { Component } from 'react';

const htmlDecode=(input)=>{
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

export class Cards extends Component {
  render() {
    let { title, description, newsUrl, score } = this.props;
    return (
      <div>
        <div className="card sm" style={{ width: "100%" }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: htmlDecode(description) }}
            ></div>
            <h5>score: {score}</h5>
            <a href={newsUrl} target="blank" className="btn btn-primary">Readmore</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
