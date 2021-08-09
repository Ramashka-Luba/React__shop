import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            // marginTop: theme.spacing(2),
            fontSize: '50px',
        },
    },
}));

const style = {
    fontSize: '50px',
    
  };
export default function PaginationRounded() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination style={style} count={10} shape="rounded"/>
        </div>
    );
}