import React from 'react';
import { Card, CardHeader, CardBody, Button, CardTitle, CardText} from 'reactstrap';
import "./infoavatar.css"

const InfoAvatar = (props) => {
  return (
    <div className="infoAvatar">
      <Card>
        <CardHeader>Avatar</CardHeader>
        <CardBody>
          <CardTitle>Your score</CardTitle>
          <CardText>Basket</CardText>
          <Button>Throw your dice !</Button>
        </CardBody>
        
      </Card>
    </div>
  );
};

export default InfoAvatar;
