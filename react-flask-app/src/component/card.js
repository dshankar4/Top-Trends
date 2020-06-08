import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom:'4%',
    marginLeft:'4%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { cardContent } = props;
  console.log(props.cardContent)

  return (
    cardContent.map(_cardContent =>
        <Card className={classes.root} key={_cardContent.title}>
        <CardMedia
            className={classes.cover}
            image={_cardContent.image}
            title={_cardContent.title}
        />
        <div className={classes.details}>
            <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
                {_cardContent.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {_cardContent.summary}
            </Typography>
            </CardContent>
            <div className={classes.controls}>
            <IconButton aria-label="previous">
            <ThumbUpIcon/>
            </IconButton>
            <IconButton aria-label="next">
                <ThumbDownIcon/>
            </IconButton>
            <Button variant="contained" color="primary" href="#contained-buttons">
              Link
            </Button>
            </div>
        </div>
        </Card>
    )      
  );
}