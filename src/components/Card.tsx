import { makeStyles } from "@material-ui/styles";
import { CardItem } from "../interfaces/card.interface";
import backgroundDefault from "../assets/backgroundDefault.png";

export default function Card({ title, description, imageUrl }: CardItem) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={`${classes.face} ${classes.front}`}>
        <img src={imageUrl} alt="" />
        <h3>Title</h3>
      </div>
      <div className={`${classes.face} ${classes.back}`}>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut eos
          eveniet voluptatibus ullam possimus dicta, tempora, ipsum sint
          provident soluta magnam dolorum repellat eius minima?
        </p>
        <div className={classes.link}>
          <a href="">Details</a>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  card: {
    position: "relative",
    width: "400px",
    height: "450px",
    margin: "20px",
    "&:hover": {
      "& $front": {
        transform: "perspective(600px) rotateY(180deg)",
      },
      "& $back": {
        transform: "perspective(600px) rotateY(360deg)",
      },
    },
  },
  face: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "10px",
    overflow: "hidden",
    transition: ".5s",
  },
  front: {
    transform: "perspective(600px) rotateY(0deg)",
    boxShadow: "0 5px 10px #000",
    fontSize: "26px",
    "& img": {
      position: "absoulute",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    "& h3": {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "45px",
      lineHeight: "45px",
      color: "#fff",
      background: "rgba(0,0,0,.4)",
      textAlign: "center",
    },
  },
  back: {
    transform: "perspective(600px) rotateY(180deg)",
    background: "rgb(3,35,54)",
    color: "#f3f3f3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    boxShadow: "0 5px 10px #000",
    "& h3": {
      fontSize: "50px",
      marginTop: "85px",
      marginBottom: "0px",
      letterSpacing: "2px",
    },
    "& p": {
      padding: "0 15px 0 15px",
      fontSize: "26px",
      letterSpacing: "1px",
    },
  },
  link: {
    borderTop: "solid 1px #f3f3f3",
    height: "50px",
    lineHeight: "50px",
    "& a": {
      fontSize: "26px",    
      color: "#f3f3f3",
    },
  },
});
