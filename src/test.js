// import ProductItem from "./components/product/productItem";
import { BrowserRouter } from "react-router-dom";
import { Fragment } from "react";
import Header from "./container/header/index.jsx";
import Footer from "./container/footer/index.jsx";
// import BlogSingle from "./components/blog/blogSingle";
import ProductItem from "./components/product/productItem";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import {addToCart} from './redux/action/productAction.jsx';

const Test = ({ productList }) => {
    console.log(addToCart);
    const renderList = productList.map((item, index) => {
        return (
            <Grid item lg={3} md={4} sm={6} key={index + 1}>
                <ProductItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    status={item.status}
                    src={item.src}
                    price={item.price}
                    rate={item.rate}
                    desc={item.desc}
                    addToCart = {addToCart(item.id)}
                />
            </Grid>
        );
    });
    return (
        <Fragment>
            <BrowserRouter>
                <Header />
                <Grid container>{renderList}</Grid>
                <Footer />
            </BrowserRouter>
        </Fragment>
    );
};
const mapStateToProps = (state) => {
    return {
        productList: state.products.products,
    };
};
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToCart: (id) => dispatch(addToCart(id))
//     };
// };
export default connect(null, mapStateToProps)(Test);
