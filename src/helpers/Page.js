import { useEffect } from "react";
import { BrowserRouter as Route } from "react-router-dom";

export const Page = ({title, ...rest}) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Route {...rest} />
    );
};