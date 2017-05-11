import React from 'react';

import '../css/NewsItem.css'

import URL from 'url';

export default class NewsItem extends React.Component{
    render(){
        return(
            <div className="newsItem">
                <div className="newsItem-itemText">
                    {this.getTitle()}
                </div>
            </div>    
        );
    }

    getDomain(){
        return URL.parse(this.props.item.url).hostname;
    }

    getTitle(){
        return(
            <div className="newsItem-title">
                <a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
                <span className="newsItem-domain"><a href={'https://news.ycombinator.com/from?site=' + this.getDomain()}>({this.getDomain()})</a></span>
            </div>
        )
    }
}