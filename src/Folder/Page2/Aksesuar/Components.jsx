import { useState } from "react";
import HP from "../../../LexanTovar/HP.webp";
import HCP from "../../../LexanTovar/HCP.jpg";
import Tugatish from "../../../LexanTovar/Tugatish.jpeg";
import Bolt from "../../../LexanTovar/bolt.jpeg";
import Skotch from "../../../LexanTovar/Lenta.jpeg";
import Lenta from "../../../LexanTovar/skotch.jpeg";
import Shayba from "../../../LexanTovar/Shayba.webp";
import Metall from "../../../LexanTovar/metall.jpeg";
import Button from "../../../utils/Button";
import Write from "../../../utils/Write";

import styled from "styled-components";

const Components = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const enlargeImage = (event) => {
    event.target.style.transform = "scale(1.1)";
    event.target.style.transition = "transform 0.3s ease-in-out";
  };

  const resetImage = (event) => {
    event.target.style.transform = "scale(1)";
  };

  const data = [
    {
      img: HP,
      title: "Ulanish tizimi (profil) HP",
      description:
        "Royal Plast zavodi choyshablarni ulash va qoplamani qo'llab-quvvatlovchi tuzilishga mahkamlash uchun polikarbonat birlashtiruvchi profillarning keng tanlovini taklif etadi. Uyali polikarbonatni ehtiyotkorlik bilan o'rnatish, uni uzoq vaqt davomida saqlash, butun strukturaning mustahkamligi va estetik ko'rinishi uchun maxsus birlashtiruvchi profillar yordamida tayyorlangan choyshablarni ulash tavsiya etiladi.",
    },
    {
      img: HCP,
      title: "HCP profillari",
      description:
        "Royal Plast zavodi choyshablarni ulash va qoplamani qo'llab-quvvatlovchi tuzilishga mahkamlash uchun polikarbonat birlashtiruvchi profillarning keng tanlovini taklif etadi. Uyali polikarbonatni ehtiyotkorlik bilan o'rnatish, uni uzoq vaqt davomida saqlash, butun strukturaning mustahkamligi va estetik ko'rinishi uchun maxsus birlashtiruvchi profillar yordamida tayyorlangan choyshablarni ulash tavsiya etiladi.",
    },
    {
      img: Tugatish,
      title: "Profillarni tugatish",
      description:
        "Royal Plast zavodi choyshablarni ulash va qoplamani qo'llab-quvvatlovchi tuzilishga mahkamlash uchun polikarbonat birlashtiruvchi profillarning keng tanlovini taklif etadi. Uyali polikarbonatni ehtiyotkorlik bilan o'rnatish, uni uzoq vaqt davomida saqlash, butun strukturaning mustahkamligi va estetik ko'rinishi uchun maxsus birlashtiruvchi profillar yordamida tayyorlangan choyshablarni ulash tavsiya etiladi.",
    },
    {
      img: Bolt,
      title: "Uskuna",
      description:
        "Termal yuvish moslamalari monolit va uyali polikarbonat plitalarini ichki va tashqi makonda turli xil tuzilmalarda mahkamlash uchun mo'ljallangan. Plitalarni yog'och va metall yuzalarga ehtiyotkorlik bilan va ishonchli tarzda yopishtiring, choyshablarni shikastlanishdan saqlang.",
    },
    {
      img: Skotch,
      title: "Yopishqoq lenta",
      description:
        "Teshilgan lenta kabi, u uyali polikarbonat hujayralarida hosil bo'lgan kondensatning tabiiy va yumshoq bug'lanishiga xizmat qiladi, shuningdek, hujayralarni chang, hasharotlar, o'simlik sporalari va moxning kirib kelishidan himoya qiladi.",
    },
    {
      img: Lenta,
      title: "Yopishqoq lenta",
      description:
        "Teshikli lenta uyali polikarbonat hujayralarida hosil bo'lgan kondensatni tabiiy va ehtiyotkorlik bilan olib tashlash, shuningdek, hujayralarni chang, hasharotlar, o'simlik sporalari va moxlarning kirib kelishidan himoya qilish uchun xizmat qiladi. O'z-yopishqoq teshilgan lenta ilg'or to'qilmagan materiallardan tayyorlangan bo'lib, birinchi darajali drenajni ta'minlash uchun maxsus ishlov berilgan, choyshab bo'shliqlaridan namlik va kirni yumshoq va samarali tarzda olib tashlaydi.",
    },
    {
      img: Shayba,
      title: "Metall shayba",
      description:
        "Metall shaybasi (bo'shliqlar) o'z-o'zidan tejamkor murvatning boshi va plita yuzasi o'rtasida muhrlangan qistirmalari sifatida ishlatiladi. Plitani qo'llab-quvvatlovchi tuzilishga nuqta mahkamlash uchun mo'ljallangan. Plita shamol yuki ostida tushishiga yo'l qo'ymaslik uchun uning maydoni orqali strukturaga mahkamlanadi.",
    },
    {
      img: Metall,
      title: "Metall shayba mahkamlagichi",
      description:
        "Polikarbonat termal yuvish mashinasi juda bardoshli va quyosh nuri va boshqa ob-havo omillariga chidamli. Polikarbonat konstruktsiyalarini mahkamlashda termal yuvish vositasidan foydalanish ularning xizmat muddatini sezilarli darajada oshiradi. Termal yuvish moslamalari ichi bo'sh yadroli Polygal qoplama plitalari uchun maxsus ishlab chiqilgan va mijozlar talabiga binoan komponent mahsulot sifatida etkazib beriladi.",
    },
  ];

  return (
    <div className="mt-16">
      <H1 className="text-3xl mb-16 mt-5 underline decoration-[#77b94c] underline-offset-[14px]">
        Polikarbonatni mahkamlash uchun komponentlar
        <span className="font-semibold"> turlari</span>
      </H1>
      <div className="flex  flex-wrap gap-6">
        {data.map((item, index) => (
          <Container
            key={index}
            className="border-black border w-[32%] cursor-pointer"
          >
            <div
              className="image-container overflow-hidden"
              onMouseOver={enlargeImage}
              onMouseOut={resetImage}
            >
              <img src={item.img} alt="" className="h-[250px] w-[100%] " />
            </div>

            <div className="px-5 py-7">
              <hr />
              <div className="pt-5 h-[310px]">
                <h1 className="text-xl font-semibold pb-5">{item.title}</h1>
                <p className="text-gray-600 font-light">{item.description}</p>
              </div>

              <Button
                id={"btn2"}
                text={"Buyurtma"}
                position={
                  "text-[16px] mb-[0px] py-[7px] w-[100%] bg-[#5bb521] text-white border-[#5bb521] border-2 text-white hover:text-[#5bb521] hover:shadow-[inset_1rem_1rem_1rem_10rem] hover:bg-transparent hover:shadow-[#5cb5212b] duration-[500ms,800ms] transition-[color,box-shadow] rounded-none lg:hover:text-green-900"
                }
                onClick={handleClick}
              />
            </div>
          </Container>
        ))}
      </div>
      <Write text={"Buyurtma"} modal={toggle} setModal={setToggle} />
    </div>
  );
};

export default Components;

const Container = styled.div`
  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 20px gray;
  }
  @media only screen and (max-width: 1200px) {
    width: 49%;
  }
  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`;

const H1 = styled.h1`
  @media only screen and (max-width: 484px) {
    font-size: 24px;
    margin-bottom: 45px;
    line-height: 50px;
  }
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 430px) {
    height: 340px;
  }
`;
