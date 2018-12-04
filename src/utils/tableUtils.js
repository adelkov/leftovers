export const handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
        order = 'asc';
    }

    this.setState({ order, orderBy });
};

export const handleSelectAllClick = event => {
    if (event.target.checked) {
        this.setState(state => ({ selected: state.data.map(n => n.id) }));
        return;
    }
    this.setState({ selected: [] });
};
