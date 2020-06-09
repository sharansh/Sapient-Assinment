import React, { Component } from 'react';
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';
 
export default class LineChartCustom extends Component {
    state= {
        dataOptions_x : [],
        dataOptions_y: [],
        result: [],
        test: []
    }

    componentDidUpdate = () => {
        this.props.chartsdata.map(eachitem => {
           

            for (let key in eachitem){
                if(key === 'author'){
                    delete eachitem.author
                }
                if(key === 'comment_text'){
                    delete eachitem.comment_text
                }
                if(key === 'created_at'){
                    delete eachitem.created_at
                }
                if(key === 'created_at_i'){
                    delete eachitem.created_at_i
                }
                if(key === 'objectID'){
                    delete eachitem.objectID
                }
                if(key === 'parent_id'){
                    delete eachitem.parent_id
                }
                if(key === 'relevancy_score'){
                    delete eachitem.relevancy_score
                }
                if(key === 'story_id'){
                    delete eachitem.story_id
                }
                if(key === 'story_text'){
                    delete eachitem.story_text
                }
                if(key === 'story_title'){
                    delete eachitem.story_title
                }
                if(key === 'story_url'){
                    delete eachitem.story_url
                }
                if(key === 'title'){
                    delete eachitem.title
                }
                if(key === 'story_text'){
                    delete eachitem.objectID
                }
                if(key === 'story_title'){
                    delete eachitem.parent_id
                }
                if(key === 'url'){
                    delete eachitem.url
                }
                if(key === '_highlightResult'){
                    delete eachitem._highlightResult
                }
                if(key === '_tags'){
                    delete eachitem._tags
                }
            }
            this.state.result.push(eachitem);
        });
    } 
    render() {    
        const test = this.state.result;
        console.log(test);
    //    const chartpoints = this.state.result.map(function(obj) { 
    //         obj['x'] = obj['points']; // Assign new key
    //         delete obj['points']; // Delete old key
    //         // obj['y'] = obj['num_comments']; // Assign new key
    //         // delete obj['num_comments']; // Delete old key

    //         return obj; 
    //     }); 
       //console.log(chartpoints);
        const data = [
            {									
                color: "steelblue", 
                points: test
                // points: [{ x: 1, y: 64 },
				// 	{ x: 2, y: 61 },
				// 	{ x: 3, y: 64 },
				// 	{ x: 4, y: 62 },
				// 	{ x: 5, y: 64 },
				// 	{ x: 6, y: 60 },
				// 	{ x: 7, y: 58 },
				// 	{ x: 8, y: 59 },
				// 	{ x: 9, y: 53 },
				// 	{ x: 10, y: 54 },
				// 	{ x: 11, y: 61 },
				// 	{ x: 12, y: 60 },
				// 	{ x: 13, y: 55 },
				// 	{ x: 14, y: 60 },
				// 	{ x: 15, y: 56 },
				// 	{ x: 16, y: 60 },
				// 	{ x: 17, y: 59.5 },
				// 	{ x: 18, y: 63 },
				// 	{ x: 19, y: 58 },
				// 	{ x: 20, y: 54 },
				// 	{ x: 21, y: 59 },
				// 	{ x: 22, y: 64 },
				//  	{ x: 23, y: 59 }] 
                }
            ];
            //const staired = parseStairChart(stair, "startDate", "endDate", "name");
        return (
            <div>
                <div className="">
                    <LineChart 
                        width={1000}
                        height={300}
                        data={test}
                    />
                </div>				
            </div>
        );
    }
}