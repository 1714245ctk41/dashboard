import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icons = ({iconKey}) => {
  const icons = {
    profileUser: <FontAwesomeIcon icon="fas fa-address-book" style={{color: "#1f1f1f",}} />,
    chevronDown: <FontAwesomeIcon icon="fas fa-chevron-down" style={{color: "#1f1f1f",}} />,
    calendar: <FontAwesomeIcon icon="fa-regular fa-calendar" />,
    circle: <big>&#8226;</big>

  }
  return icons[iconKey]
}

export default Icons;