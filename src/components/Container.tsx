import { makeStyles } from "@material-ui/styles";
import { ContainerItem } from "../interfaces/container.interface";
import { ContainerStyle } from "../interfaces/containerStyle.interface";
import backgroundDefault from "../assets/bgProfile.jpg";
import Card from "./Card";
import Header from "./Header";

export default function Container({ cards, background }: ContainerItem) {
  const styleProps: ContainerStyle = {
    backgroundImage: background || backgroundDefault,
  };
  const classes = useStyles(styleProps);
  return (
    <div className={classes.scrollingImageContainer}>
      <div className={`${classes.backgroundImage} ${classes.scrollingImage}`}>
        <Header />
        <div className={classes.cardContainer}>
          {cards.map((card) => {
            return (
              <Card
                key={card.title}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles<{}, ContainerStyle>(() => ({
  backgroundImage: (props) => ({
    background: `url(${props.backgroundImage}) repeat center`,
    backgroundPosition: "center",
    minHeight: "100vh",
  }),
  scrollingImageContainer: {
    overflow: "hidden",
  },
  scrollingImage: {
    animation: "$slide 180s linear infinite",
  },
  "@keyframes slide": {
    from: {
      backgroundPosition: "0",
    },
    to: {
      backgroundPosition: "top -1920px left -1920px",
    },
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 300px)",
    flexWrap: "wrap",
  },
}));
