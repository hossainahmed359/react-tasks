export const sortedData = (data) => {
    return data.sort((a, b) => {

        if (a.status === 'active') return -1;
        if (b.status === 'active') return 1;

        if (a.status === 'completed') return -1;
        if (b.status === 'completed') return 1;

        if (a.status === 'all') return -1;
        if (b.status === 'all') return 1;

        return 0;
    })

}

export const filterActiveTabData = ({ activeTab = 'all', data }) => {
    switch (activeTab) {
        case 'all':
            return sortedData(data)
        case 'active':
            return data.filter(el => el.status === 'active');
        case 'completed':
            return data.filter(el => el.status === 'completed');
        default:
            return data;;
    }

}