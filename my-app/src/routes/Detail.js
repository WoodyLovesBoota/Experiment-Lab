import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>This is Detail Screen</h3>
      <h2>You choose card no.{id}</h2>
    </div>
  );
};

export default Detail;
