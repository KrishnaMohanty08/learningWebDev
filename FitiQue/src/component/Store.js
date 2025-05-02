import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import './gym.css';

function Store(props) {
    const [quant, setStoreList] = useState(props.storeList || []);
    const [total, setTotal] = useState(0);

    const incItem = (index) => {
        let newStoreItem = [...quant];
        let newTotal = total;

        newTotal += newStoreItem[index].cost;
        newStoreItem[index].quantity++;

        setStoreList(newStoreItem);
        setTotal(newTotal);
    };

    const dscItem = (index) => {
        let newStoreItem = [...quant];
        let newTotal = total;

        if (newStoreItem[index].quantity > 0) {
            newTotal -= newStoreItem[index].cost;
            newStoreItem[index].quantity--;
        }

        setStoreList(newStoreItem);
        setTotal(newTotal);
    };

    return (
        <>
            <Navbar />
            <div className="exercise-block">
                <h3>Store</h3>
                <div className="row mb-2">
                    {quant.map((store, index) => (
                        <div className="card card-custom" style={{ width: "18rem" }} key={index}>
                            <div className="card-body mb-4">
                                <img
                                    src={store.image_url}
                                    className="rounded img-thumbnail"
                                    alt={store.item_name}
                                />
                                <h3 className="card-text">{store.item_name}</h3>
                                <h5 className="card-text text-success-emphasis">
                                    Buy or sell: {store.rent_or_buy}
                                </h5>
                                <h5 className="card-text">Cost: {store.cost}</h5>
                            </div>
                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button
                                    type="button"
                                    className="btn border btn-danger"
                                    onClick={() => dscItem(index)}
                                >
                                    -
                                </button>
                                <button type="button" className="btn border btn-warning">
                                    {store.quantity}
                                </button>
                                <button
                                    type="button"
                                    className="btn border btn-success"
                                    onClick={() => incItem(index)}
                                >
                                    +
                                </button>
                            </div>
                            <span className="p-3"></span>
                        </div>
                    ))}
                </div>
            </div>
            <div class="d-flex position-relative">
                    <div>
                        <h2 className="mt-0 align-center">The Total cost of your cart is:{total}</h2>
                    </div>
            </div>
            <Footer />
        </>
    );
}

export default Store;
