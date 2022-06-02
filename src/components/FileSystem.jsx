import ButtonBack from "../components/ButtonBack";
import Searcher from "../components/Searcher";
import ButtonCreate from "../components/ButtonCreate";
import ButtonUpload from "../components/ButtonUpload";

import Stack from "react-bootstrap/Stack";
import ButtonOrder from "../components/ButtonOrder";


const FileSystem = () => {
  return ( 
    <div>
      <ButtonBack />
      <Searcher />
      <Stack direction="horizontal">
        <ButtonUpload />
        <ButtonCreate />
        <ButtonOrder className="ms-auto" />
      </Stack> 
    </div>
  );
}
 
export default FileSystem;