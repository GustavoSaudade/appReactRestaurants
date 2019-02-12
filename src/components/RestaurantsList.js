import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '99.5%',
    backgroundColor: theme.palette.background.paper,
    border: 'solid 1px #000',
    margin: "2px"
  },
  
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  return (
    <div>
        {
            props.rest.map(restaurant => {
                const { id, name, type, money_rate, star_rate } = restaurant;
                return (
                    <div key={id}>
                        <List className={classes.root}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                primary={name}
                                secondary={
                                    <React.Fragment>
                                        <Typography component="span" className={classes.inline} color="textPrimary">
                                            {type}
                                        </Typography>
                                        {" - "+money_rate}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </List>
                    </div>
                ); 
            })
        }
    </div>  
    
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);