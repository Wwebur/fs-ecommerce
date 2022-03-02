import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'

const Product = () => {

  const { id } = useParams();
  const  [ product, setProduct ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    }

    getProduct();
  },[]);

  const Loading = () => {
    return (
      <div className="col-md-3">
          Loading....
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img 
            height={400} width={400}
            src={product.image} 
            alt={product.title} />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate} &nbsp;
            <i className="fa fa-star"></i>
          </p>
        </div>
      </>
    )
  }

  return (
    <div className="container">
      <div className="row">
        { loading ? <Loading /> : <ShowProduct /> }
      </div>
    </div>
  )
}


export default Product;