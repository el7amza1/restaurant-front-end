import React from 'react'
const Items = () => {
    const itmes = [
        {
            id: 1,
            itemName: 'seafood pizza',
            ingredients: ['snail', 'fish', 'shrimp'],
            price: 140,
            orderQty: 0,
            category: 'pizza',
            popular: true,
        },
        {
            id: 2,
            itemName: 'chicken ranch pizza',
            ingredients: ['chicken', 'ranch sauce'],
            price: 120,
            orderQty: 0,
            category: 'pizza',
            popular: true,
        },
        {
            id: 3,
            itemName: 'Cheese mix pizza',
            ingredients: ['snail', 'fish', 'shrimp'],
            price: 140,
            orderQty: 0,
            category: 'pizza',
            popular: true,
        },
        {
            id: 4,
            itemName: 'chicken ranch pizza',
            ingredients: ['chicken', 'ranch sauce'],
            price: 120,
            orderQty: 0,
            category: 'pizza',
            popular: true,
        },
        {
            id: 5,
            itemName: 'beef burger',
            ingredients: ['beef', 'cheese', 'lattice'],
            price: 45,
            orderQty: 0,
            category: 'burger',
            popular: true,
        },
        {
            id: 6,
            itemName: 'beef burger',
            ingredients: ['beef', 'cheese', 'lattice'],
            price: 45,
            orderQty: 0,
            category: 'burger',
            popular: true,
        },
        {
            id: 7,
            itemName: 'beef burger',
            ingredients: ['beef', 'cheese', 'lattice'],
            price: 45,
            orderQty: 0,
            category: 'burger',
            popular: true,
        },
        {
            id: 8,
            itemName: 'beef burger',
            ingredients: ['beef', 'cheese', 'lattice'],
            price: 45,
            orderQty: 0,
            category: 'burger',
            popular: true,
        },
        {
            id: 9,
            itemName: 'espresso',
            ingredients: ['coffee'],
            price: 35,
            orderQty: 0,
            category: 'drinks',
            popular: false,
        },
        {
            id: 10,
            itemName: 'mocha',
            ingredients: ['coffee', 'chocolate'],
            price: 55,
            orderQty: 0,
            category: 'drinks',
            popular: true,
        },
        {
            id: 11,
            itemName: 'espresso',
            ingredients: ['coffee'],
            price: 35,
            orderQty: 0,
            category: 'drinks',
            popular: false,
        },
        {
            id: 12,
            itemName: 'mocha',
            ingredients: ['coffee', 'chocolate'],
            price: 55,
            orderQty: 0,
            category: 'drinks',
            popular: true,
            imgUrl: ""
        },
    ];
    return (
        <div className="container">
            <div className="card">
                <ul className="p-l">
                    {itmes.map((itm, inx) => (

                        <li key={inx}>
                            <div className="p">
                                <div className="p-img">
                                    <img src={itm.imgUrl} />
                                </div>
                                <div className="p-n">
                                    <h4>{itm.itemName}</h4>
                                    <div className="p-c">
                                        <span>{itm.ingredients} </span>
                                        <small className="line"></small>
                                        <span>{itm.category} </span>
                                    </div>
                                    <span>${itm.price}</span>
                                </div>
                            </div>
                        </li>
                    ))
                    }

                </ul>
            </div>

        </div>
    )
}

export default Items
