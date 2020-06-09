import React, {Component} from 'react';
import TableRow from './tablerow';
import './table.css';

class Table extends Component{
    componentDidMount () {  
    }
    render(){
        const tabelRowdata = this.props.tableData.map(eachRow => {
            return (
                <TableRow
                key={eachRow.objectID} 
                num_comments={eachRow.num_comments} 
                objectID={eachRow.objectID} 
                points={eachRow.points}
                title={eachRow.title}
                upVote ={eachRow.upVoteButtonClicked} 
                />
                )
        });
        return(
            <div className="tableContainer">  
                <table className="table cutomtablestyle">
                <thead className="cutomtableHeaderStyle">
                    <tr>
                    <th scope="col">Comment</th>
                    <th scope="col">Vote Count</th>
                    <th scope="col">Up Vote</th>
                    <th scope="col">UpVote button</th>
                    <th scope="col">New Details</th>
                    </tr>
                </thead>
                <tbody>
                  { tabelRowdata }
                </tbody>
                </table>
            </div>
        )  
    }
}

export default Table;