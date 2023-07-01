import React, { Component } from 'react';

export class Newstiles extends Component {
  render() {
    let { title, description, newsUrl, score } = this.props;
    return (
      <div>
        <div className="card sm" style={{ width: "70rem" }}>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div
              className="card-text"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <h5>score: {score}</h5>
            <a href={newsUrl} target="blank" className="btn btn-primary">
              Readmore
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newstiles;
