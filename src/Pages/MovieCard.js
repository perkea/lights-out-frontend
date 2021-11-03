import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { makeStyles } from "@mui/styles";
import cx from "clsx";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { usePushingGutterStyles } from "@mui-treasury/styles/gutter/pushing";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    overflow: "initial",
    maxWidth: 304,
    backgroundColor: "transparent",
  },
  title: {
    marginBottom: 0,
  },
  rateValue: {
    fontWeight: "bold",
    marginTop: 2,
  },
  content: {
    position: "relative",
    padding: 24,
    margin: "-24% 16px 0",
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  favorite: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  locationIcon: {
    marginRight: 4,
    fontSize: 18,
  },
  postButton: {
    background: "transparent",
    border: "2px solid white",
    color: "white",
    fontWeight: "bolder",
    borderRadius: 17,
  },
  reviewBox: {
    maxWidth: 500,
    fontSize: 20,
    fontWeight: "bolder",
    width: "250%",
    background: "rgb(30,30,30)",
    border: "none",
    padding: 15,
    color: "white",
    borderRadius: 30,
    letterSpacing: 3,
    wordSpacing: 7,

    "&:focus": {
      outline: "none",
    },
  },
}));

export default function MovieCard(props) {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const shadowStyles = useFadedShadowStyles();
  const gutterStyles = usePushingGutterStyles({ firstExcluded: true });
  return (
    <div>
      <Typography className={styles.heading}>Post Review</Typography>
      <Rating value={props.rating} className={styles.rating} />
      <TextareaAutosize
        value={props.comment}
        maxLength={300}
        className={styles.reviewBox}
        boxShadow={3}
        rowsMin={6}
        placeholder={"Post something"}
      />

      {/* <Typography className={styles.heading}>Post Review</Typography>
      <Rating name={"rating"} value={props.rating} className={styles.rating} />
      <TextareaAutosize
        maxLength={300}
        className={styles.reviewBox}
        boxShadow={3}
        rowsMin={6}
        placeholder={"Write Your Review Here ..."}
        type="text"
        name="comment"
        value={props.comment}
      />
      <Typography className={styles.heading}> {props.comment}</Typography> */}
      {/* <Button className={styles.postButton}>Post Review</Button> */}
    </div>

    // <Card elevation={0} className={styles.root}>
    //   <CardContent className={cx(shadowStyles.root, styles.content)}>
    //     <Box display={"flex"} alignItems={"center"} mb={1}  className={gutterStyles.parent}>
    //         <Rating name={"rating"} value={props.rating} size={"small"} />
    //         <Typography variant={"body2"}className={styles.rateValue}>
    //         {props.rating}
    //         </Typography>
    //     </Box>
    //     <Typography variant={"body2"}>
    //     {props.comment}
    //     </Typography>
    //   </CardContent>
    // </Card>

    // <Card raised = "true" sx={{ maxWidth: 345 }}>
    //   <CardActionArea>
    //     {props.rating}
    //     <CardContent>

    //       <Typography variant="body2" color="text.secondary">
    //        {props.comment}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
  );
}
