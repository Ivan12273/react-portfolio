import Container from "../components/Container";
import backgroundImage from "../assets/backgroundArt.png";
import art1 from "../assets/views/art1.jpg";
import art2 from "../assets/views/art2.jpg";

const cards = [
  {
    title: "",
    description: "",
    imageUrl: art1,
  },
  {
    title: "",
    description: "",
    imageUrl: art2,
  },
];

export default function Art() {
	return (
		<>
      <Container 
        cards={cards}
        background={backgroundImage} 
      />
    </>
	)
}
