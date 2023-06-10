import React, { useEffect, useState } from "react";
import axios from "axios";

const GetApiCall = () => {
  const [data, setData] = useState([]);
  /**
   * API METHOD ----
   */
  // get method -> to get data from api
  // post method -> to post data in the api
  // delete method -> to delete the data from the api
  // patch method -> to update data in the api

  // fetch method to call the api ---
  // fetch("api url here")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // axios structure --
  /**
   * axios.get('your api url here')
   * .then((data) => console.log(data))
   * .catch((error) => console.log('error', error))
   *
   * Where .get -> api method
   * data -> variable to store api data
   * error -> variable to store error data
   */

  // UseEffect Structure ---
  /**
   * useEffect(()=> {
   * write here your own code to test, and it will render when the component is first time call.
   * }, [here is your dependency])
   * dependency means -> when anything is changed in the dependency it will re-call the useEffect anonymous function
   *
   * to use useEffect import from react ex- import {useEffect} from 'react'
   */

  // https://jsonplaceholder.typicode.com/posts
  useEffect(() => {
    // Axios get method to call the api ---
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response?.data?.products);
        console.log("api response", response);
      })
      .catch((error) => console.log("error", error));
  }, []);

  console.log("data", data);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data?.map((item, index) => {
          console.log("item", item);
          return (
            <>
              <div className="card" style={{ width: "20rem", margin: "5%" }}>
                <img src={item?.thumbnail} alt="images_show" />
                <div className="card-body">
                  <h4>Title: {item?.title}</h4>
                  <p>Description: {item?.description}</p>
                  <h5>Price: {item?.price}</h5>
                  <p>Rating: {item?.rating}</p>
                  <h3>Stock: {item?.stock}</h3>
                  <a href="#" class="btn btn-primary">
                    Buy Now
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default GetApiCall;
