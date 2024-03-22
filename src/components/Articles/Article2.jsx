import React from "react";
import Temperature from "../../LexanTovar/termorasshirenie.jpg";
import styled from "styled-components";

const Article2 = () => {
  const paragraphs = [
    "Uyali polikarbonat noqulay ekologik sharoitlarga juda yuqori qarshilikka ega. Ishlash haroratining shartlari to'g'ridan-to'g'ri materialning markasiga, xom ashyo sifatiga va ishlab chiqarish texnologiyasiga muvofiqligiga bog'liq. Panel turlarining aksariyati uchun bu ko'rsatkich - 40 ° C dan + 130 ° C gacha.",
    "Polikarbonatning ayrim turlari materialning tuzilishini buzmasdan - 100 ° C gacha bo'lgan juda past haroratlarga bardosh bera oladi. Materialni qizdirganda yoki sovutganda uning chiziqli o'lchamlari o'zgaradi. Ushbu material uchun chiziqli termal kengayish koeffitsienti DIN 53752 ga muvofiq belgilanadigan 0,0065 mm / m- ° S ni tashkil qiladi.",
    "Uyali polikarbonatning maksimal ruxsat etilgan kengayishi varaqning uzunligi va kengligi bo'ylab 1 m uchun 3 mm dan oshmasligi kerak. Ko'rib turganingizdek, polikarbonat sezilarli issiqlik kengayishiga ega, shuning uchun uni o'rnatishda tegishli bo'shliqlarni qoldirish kerak.",
  ];

  return (
    <div id="scroll2">
      <h1 className="text-4xl font-semibold pt-20 pb-10">
        Uyali polikarbonatdan foydalanish uchun harorat sharoitlari
      </h1>
      <div className="flex justify-between items-center flex-wrap">
        <Container className="flex flex-col gap-y-8 text-lg w-[55%]">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Container>
        <IMG src={Temperature} width="44%" />
      </div>
    </div>
  );
};

export default Article2;

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const IMG = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-top: 20px;
  }
`;
