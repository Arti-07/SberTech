import React from "react";
import PopularCard from "./popular_card";

const Popular = () => {
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
                <PopularCard
                    title="Bitcoin"
                    imageUrl={require("./logo/bitcoin.png")}
                    price="$100"
                />
                <PopularCard
                    title="Tether"
                    imageUrl={require("./logo/tether.png")}
                    price="$200"
                />
                <PopularCard
                    title="Ethereum"
                    imageUrl={require("./logo/ethereum.png")}
                    price="$300"
                />
                <PopularCard
                    title="Solana"
                    imageUrl={require("./logo/solana.png")}
                    price="$400"
                />
                <PopularCard
                    title="Dogecoin"
                    imageUrl={require("./logo/dogecoin.png")}
                    price="$150"
                />
            </div>
        </div>
    );
};

export default Popular;
