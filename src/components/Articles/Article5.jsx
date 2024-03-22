import React from "react";
import img from "../../LexanTovar/zashita-polikarbonata.jpg";
import styled from "styled-components";

const Article5 = () => {
  const paragraphs = [
    "Uyali polikarbonatning xususiyatlari ultrabinafsha nurlanish diapazonida kuchli nurlanishdan ishonchli himoyani ta'minlaydi. Ushbu ta'sirga erishish uchun ishlab chiqarish jarayonida qo'shma ekstruziya usuli yordamida varaqning yuzasiga maxsus stabillashadigan qoplama qatlami qo'llaniladi. Ushbu texnologiya 10 yil davomida materialning minimal xizmat muddatini ta'minlash uchun kafolatlangan.",
    "Bunday holda, ish paytida himoya qoplamasining tozalanishi polimerning taglik bilan birlashishi tufayli sodir bo'lmaydi. Plitani o'rnatishda siz belgilarni diqqat bilan tekshirishingiz va uni to'g'ri yo'naltirishingiz kerak. UV nurlaridan himoya qiluvchi qopqoq tashqi tomonga qaragan bo'lishi kerak. Panelning yorug'lik o'tkazuvchanligi uning rangiga bog'liq va bo'yalmagan choyshablar uchun bu ko'rsatkich 83% dan 90% gacha. Shaffof rangli panellar 65% dan ko'p bo'lmagan miqdorda uzatadi, polikarbonat esa ular orqali o'tadigan yorug'likni mukammal tarzda tarqatadi.",
  ];
  return (
    <div id="scroll5">
      <h1 className="text-4xl font-semibold pt-20 pb-10">
        Uyali polikarbonatning mexanik kuchi
      </h1>
      <Container className="flex justify-between flew-wrap items-center">
        <Text className="flex flex-col text-lg gap-y-5 w-[48%]">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Text>
        <IMG src={img} width="50%" />
      </Container>
    </div>
  );
};

export default Article5;

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;

const IMG = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-top: 20px;
  }
`;

const Text = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100% !important;
  }
`;
