import ProductItem from "./components/product/productItem";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Fragment } from "react";
const Test = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <ProductItem />
            </BrowserRouter>
        </Fragment>
    );
};
export default Test;
