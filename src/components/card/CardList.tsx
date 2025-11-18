import Card from "./Card";

interface CardListProps {
  robots: {
    id: number;
    name: string;
    email: string;
  }[];
}

const CardList = ({ robots }: CardListProps) => {
  return (
    <div>
      {robots.map(user => (
        <Card key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default CardList;
