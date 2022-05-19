import ButtonCreate from "../components/ButtonCreate";
import ButtonUpload from "../components/ButtonUpload";
import Searcher from "../components/Searcher";

import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ButtonOrder from "../components/ButtonOrder";

const Files = () => {
  return ( 
    <div className="main container">
      <h2 className="text-center pt-5">Files</h2>
      <Searcher />
      <Stack direction="horizontal">
        <ButtonUpload />
        <ButtonCreate />
        <ButtonOrder className="ms-auto" />
      </Stack>

      <Container className="my-5">
        <Row className="text-center" xs={2} sm={3} md={4} lg={5} xl={6} xxl={8}>
        </Row>
      </Container>
    </div>
  );
}
 
export default Files;
