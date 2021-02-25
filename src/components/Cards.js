import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Cards.css'

export class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const myList = [
      {"key": "Description", "value": this.props.description},
      {"key": "Name", "value": this.props.name},
      {"key": "Email", "value": this.props.email},
      {"key": "Status", "value": this.props.description},
      {"key": "Duedate", "value": this.props.dueDate}
    ];
    return (
      <Card className="root">
        <CardContent>
        {myList.map((item) =>
          <div key = {item.key + "_" + item.value}>                                 
              <h2 style = {{display: 'inline-block'}}> {item.key}: </h2> {item.value}
          </div>
        )}
        </CardContent>
      </Card>
    );
}
}
export default Cards;