import React from "react";
import img2 from "../../LexanTovar/dvoinoi-polikarbonat.jpg";
import { Image } from "antd";
import H2 from "../../LexanTovar/Turlari/2h.jpg";
import H3 from "../../LexanTovar/Turlari/3h.jpg";
import X3 from "../../LexanTovar/Turlari/3x.jpg";
import W5 from "../../LexanTovar/Turlari/5w.jpg";
import X5 from "../../LexanTovar/Turlari/5x.jpg";
import Table from "../../LexanTovar/Table.jpg";
import styled from "styled-components";

const paragraphs = [
  "Ko'ndalang kesimda varaq to'rtburchaklar yoki uchburchakli chuqurchaga o'xshaydi, bu materialning nomi aslida kelib chiqadi. Buning uchun xom ashyo karbonat kislotasi va dihidroksil birikmalarining poliesterlarining kondensatsiyasi natijasida hosil bo'lgan granullangan polikarbonatdir. Polimer termoset plastiklar guruhiga kiradi va bir qator o'ziga xos xususiyatlarga ega.",
  "Uyali polikarbonatning sanoat ishlab chiqarilishi granüler xom ashyodan ekstruziya texnologiyasidan foydalangan holda amalga oshiriladi. Ishlab chiqarish TU-2256-001-54141872-2006 texnik shartlarga muvofiq amalga oshiriladi. Ushbu hujjat mamlakatimizda materiallarni sertifikatlash uchun qo'llanma sifatida ham qo'llaniladi.",
  "Panellarning asosiy parametrlari va chiziqli o'lchamlari qoidalar talablariga qat'iy mos kelishi kerak.",
  "Ko'ndalang kesimdagi uyali polikarbonatning tuzilishi ikki xil bo'lishi mumkin:",
];

const Article1 = () => {
  return (
    <div id="scroll1" className="pt-10">
      <h1 className="text-4xl font-semibold">Uyali polikarbonat nima?</h1>
      <div className="flex py-10 justify-between flex-wrap">
        <TextContainer className="flex flex-col gap-y-5 text-lg w-[52%]">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </TextContainer>
        <IMG src={img2} width="45%" />
      </div>

      <div>
        <h3 className="text-xl font-semibold pb-5 flex-wrap">
          Uning choyshablari quyidagi tuzilishda ishlab chiqariladi:
        </h3>
        <div className="flex flex-col gap-y-5 flex-wrap">
          {[
            { src: H2, text: "2H - to'rtburchaklar hujayrali ikki qavatli." },
            {
              src: X3,
              text: "3X - qo'shimcha eğimli qismlarga ega bo'lgan to'rtburchaklar hujayralar kombinatsiyasi bilan uch qatlamli tuzilma.",
            },
            {
              src: H3,
              text: "3H - 6, 8, 10 mm qalinlikda ishlab chiqarilgan to'rtburchaklar chuqurchalar tuzilishi bilan uch qatlamli choyshablar.",
            },
            {
              src: W5,
              text: "5W - to'rtburchaklar chuqurchalar tuzilishiga ega besh qatlamli choyshablar, odatda qalinligi 16 - 20 mm.",
            },
            {
              src: X5,
              text: "5X - qalinligi 25 mm bo'lgan tekis va yeğimli qovurg'alardan iborat besh qatlamli choyshablar.",
            },
          ].map(({ src, text }, index) => (
            <Sheets key={index} className="flex items-center gap-x-5 flex-wrap">
              <img src={src} />
              <p className="text-lg">{text}</p>
            </Sheets>
          ))}
        </div>
        <h3 className="text-xl font-semibold pt-12 pb-5">
          Uyali polikarbonat plitalarining chiziqli o'lchamlari jadvalda
          keltirilgan:
        </h3>
        <div className="flex items-center flex-wrap justify-between">
          <TABLE className="w-[70%]">
            <Image src={Table} />
          </TABLE>
          <P className="w-[28%] text-xl leading-[35px]">
            Buyurtmachi bilan kelishilgan holda, texnik shartlarda
            ko'rsatilganidan tashqari parametrlarga ega panellarni ishlab
            chiqarishga ruxsat beriladi. Qattiqlashtiruvchilarning qalinligi
            ishlab chiqaruvchi tomonidan belgilanadi, bu qiymat uchun ruxsat
            etilgan maksimal og'ish belgilanmagan.
          </P>
        </div>
      </div>
    </div>
  );
};

export default Article1;

const IMG = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const TextContainer = styled.p`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

const P = styled.p`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    font-size: 18px;
    line-height: 25px;
  }
`;

const Sheets = styled.div`
  @media only screen and (max-width: 1000px) {
    row-gap: 20px;
  }
`;

const TABLE = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;
