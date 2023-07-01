import React, { Component } from 'react'
import Newstiles from './Newstiles'

export class News extends Component {

    constructor() {
        super()
        this.state = {
            articles: []
        }
    }
    async componentDidMount() {
        let url = "https://www.reddit.com/r/reactjs.json";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.data.children })
        // console.log(this.state.articles,parsedData.data.children.data.title)
    }
    render() {
        return (
            <div className='container my-4 '>

                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-12 my-1' key={element.data.created}>
                            {/* {console.log(element.data.url)} */}
                            <Newstiles title={element.data.title?element.data.title.slice(0,40):""} description={element.data.selftext_html?element.data.selftext_html:""} newsUrl={element.data.url?element.data.url:""} score={element.data.score?element.data.score:"no data"}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
