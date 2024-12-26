import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

interface FavoriteCardProps {
    title: string;
    imageUrl: string;
    price: string;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ title, imageUrl, price }) => {
    return (
        <Card
            sx={{
                maxWidth: 400,
                borderRadius: "20px",
                boxShadow: 5,
                border: "2px solid transparent",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    transform: "scale(1.05) rotate(5deg)",
                    boxShadow: "0 4px 15px rgba(0, 255, 255, 0.5)",
                    borderColor: "rgba(78, 57, 222, 1.00)",
                },
                "&:active": {
                    transform: "scale(0.98) rotate(-5deg)",
                    boxShadow: "0 6px 20px rgba(0, 255, 255, 0.7)",
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
                    }}
                >
                    {title}
                </Typography>

                {/* Цена товара */}
                <Typography
                    variant="body2"
                    component="p"
                    sx={{
                        marginTop: "13px",
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "rgba(78, 57, 222, 1.00)",
                        textAlign: "center",
                    }}
                >
                    {price}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default FavoriteCard;
