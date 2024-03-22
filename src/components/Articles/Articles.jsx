import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import IMG from "../../LexanTovar/img.jpg";
import styled from "styled-components";

// Maqolalar ro'yxati
const articles = [
  "Uyali polikarbonat nima",
  "Uyali polikarbonatdan foydalanish uchun harorat sharoitlari",
  "Uyali polikarbonatning mexanik kuchi",
  "Plitalar qalinligi va solishtirma og'irligi",
  "Uyali polikarbonatning ultrabinafsha nurlanishiga chidamliligi",
  "Uyali polikarbonatning issiqlik izolyatsion xususiyatlari",
  "Uyali polikarbonatni o'rnatishda qiyinchilik",
];

const ArticleComponent = ({ article, index }) => (
  <Scroll
    to={`scroll${index + 1}`}
    spy={true}
    smooth={true}
    offset={-90}
    duration={500}
    key={index}
  >
    <li>{article}</li>
  </Scroll>
);

const Articles = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="flex gap-x-5  flex-wrap">
      <Image src={IMG} width="58%" />
      <Text className="w-[40%]">
        <p className="text-[15px] pb-5 ">
          Polimer materiallar turli maqsadlar uchun bino va inshootlarni
          qurishda keng qo'llaniladi. Uyali polikarbonat - bu ikki yoki uch
          qatlamli panel bo'lib, ular orasida uzunlamasina qattiqlashtiruvchilar
          joylashgan. Uyali struktura nisbatan past o'ziga xos tortishish bilan
          varaqning yuqori mexanik kuchini ta'minlaydi. Uyali polikarbonatning
          barcha texnik xususiyatlarini tushunish va tushunish uchun uning
          xususiyatlarini va parametrlarini batafsil ko'rib chiqaylik.
        </p>
        <h3 className="flex items-center">
          <span className="font-semibold text-3xl">Ushbu maqolada:</span>
          <span
            className="relative top-[3px] pl-1 hover:text-green-600 cursor-pointer underline underline-offset-[2px] decoration-green-600"
            onClick={() => setActive(!active)}
          >
            [Ko'rsatish]
          </span>
        </h3>
        <div className={active ? "block" : "hidden"}>
          <ul className={`Article pt-3 `}>
            {articles.map((article, index) => (
              <ArticleComponent key={index} article={article} index={index} />
            ))}
          </ul>
        </div>
      </Text>
    </div>
  );
};

export default Articles;

const Image = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Text = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-top: 20px;
    p {
      font-size: 18px;
      padding-bottom: 20px;
    }
  }
`;
