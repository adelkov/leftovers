import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import {HomeStyle} from '../../../styles/HomeStyle'
import Button from "@material-ui/core/Button/Button";




const featuredPosts = [
    {
        title: 'Babi néni kőlevesezője',
        date: 'Nov 12',
        description:
            '"We share food because we feel responsible..."',
    },
    {
        title: 'Ping pong chinese eatery',
        date: 'Dec 30',
        description:
            '"We are proud to be the first restaurant to join this great endeavour..."',
    },
];





function Home(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.layout}>

                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        Leftover food-sharing is caring!
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Take social responsibility and share your leftover food with those in need. <br/>
                                        Let us know when and where, and we'll come pick it up and take it to a homeless shelter.
                                    </Typography>
                                    <Button variant="contained" size="large">
                                        Sign me up
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* End main featured post */}
                    {/* Sub featured posts */}
                    <Grid container spacing={40} className={classes.cardGrid}>
                        {featuredPosts && featuredPosts.map(post => (
                            <Grid item key={post.title} xs={12} md={6}>
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {post.date}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                {post.description}
                                            </Typography>
                                            <Typography variant="subtitle1" color="primary">
                                                Continue reading...
                                            </Typography>
                                        </CardContent>
                                    </div>
                                    <Hidden xsDown>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                                            title="Image title"
                                        />
                                    </Hidden>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {/* End sub featured posts */}
                </main>
            </div>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(HomeStyle)(Home);
