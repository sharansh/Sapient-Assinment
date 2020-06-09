import React, {Component} from 'react';
import './tablerow.css';

class TableRow extends Component{
    state= {
        increasedVote: this.props.num_comments
    }
    increaseVote = () => {
        this.setState((state,props) => ({
            increasedVote : state.increasedVote + 1
        }));
        localStorage.setItem(this.props.objectID, this.state.increasedVote + 1);
    }
    render(){
        return (
            <tr className="tablerowStyling">
                    <td>{this.state.increasedVote}</td>
                    <td>{this.props.objectID}</td>
                    <td>{this.props.points}</td>
                    <td><button onClick={this.increaseVote}>Up</button></td>
                    <td className="titlewrap">{this.props.title}</td>
            </tr>
        )
    }
}

export default TableRow;