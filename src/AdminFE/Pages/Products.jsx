import { Textarea, useToast, Icon } from "@chakra-ui/react";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../../Pages/Loading";
import Navbar from "../Components/Navbar";
import Searchbar from "../Components/Searchbar";
import "../css/Products.css";
import { SingleProd } from "./SingleProd";
import Pagination from "../../Pages/Pagination";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [optval, setOptval] = useState("");
  const [query, setQuery] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [data, setData] = useState([]);
  const [jsdata, setJsdata] = useState([]);
  const [change, setChange] = useState(false);
  const [prod, setProd] = useState("face");
  const toast = useToast();
  const [page, setPage] = useState(1);

  const getprods = (page) => {
    // setData([])
    setLoading(true);
    return axios
      .get(`https://fair-pear-salmon-suit.cyclic.app//${prod}/`, {
        params: {
          _limit: 12,
          _page: page,
        },
      })
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setData(res.data);
        }, 1500);
      })
      .then((err) => {
        setError(true);
        console.log(err);
      });
  };
  console.log(optval);
  const changeProduct = (e) => {
    setPage(1);
    if (e.target.value === "skin") {
      setProd("skin");
    } else {
      setProd("face");
    }
  };
  console.log(prod);

  useEffect(() => {
    getprods(page);
    if (query === "") {
      setSuggest([]);
    } else {
      let textQuery = query.trim().toLowerCase();
      let newSuggest = data
        .filter((el) => {
          if (optval === "_id") {
            return el._id.toLowerCase().indexOf(textQuery) !== -1
              ? true
              : false;
          } else {
            return el.title.toLowerCase().indexOf(textQuery) !== -1
              ? true
              : false;
          }
        })
        .map((el) => el);
      setSuggest(newSuggest);
    }
  }, [change, query, optval, prod, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://fair-pear-salmon-suit.cyclic.app//${prod}/addjson`,
        JSON.parse(jsdata)
      )

      .then((res) => {
        setChange(!change);
        toast({
          title: "Product Added.",
          description: "added product to backend.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "error while posting product",
          description: err.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const queryHandler = useCallback((val) => {
    setQuery(val);
  }, []);
  const optionHandler = useCallback((val) => {
    setOptval(val);
  }, []);
  console.log(data);
  console.log(query);

  const handleDelete = useCallback((id) => {
    axios
      .delete(`https://fair-pear-salmon-suit.cyclic.app//face/delete/${id}`)
      .then((res) => {
        setChange(!change);
        getprods();
        toast({
          title: "Product Deleted !",
          description: "Deleted product from backend.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "error while Deleting product",
          description: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="page-heading">
        <NavLink to={"/admin/panel"}>
          <Icon color={"green"} as={HiOutlineHome} w={6} h={6} />
          <Icon as={IoIosArrowForward} w={6} h={6} />
        </NavLink>
        <h3 style={{ marginTop: "1.5px" }}>
          ＰＲＯＤＵＣＴＳ ＭＡＮＡＧＥＭＥＮＴ
        </h3>
      </div>
      <div className="complete-box">
        <div className="serachbar-box">
          <div className="changeProduct">
            <label className="head-titles">Change Products :</label>
            <select id="" onChange={changeProduct}>
              <option value="face">Make up</option>
              <option value="skin">Skin</option>
            </select>
          </div>
          <Searchbar
            queryHandler={queryHandler}
            optionHandler={optionHandler}
            suggest={suggest}
          />
        </div>
        <div className="admin-products">
          <div className="adding-product">
            <div>
              <form onSubmit={handleSubmit}>
                <label className="head-titles">Add Products Here</label>
                <Textarea
                  className="txt-area"
                  placeholder="You Have JSON File ! Paste or Drop Here !!!"
                  size="sm"
                  h={[50, 100, 200, 300]}
                  name="jsonfile"
                  onChange={(e) => setJsdata(e.target.value)}
                />
                <input className="submit-json-prods" type="submit" />
              </form>
            </div>
          </div>
          <div className="right-allp-div">
            <div className="all-products">
              {loading ? (
                <div className="loading-ind">
                  <Loading />
                </div>
              ) : suggest.length > 0 ? (
                suggest.map((el) => {
                  return (
                    <div key={Date.now() + Math.random()}>
                      <SingleProd {...el} />
                    </div>
                  );
                })
              ) : (
                data.map((el) => {
                  return (
                    <div key={Date.now() + Math.random()}>
                      <SingleProd {...el} handleDelete={handleDelete} />
                    </div>
                  );
                })
              )}
            </div>
            <div className="page-btn">
              <button disabled={page < 2} onClick={() => setPage(page - 1)}>
                Prev
              </button>
              <button>{page}</button>
              <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
