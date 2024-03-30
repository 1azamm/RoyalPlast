import { useState, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import HP from "../../../LexanTovar/HP.webp";
import HCP from "../../../LexanTovar/HCP.jpg";
import Tugatish from "../../../LexanTovar/Tugatish.jpeg";
import Bolt from "../../../LexanTovar/bolt.jpeg";
import Skotch from "../../../LexanTovar/skotch.jpeg";
import Write from "../../../utils/Write";
import Button from "../../../utils/Button";
import { LocalizationApi } from "../../../Context/Language";

const CarouselCallular = () => {
  const { language } = useContext(LocalizationApi);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      image: HP,
      description: language === "uz" ? "Ulanish tizimi" : "Система подключения",
      name:
        language === "uz"
          ? "Ulanish tizimi (profil) HP"
          : "Система подключения HP",
    },
    {
      image: HCP,
      description: language === "uz" ? "Profillar" : "Профили",
      name: language === "uz" ? "HCP profillari" : "HCP профили",
    },
    {
      image: Tugatish,
      description: language === "uz" ? "Profillar" : "Профили",
      name: language === "uz" ? "Profillarni tugatish" : "Конечные профили",
    },
    {
      image: Bolt,
      description:
        language === "uz"
          ? "Termal yuvish vositalari"
          : "Термические моющие средства",
      name: language === "uz" ? "Uskuna" : "Оборудование",
    },
    {
      image: Skotch,
      description: language === "uz" ? "Himoya lentasi" : "Защитная лента",
      name: language === "uz" ? "Yopishqoq lenta" : "Самоклеющаяся пленка",
    },
  ];

  return (
    <Body className="px-10 pb-20">
      <H1 className="text-center mt-16 text-3xl mb-20 font-semibold underline decoration-[#77b94c] underline-offset-[14px]">
        {language === "uz"
          ? "USHBU MAHSULOT UCHUN AKSESSUARLAR"
          : "АКСЕССУАРЫ ДЛЯ ЭТОГО ИЗДЕЛИЯ"}
      </H1>

      <Slider {...settings}>
        {products.map((product, index) => (
          <Container
            key={index}
            className="border-black border flex flex-col items-center "
          >
            <img className="h-[250px] w-[100%]" src={product.image} alt="" />
            <p className="text-center text-gray-600 font-light pt-3">
              {product.description}
            </p>
            <div className="pt-10 flex flex-col items-center">
              <h1 className="text-xl font-light pb-2">{product.name}</h1>
              <Button
                id="btn2"
                text={language === "uz" ? "Buyurtma" : "Заказ"}
                position={
                  "text-[16px] bg-[#5bb521] text-white border-[#5bb521] border-2 text-white hover:text-[#5bb521] hover:shadow-[inset_23rem_0_0_0] hover:bg-transparent hover:shadow-[#5cb5212b] duration-[500ms,800ms] transition-[color,box-shadow] rounded-none lg:hover:text-green-900"
                }
                onClick={handleClick}
              />
            </div>
          </Container>
        ))}
      </Slider>
      <Write
        text={language === "uz" ? "Buyurtma" : "Заказ"}
        modal={toggle}
        setModal={setToggle}
      />
    </Body>
  );
};

export default CarouselCallular;

const Container = styled.div`
  width: 95% !important;
  position: relative;
  left: 2.5%;
  column-gap: 20px !important;
`;

const Body = styled.div`
  @media only screen and (max-width: 1000px) {
    padding: 0 20px 80px 20px;
  }
  @media only screen and (max-width: 800px) {
    padding: 0 10px 80px 10px;
  }
`;

const H1 = styled.h1`
  @media only screen and (max-width: 660px) {
    font-size: 25px;
    text-align: center;
  }
  @media only screen and (max-width: 560px) {
    line-height: 50px;
    margin-bottom: 40px;
  }
`;
