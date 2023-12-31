import { useContext } from "react";
import { AppContext } from "../pages/Home";

const ContextComponent = () => {
  const details = useContext(AppContext);
  return (
    <div>
      {details && (
        <div>
          <p>Linguagem: {details.language}</p>
          <p>Framework: {details.framework}</p>
          <p>Quantidade: {details.projects}</p>
        </div>
      )}
    </div>
  );
};

export default ContextComponent;
