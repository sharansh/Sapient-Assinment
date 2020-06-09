import React, {Component} from 'react';
import axios from 'axios';
import Table from '../../component/Table/table';
import LineChartCustom2 from '../../component/charts/chart2';

import '../Past/past.css';

class Home extends Component{
    state = {
        tableData: [],
        tabledatachart: [],
        initiallimit: 0,
        finallimit: 6,
        limit:6,
        chartsdata: []
    }

    componentDidMount () {
        axios.get('https://hn.algolia.com/api/v1/search?query=foo&tags=story')
        .then(response => {
            const updatevote = response.data.hits.map(eachdata => {
                return {
                    ...eachdata,
                    upVoteButtonClicked: this.upVoteButtonClicked
                }
            });
            this.setState({tableData: updatevote});
        });
        axios.get('https://hn.algolia.com/api/v1/search?query=foo&tags=story')
        .then(response => {
            this.setState({tabledatachart: response.data.hits});
        });
    }
 
    increment = () => {
        if(this.state.finallimit > this.state.tableData.length){
            return
        }
        this.setState({ 
            initiallimit: this.state.initiallimit +  this.state.limit,
            finallimit: this.state.finallimit + this.state.limit
        }); 
        localStorage.setItem('initiallimit', this.state.initiallimit); 
        localStorage.setItem('finallimit', this.state.finallimit);

    }
    decrement = () => {
        if(this.state.initiallimit <= 0){
            return
        }
        this.setState({ 
            initiallimit: this.state.initiallimit -  this.state.limit,
            finallimit: this.state.finallimit - this.state.limit
        });
        localStorage.setItem('initiallimit', this.state.initiallimit); 
        localStorage.setItem('finallimit', this.state.finallimit);
    }
    upVoteButtonClicked = () => {
        alert("HI");
    }

    render(){
        return(
            <div>
                <Table tableData={this.state.tableData.slice(this.state.initiallimit, this.state.finallimit)} />
                <div className="paginationController">
                    <button className="" onClick={this.decrement}>Previous</button>
                    <button className="" onClick={this.increment}>Next</button>
                </div>
                <LineChartCustom2 chartsdata={this.state.tabledatachart.slice(this.state.initiallimit, this.state.finallimit)}/>
            </div>
        )  
    }
}

export default Home;