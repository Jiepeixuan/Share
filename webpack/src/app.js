import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NewsList from './js/NewsList.js';
import _ from 'lodash';



function get(url) {
    return Promise.resolve($.ajax(url));
}

get('https://hacker-news.firebaseio.com/v0/topstories.json').then(function (stories) {
    return Promise.all(stories.slice(0, 30).map(itemId => get('https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json')));
}).then(function (items) {
    ReactDOM.render(<NewsList items={items} />, $('#content')[0]);
}).catch(function (err) {
    console.log('error occur', err);
});
