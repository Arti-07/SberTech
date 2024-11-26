import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

interface PopularCardProps {
    title: string;
    imageUrl: string;
    price: string;
}

const PopularCard: React.FC<PopularCardProps> = ({ title, imageUrl, price }) => {
    return (
        <Card
            sx={{
                maxWidth: 400,
                borderRadius: "20px",
                boxShadow: 5,
                backgroundColor: "#49455E",
                border: "2px solid transparent",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "scale(1.1)",
                    boxShadow: "0 4px 15px",
                    backgroundColor: "#797993",
                    borderColor: "#FFFFFF",
                    "& .price": {
                        color: "#FFFFFF",
                    },
                },
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    gap: "5px",
                    padding: "20px",
                }}
            >
                <CardMedia
                    component="img"
                    height="50"
                    image={imageUrl}
                    alt={title}
                />
                <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                        marginTop: "10px",
                        display: "flex",
                        color: "#1E1E2A"
                    }}
                >
                    {title}
                </Typography>

                {/* Цена товара */}
                <Typography
                    variant="body2"
                    component="p"
                    className="price"
                    sx={{
                        marginTop: "13px",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "#797993",
                        textAlign: "center",
                    }}
                >
                    {price}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default PopularCard;
