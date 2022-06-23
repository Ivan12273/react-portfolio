import Container from "../components/Container";
import backgroundImage from "../assets/bgProjects.jpg";
import project1 from "../assets/views/project1.png";
import project2 from "../assets/views/project2.png";
import project3 from "../assets/views/project3.png";

const cards = [
  {
    title: "",
    description: "",
    imageUrl: project1,
  },
  {
    title: "",
    description: "",
    imageUrl: project2,
  },
  {
    title: "",
    description: "",
    imageUrl: project3,
  },
];

export default function Project() {
  return (
    <>
      <Container cards={cards} background={backgroundImage} />
    </>
  );
}
