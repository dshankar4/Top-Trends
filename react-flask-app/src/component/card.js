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
    height: 200,
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
  publish: {
    float:'right',
    marginTop: theme.spacing(-12),
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
            spacing={4}
            justify="flex-start"
            alignItems="center"
        > 
            <Grid item xs={4}>
                <CardMedia
                    className={classes.cover}
                    image={_cardContent.image}
                    title={_cardContent.title}
                />
            </Grid>
            <Grid item xs={7}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h6" variant="subtitle1">
                        {_cardContent.title.length < 50 ? _cardContent.title : _cardContent.title.slice(0,50).concat("...")}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                    {_cardContent.summary.length < 130 ? _cardContent.summary : _cardContent.summary.slice(0,130).concat("...")}
                    </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                    <IconButton aria-label="previous">
                    <ThumbUpIcon/>
                    </IconButton>
                    <IconButton aria-label="next">
                        <ThumbDownIcon/>
                    </IconButton>
                    <a  href={_cardContent.link}>
                        Link
                    </a>
                    </div>
                </div>
            </Grid>
            <Grid item xs={1}>
              <Typography variant="caption" className={classes.publish}>
                {_cardContent.time}
              </Typography>
            </Grid>
         </Grid>
        </Card>
    )      
  );
}