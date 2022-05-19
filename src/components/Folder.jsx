import { Col } from 'react-bootstrap';
import { FaFolder } from 'react-icons/fa';

import styles from '../styles/folder.module.css';

const Folder = ({ folderName }) => {
  return ( 
    <Col>
        <FaFolder className={styles.folder} />
        <div className={styles.title}>{folderName}</div>
    </Col>
  );
}
 
export default Folder;