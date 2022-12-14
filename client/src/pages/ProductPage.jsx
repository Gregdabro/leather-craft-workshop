import React from "react";
import {Navigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {productLoadingStatusSelector, productSelector} from "../store/productSlice";

const ProductPage = () => {
    const {id} = useParams()
    const loadingStatus = useSelector(productLoadingStatusSelector)
    const product = useSelector(productSelector(id))


    if (loadingStatus !== "idle" && loadingStatus !== "pending" && !product) {
        return <Navigate to="/product" />
    }


    return (
        <div style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
            ProductPage
        </div>);
};

export default ProductPage;
