import React from 'react';
import axios from 'axios';
import ContentItem from './ContentItem';
import './App.css';

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            c: [],
            m: {}
        }
    }

    componentDidMount(){
        axios.get('http://srx.pubcdn.net/pdata.php?id=1940&v=2&x=6')
        .then((res) => {
            this.setState(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    showContentItems(){
        return this.state.c.map((item, index) => {
            return (
                <ContentItem key={index} data={item} />
            )
        })
    }

    render() {
        return (
            <div className="App container-fluid">
                <img id='logo' src={this.state.m.i} alt='Logo'/>
                {this.showContentItems()}
            </div>
        );
    }
}

export default App;
