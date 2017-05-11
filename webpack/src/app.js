import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NewsList from './NewsList.js'
import '../css/app.css'

class HelloWorld extends Component{
    render(){
        return(
            <div>Hello World</div>
        );
    }
}

ReactDOM.render(<NewsList/>,$('#content')[0]);