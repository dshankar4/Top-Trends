import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom:'4%',
    marginLeft:'4%',
    borderRadius:'5px',
    width:'650px',
    height:'200px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    wordWrap:'break-word',
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
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
        > 
            <Grid item>
                <CardMedia
                    className={classes.cover}
                    image={_cardContent.image}
                    title={_cardContent.title}
                />
            </Grid>
            <Grid item>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h6" variant="subtitle1">
                        {_cardContent.title.length < 40 ? _cardContent.title : _cardContent.title.slice(0,40).concat("...")}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                    {_cardContent.summary.length < 100 ? _cardContent.summary : _cardContent.summary.slice(0,80).concat("...")}
                    </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    <IconButton aria-label="previous">
                    <ThumbUpIcon/>
                    </IconButton>
                    <IconButton aria-label="next">
                        <ThumbDownIcon/>
                    </IconButton>
                    <a  href="#contained-buttons">
                        Link
                    </a>
                    </div>
                </div>
            </Grid>
         </Grid>
        </Card>
    )      
  );
}