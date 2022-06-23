import Container from "../components/Container";
import backgroundImage from "../assets/bgProfile.jpg";

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
      <Container cards={cards} background={backgroundImage} />
    </>
  );
}
