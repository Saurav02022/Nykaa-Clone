import { Flex } from "@chakra-ui/react";
import { products } from "./product";
import ProductCartItem from "./ProductCardItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./product.css"
import Sidebar from "./Sidebar";
import Pagination from "../Pagination";
import { useState } from "react";



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
        opacity: "0.9"
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
        opacity: "0.9"
      }}
      onClick={onClick}
    />
  );
}

const banner = [
  "https://images-static.nykaa.com/uploads/ab975057-cbec-4567-8077-2c2195410aec.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/56af97a6-e339-42f1-8add-cc4c3136014c.jpg?tr=w-1200,cm-pad_resize"
]

function FaceProductPage() {

  const [currentPage,setCurrentPage]=useState(1)
  let totalPages=products.length
  const pageChangeHandle = (value) => {
    setCurrentPage((prev) => prev + value);
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
  return <>
    <div className="prod_main_div">
      <div className="prod_top">

        <div className="first_bnr">
          <div>
            <h2 style={{ fontSize: "25px", fontWeight: "500", textAlign: "center", marginBottom: "5px" }}>Face Makeup Collection</h2>
          </div>
          <Slider {...settings} >
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
              <h3>Luxe Essentials That You Should Grab Ahead Of The Year End Celebrations</h3>
              <p>Bask In The Festive Spirit With These Luxe Essentials</p>
              <a href="/" >Read More on Nykaa's Beauty Book &gt;</a>
              <br />
              <br />
            </div>
          </div>

          <div>
            <img src="https://www.nykaa.com/media/categoryInfo/art_banner_image/luxeessentialsthatyoushouldgrabaheadoftheyearendcelebrationscb.jpg" alt="img" />
          </div>

        </div>

      </div>
      <div className="product_section">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="product_containor">
        <div className="sort">
        <select id="sort" name="Price">
  <option value="">Price</option>
  <option value="Price low to high">Price low to high</option>
  <option value="Price high to low">Price high to low</option>
</select>

<select id="sort" name="Rating">
  <option value="">Rating</option>
  <option value="Rating low to high">Rating low to high</option>
  <option value="Rating high to low">Rating high to low</option>
</select>

<select id="sort" name="Category">
  <option value="">Category</option>
  <option value="Maybelline">Maybelline </option>
  <option value="Kay ">Kay </option>
  <option value="NYX ">NYX </option>
  <option value="Lakme ">Lakme </option>
  <option value="Garnier ">Garnier </option>
</select>
        </div>
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
        {products.map(
          ({ imgsrc, title, price, discountedprice, discount, rating }) => (
            <ProductCartItem key={title}
              imgsrc={imgsrc}
              title={title}
              price={price}
              discount={discount}
              discountPrice={discountedprice}
              rating={rating}
            />
          )
        )}
      </Flex>
      <div style={{marginLeft:"50px",marginBottom:"20px"}}>
      <Pagination
              pageChangeHandle={pageChangeHandle}
              currentPage={currentPage}
              totalPages={totalPages}
            />
      </div>
     
     
        </div>

      </div>
    
    
    </div>
  </>
}

export default FaceProductPage;
