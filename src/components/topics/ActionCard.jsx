
import propTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faPenToSquare, faCircleUser, faRectangleList, faShapes } from '@fortawesome/free-solid-svg-icons'

library.add(faCirclePlus, faPenToSquare, faCircleUser, faRectangleList, faShapes)


function ActionCard({title, text, action, link, icon}) {
  return (
    
          <Card className="pt-3  ">
            <FontAwesomeIcon icon={icon} className="fa-8x" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
                <Card.Text>
                {text}
                </Card.Text>
                <LinkContainer to={link}>
                    <Button size="lg" variant="primary">{action}</Button>
                </LinkContainer>
            </Card.Body>
          </Card>

  );
}

ActionCard.propTypes = {
    title: propTypes.string,
    text: propTypes.string,
    action: propTypes.string,
    link: propTypes.string,
    icon: propTypes.array
}

export default ActionCard;