import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Card = styled.div`
  a {
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    padding: 5px;
  }
  margin-right: 10px;
`;

const User = () => {
  const Users = [
    {
      id: 1,
      name: "Garrett Taylor",
      age: 44,
      country: "Greece",
    },
    {
      id: 2,
      name: "Garrett Rice",
      age: 89,
      country: "Grenada",
    },
    {
      id: 3,
      name: "Leonard Benson",
      age: 17,
      country: "Papua New Guinea",
    },
    {
      id: 4,
      name: "Gregory Allison",
      age: 40,
      country: "China",
    },
    {
      id: 5,
      name: "Claudia Harper",
      age: 42,
      country: "Guatemala",
    },
  ];
  return (
    <Container>
      {Users.map((card) => (
        <Card key={card.id}>
          <Link to={`detail/${card.id}`}>
            <span>{card.id}</span>
            <span>
              {card.name}({card.age})
            </span>
            <span>{card.country}</span>
          </Link>
        </Card>
      ))}
    </Container>
  );
};

const Home = () => {
  return (
    <div>
      <h1>This is Home Screen</h1>
      <User></User>
    </div>
  );
};

export default Home;
