const INITIAL_STATE = {
    sections: [{
        title: 'DESIGN YOUR OUTFIT',
        imageUrl: 'https://i.ibb.co/8x25Tjh/Rectangle-142.png',
        id: 1,
        linkUrl: 'designoutfit',
        size: 'large'
    },
    {
        title: 'JEWELLERY',
        imageUrl: 'https://i.ibb.co/n7tNzwY/Rectangle-144.png',
        id: 2,
        linkUrl: 'jewellery'
    },
    {
        title: 'CLOTHING',
        imageUrl: 'https://i.ibb.co/VMpdZV4/Rectangle-147.png',
        id: 3,
        linkUrl: 'shop/womens'
    },
    {
        title: 'RAW FABRIC',
        imageUrl: 'https://i.ibb.co/BwHMMjW/Rectangle-157.png',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'THRIFT STORE',
        imageUrl: 'https://i.ibb.co/YyT73dr/Rectangle-161.png',
        id: 4,
        linkUrl: 'thriftstore'
    },
    {
        title: 'INDIAN JUTTI',
        imageUrl: 'https://i.ibb.co/K5DqGyG/Rectangle-145.png',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: ' STREET WEAR',
        imageUrl: 'https://i.ibb.co/x2xZ8KB/Rectangle-153.png',
        
        id: 4,
        linkUrl: 'streetwear'
    },
    {
        title: ' ACCESSORIES ',
        imageUrl: 'https://i.ibb.co/tDtXPHL/Rectangle-152.png',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: ' DESIGNER AT HOME ',
        imageUrl: 'https://i.ibb.co/MGvh5X3/Rectangle-158.png',
        id: 4,
        linkUrl: 'shop/womens',
    },
    {
        title: ' MAKEUP ARTIST & HAIRSTYLIST AT HOME ',
        imageUrl: 'https://i.ibb.co/8cHqvD8/Rectangle-160.png',
        id: 5,
        linkUrl: 'makeuphair'
    },
    {
        title: ' TAILORING SERVICES ',
        imageUrl: 'https://i.ibb.co/Qcq9b5v/Rectangle-159.png',
        id: 4,
        linkUrl: 'shop/womens'
    },

]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default directoryReducer