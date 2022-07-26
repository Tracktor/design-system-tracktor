import { Card as Component, CardProps } from "@mui/material";

const Card = ({ children, ...props }: CardProps) => <Component {...props}>{children}</Component>;

export default Card;
