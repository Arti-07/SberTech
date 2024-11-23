import React from "react";
import FavoriteCard from "./favorite_card";

const Favorites = () => {
    return (
        <div style={{ padding: "5px" }}>
            <div
                style={{
                    display: "flex",
                    gap: "15px",
                    justifyContent: "center",
                    marginTop: "0px",
                }}
            >
                <FavoriteCard
                    title="Bitcoin"
                    imageUrl={require("./logo/bitcoin.png")}
                    price="$100"
                />
                <FavoriteCard
                    title="Tether"
                    imageUrl={require("./logo/tether.png")}
                    price="$200"
                />
                <FavoriteCard
                    title="Ethereum"
                    imageUrl={require("./logo/ethereum.png")}
                    price="$300"
                />
                <FavoriteCard
                    title="Solana"
                    imageUrl={require("./logo/solana.png")}
                    price="$400"
                />
                <FavoriteCard
                    title="Dogecoin"
                    imageUrl={require("./logo/dogecoin.png")}
                    price="$150"
                />
            </div>
        </div>
    );
};

export default Favorites;
