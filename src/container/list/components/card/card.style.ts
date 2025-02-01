import { SxProps } from "@mui/material";

export const cardStyles: SxProps = {
    width: "205px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "10px 15px",
    borderRadius: "20px",
    boxShadow: 3,
    border: "1px solid #ccc",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    "&:hover": {
        transform: "scale(1.02)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
};

export const cardMediaStyles: SxProps = {
    width: 40,
    height: 40,
    borderRadius: "80%",
};

export const cardContentStyles: SxProps = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flex: 1,
};

export const cardTitleStyles: SxProps = {
    fontWeight: "bold",
    fontSize: "25px",
    fontFamily: "Helvetica, Arial, sans-serif",
    flex: 1,
    overflow: "hidden",
    whiteSpace: "nowrap",
};

export const cardPriceContainerStyles: SxProps = {
    display: "flex",
    justifyContent: "center",
    marginTop: "auto",
};

export const cardPriceStyles: SxProps = {
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: "Helvetica, Arial, sans-serif",
};
