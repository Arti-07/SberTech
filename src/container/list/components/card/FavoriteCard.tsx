import React from "react";
import { Card, Typography, CardMedia, Box, useTheme } from "@mui/material";
import {
    cardStyles,
    cardMediaStyles,
    cardContentStyles,
    cardTitleStyles,
    cardPriceStyles,
    cardPriceContainerStyles,
} from "./card.style";

interface FavoriteCardProps {
    title: string;
    imageUrl: string;
    price: number;
}

const FavoriteCard: React.FC<FavoriteCardProps> = ({ title, imageUrl, price }) => {
    const theme = useTheme();
    const cardBackgroundColor = theme.palette.mode === 'dark' ? '#1E1E2A' : '#797993';

    return (
        <Card sx={{ ...cardStyles, backgroundColor: cardBackgroundColor }}>
            <Box sx={cardContentStyles}>
                <CardMedia component="img" sx={cardMediaStyles} image={imageUrl} alt={title} />
                <Typography variant="h6" sx={cardTitleStyles}>
                    {title}
                </Typography>
            </Box>
            <Box sx={cardPriceContainerStyles}>
                <Typography variant="body1" sx={cardPriceStyles}>
                    {price.toFixed(2)} $
                </Typography>
            </Box>
        </Card>
    );
};

export default FavoriteCard;
