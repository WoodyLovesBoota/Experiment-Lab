import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>This is Detail Screen{id}</h3>
    </div>
  );
};

export default Detail;
