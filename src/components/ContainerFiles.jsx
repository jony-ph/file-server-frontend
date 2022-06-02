import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import FolderFile from "./FolderFile";

const ContainerFiles = ({ items }) => {
  return ( 

    <Container className="py-5">
      <Row className="text-center" xs={2} sm={3} md={4} lg={5} xl={6} xxl={8}>
        {
          items.map( item => 
            <FolderFile 
              key={item.path} 
              path={item.path} 
              item={item} 
            />
          )
        }
      </Row>
    </Container>

  );
}
 
export default ContainerFiles;