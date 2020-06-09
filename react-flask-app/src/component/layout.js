import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinearStepper from'./stepper';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  settings: {
    float:"right",  
    },
}));

const data = {
  today: [{
    'title':"UTTARAKHAND BOARD EXAM 2020 DATE ",
    'summary':"The Uttarakhand (UK) Board of School Education (UBSE) " ,
    'image':"https://bsmedia.business-standard.com/_media/bs/img/article/2019-04/24/thumb/1556128853-335.jpg",  
    'time':"09:16:00",
    'link':"https://www.business-standard.com/article/education/uttarakhand-board-exam-2020-date-sheet-revised-exams-now-from-june-20-120060600170_1.html"
  },
  {
    'title': 'Exams now from June 20',
    'summary': 'The UBSE is also planning to conduct the Board exams',
    'image':"https://bsmedia.business-standard.com/_media/bs/img/misc/2018-12/18/thumb/google-1545123087-72182440.jpg",
    'time':"09:16:00",
    'link':"https://www.business-standard.com/article/education/uttarakhand-board-exam-2020-date-sheet-revised-exams-now-from-june-20-120060600170_1.html"
  }
],
   yesterday : [{
      'title':'US CHARGES CHINESE MANUFACTURER OF EXPORTING DEFECTIVE N95 RESPIRATORS',
      'summary':"The company, King Year Packaging and Printing, for each of the four counts faces a fine of up to $500,000 or the total gain and/or loss, whichever is greater",
      'image':"https://bsmedia.business-standard.com/_media/bs/img/article/2020-04/28/thumb/1588057097-1298.jpg",
      'time':"09:16:00",
      'link':"https://www.business-standard.com/article/education/uttarakhand-board-exam-2020-date-sheet-revised-exams-now-from-june-20-120060600170_1.html"
    },
    {
      'title':"FRENCH TROOPS KILL HEAD OF AL-QAEDA IN THE ISLAMIC MAGHREB IN MALI,",
      'summary':"French Defence Minister Florence Parly said Abdelmalek Droukdel had led all the AQMI operations in northern Africa and the region of Sahel",
      'image':"https://bsmedia.business-standard.com/_media/bs/img/article/2017-03/26/thumb/1490520701-9115.jpg",
      'time':"09:16:00",
      'link':"https://www.business-standard.com/article/education/uttarakhand-board-exam-2020-date-sheet-revised-exams-now-from-june-20-120060600170_1.html" 
    }
  ],
  daybeforeyesterday: [{
    'title':"BACKLASH OVER TRUMP POSTS: FACEBOOK BLINKS, ASSURES CONTENT POLICY REVIEW ",
    'summary':"CEO Mark Zuckerberg said Facebook would be more transparent about its decision-making" ,
    'image':"https://bsmedia.business-standard.com/_media/bs/img/article/2018-07/25/thumb/1532525428-0063.jpg",
    'time':"09:16:00",
    'link':"https://www.business-standard.com/article/education/uttarakhand-board-exam-2020-date-sheet-revised-exams-now-from-june-20-120060600170_1.html" 
  },
  {
    'title': 'SURAT TEXTILE MARKET URGES GOVT TO RELAX COVID NORMS TO SOLVE LABOUR ISSUES',
    'summary': 'Hundreds of thousands of migrant labourers who come to the city for work are involved in stocking sarees and dress materials in the godown and in loading the parcels which are sent to other states',
    'image':"https://bsmedia.business-standard.com/_media/bs/img/article/2020-05/12/thumb/1589304736-1053.jpg",
    'time':"09:16:00",
    'link':"https://www.business-standard.com/article/education/uttarakhand-board-exam-2020-date-sheet-revised-exams-now-from-june-20-120060600170_1.html" 
  },
  {
    'title':"YATRA ONLINE TERMINATES PENDING MERGER AGREEMENT WITH US-BASED EBIX INC ",
    'summary':"Online travel firm Yatra Online Inc said it was seeking damages against Ebix for breaching terms of their merger agreement" ,
    'image':"https://bsmedia.business-standard.com/_media/bs/img/article/2017-09/22/thumb/1506093837-0812.jpg",
    'time':"09:16:00",
    'link':"https://www.business-standard.com/article/education/uttarakhand-board-exam-2020-date-sheet-revised-exams-now-from-june-20-120060600170_1.html"  
  },
  {
    'title': 'OPEC, RUSSIA MEET TO EXTEND RECORD OIL SUPPLY CUTS, PUSH FOR COMPLIANCE',
    'summary': 'An extension to cuts was contingent on high compliance, three Opec sources told Reuters',
    'image':"https://bsmedia.business-standard.com/_media/bs/img/article/2019-08/20/thumb/1566245314-0084.jpg",
    'time':"09:16:00",
    'link':"https://www.business-standard.com/article/education/uttarakhand-board-exam-2020-date-sheet-revised-exams-now-from-june-20-120060600170_1.html"  
  }
],
}

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['All Category','India','Business','Sports','World','Politics','Technology','Startup','Entertainment','Science','Automobile'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <LinearStepper data={data}/>
      </main>
    </div>
  );
}
