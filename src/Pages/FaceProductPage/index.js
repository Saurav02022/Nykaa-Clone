import { Flex } from "@chakra-ui/react";
// import { Skinproducts } from "./product";
import ProductCartItem from "../../Components/ProductItem.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./product.css";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import { Box, Center } from "@chakra-ui/react";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "3rem",
        width: "3rem",
        backgroundColor: "#fff",
        padding: "2px 10px",
        borderRadius: "50%",
        marginRight: "3%",
        opacity: "0.9",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "3rem",
        width: "3rem",
        backgroundColor: "#fff",
        padding: "2px 10px",
        borderRadius: "50%",
        marginLeft: "3%",
        zIndex: "2",
        opacity: "0.9",
      }}
      onClick={onClick}
    />
  );
}

const banner = [
  "https://images-static.nykaa.com/uploads/ab975057-cbec-4567-8077-2c2195410aec.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/56af97a6-e339-42f1-8add-cc4c3136014c.jpg?tr=w-1200,cm-pad_resize",
];

function FaceProductPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const getData = (page) => {
    setLoading(true);
    axios
      .get("https://fair-pear-salmon-suit.cyclic.app/face", {
        params: {
          _limit: 12,
          _page: page,
        },
      })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setError(true);
      });
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  const ResetPriceAndRating = () => {
    setLoading(true);
    axios
      .get("https://fair-pear-salmon-suit.cyclic.app/face")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  const pricelh = () => {
    setLoading(true);
    axios
      .get("https://fair-pear-salmon-suit.cyclic.app/face/priceasc")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  const pricehl = () => {
    setLoading(true);
    axios
      .get("https://fair-pear-salmon-suit.cyclic.app/face/pricedesc")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  const ratinglh = () => {
    setLoading(true);
    axios
      .get("https://fair-pear-salmon-suit.cyclic.app/face/ratingasc")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  const ratinghl = () => {
    setLoading(true);
    axios
      .get("https://fair-pear-salmon-suit.cyclic.app/face/ratingdesc")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  };

  const handlePriceChange = (e) => {
    if (e.target.value === "Price") {
      ResetPriceAndRating();
      return;
    }
    if (e.target.value === "Price low to high") {
      pricelh();
      return;
    }
    if (e.target.value === "Price high to low") {
      pricehl();
      return;
    }
  };

  const handleRatingChange = (e) => {
    if (e.target.value === "Rating") {
      ResetPriceAndRating();
      return;
    }
    if (e.target.value === "Rating low to high") {
      ratinglh();
      return;
    }
    if (e.target.value === "Rating high to low") {
      ratinghl();
      return;
    }
  };

  const reset = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    getData();
    let ptag = document.getElementById("priceSort");
    ptag.value = "Price";
    let rtag = document.getElementById("ratingSort");
    rtag.value = "Rating";
    let ctag = document.getElementById("categorySort");
    ctag.value = "";
    setFilter("");
  };

  const [filter, setFilter] = useState("");
  const category = (e) => {
    setLoading(true);
    let filterData = data
      .filter((el) => {
        return el.title.indexOf(e.target.value) !== -1 ? true : false;
      })
      .map((el) => el);
    setLoading(false);
    setFilter(filterData);
  };

  const pageChangeHandle = (value) => {
    setPage((prev) => prev + value);
  };

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <div className="prod_main_div">
        <div className="prod_top">
          <div className="first_bnr">
            <div>
              <h2
                style={{
                  fontSize: "25px",
                  fontWeight: "500",
                  textAlign: "center",
                  marginBottom: "5px",
                }}
              >
                Face Makeup Collection
              </h2>
            </div>
            <Slider {...settings}>
              {banner.map((el) => (
                <div className="popup" key={el}>
                  <img className="bnr_img" src={el} alt="banner" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="second_bnr">
            <div>
              <div className="top_txt">
                <h3>
                  Luxe Essentials That You Should Grab Ahead Of The Year End
                  Celebrations
                </h3>
                <p>Bask In The Festive Spirit With These Luxe Essentials</p>
                <a href="/">Read More on Nykaa's Beauty Book &gt;</a>
                <br />
                <br />
              </div>
            </div>

            <div>
              <img
                src="https://www.nykaa.com/media/categoryInfo/art_banner_image/luxeessentialsthatyoushouldgrabaheadoftheyearendcelebrationscb.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="product_section">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="product_containor">
            <div className="sort">
              <button onClick={reset}>Reset : </button>

              <select
                onChange={(e) => handlePriceChange(e)}
                id="priceSort"
                name="Price"
              >
                <option value="Price">Price</option>
                <option value="Price low to high">Price low to high</option>
                <option value="Price high to low">Price high to low</option>
              </select>

              <select
                onChange={(e) => handleRatingChange(e)}
                id="ratingSort"
                name="Rating"
              >
                <option value="Rating">Rating</option>
                <option value="Rating low to high">Rating low to high</option>
                <option value="Rating high to low">Rating high to low</option>
              </select>

              <select
                onChange={(e) => category(e)}
                id="categorySort"
                name="Category"
              >
                <option value="">Category</option>
                <option value="Maybelline">Maybelline </option>
                <option value="Kay ">Kay </option>
                <option value="NYX ">NYX </option>
                <option value="Lakme ">Lakme </option>
                <option value="Garnier ">Garnier </option>
              </select>

              {/* <button onClick={category}>nyc</button> */}
            </div>
            {loading && <Loading />}
            {error && (
              <Box>
                <Center>
                  <img
                    width="150px"
                    src="https://www.seekpng.com/png/full/360-3605845_dog-holding-paper-in-mouth.png"
                    alt=""
                  />
                </Center>
              </Box>
            )}
            <Flex
              display={"grid"}
              gridTemplateColumns={{
                base: "repeat(1,1fr)",
                sm: "repeat(2,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(3,1fr)",
              }}
              width="90%"
              margin="auto"
              gap={5}
              marginTop="20px"
              marginBottom={"20px"}
            >
              {filter.length > 0
                ? filter.map((el) => (
                    <ProductCartItem
                      key={el._id}
                      imgsrc={el.imgsrc}
                      title={el.title}
                      price={el.price}
                      discount={el.discount}
                      discountedprice={el.discountedprice}
                      rating={el.rating}
                    />
                  ))
                : data.length > 0 &&
                  data.map((el) => (
                    <ProductCartItem
                      key={el._id}
                      _id={el._id}
                      imgsrc={el.imgsrc}
                      title={el.title}
                      price={el.price}
                      discount={el.discount}
                      discountedprice={el.discountedprice}
                      rating={el.rating}
                    />
                  ))}
            </Flex>
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
    </>
  );
}

export default FaceProductPage;
