const GridStyle = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperMap: {
        padding: 0,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 20,
        overflow: "hidden"
    },
});

export default GridStyle;
