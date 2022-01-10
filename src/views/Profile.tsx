import Container from "../components/Container";
import backgroundImage from "../assets/backgroundProfile.png";

const cards = [
  {
    title: "",
    description: "",
    imageUrl: "",
  },
];

export default function Profile() {
  return (
    <>
      <Container 
        cards={cards}
        background={backgroundImage} 
      />
    </>
  );
}
