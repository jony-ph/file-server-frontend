import { Col } from 'react-bootstrap';
import { FaFolder } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from '../styles/folder.module.css';

const Folder = ({ path }) => {
  return ( 
    <Col className={styles.container}>
      <Link to={path}>
        <FaFolder className={styles.folder} />
        <div className={styles.title}>{path.substring(path.lastIndexOf('/') + 1)}</div>
      </Link>
    </Col>
  );
}
 
export default Folder;