import React from "react";
import img from "../../../LexanTovar/product_type_thumb35.jpeg";
import img2 from "../../../LexanTovar/product_type_sota_img1.png";
import img3 from "../../../LexanTovar/product_type_sota_img2.png";
import img4 from "../../../LexanTovar/product_type_sota_img3.png";
import img5 from "../../../LexanTovar/product_type_sota_img4.png";
import img6 from "../../../LexanTovar/product_type_sota_img5.png";
import styled from "styled-components";

const TypeCellular = () => {
  const enlargeImage = (event) => {
    event.target.style.transform = "scale(1.1)";
    event.target.style.transition = "transform 0.3s ease-in-out";
  };

  const resetImage = (event) => {
    event.target.style.transform = "scale(1)";
  };

  const data = [
    {
      img: img,
      title: "Polygal SMART",
      description:
        "Yangi avlodning innovatsion materiali. To'g'ridan-to'g'ri quyosh nurlarining 100% tarqalishi. Fotosintezni yaxshilaydi, kuyish va qizib ketishdan himoya qiladi.Yorug'lik tarqatuvchi material sifatida kanoplar, kanoplar, gazeboslar, gumbazlar, barcha turdagi oynalar va boshqa inshootlarni qurish uchun juda mos keladi. Ayniqsa yorqin quyoshli hududlarda.",
      thickness: "Plitalar qalinligi (mm): 4-10",
      dimensions: "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000",
    },
    {
      img: img2,
      title: "GOST standarti",
      description:
        "Polygal STANDARD - bu dunyoni zabt etgan shakldagi uyali polikarbonat. Bu haqiqiy uyali polikarbonat va uning engil hamkasblari emas. Muhim yuklarga duchor bo'lgan ishonchli tuzilmalar uchun juda bardoshli material. Choyshablar qor qoplami yuqori bo'lgan hududlarda dolzarbdir. Ular ko'p yillik tajriba bilan tasdiqlangan va sanoat standartiga aylangan polikarbonatning solishtirma og'irligi va qattiqligi o'rtasidagi optimal nisbatga ega.",
      thickness: "Plitalar qalinligi (mm): 4-25",
      dimensions: "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000",
    },
    {
      img: img3,
      title: "Amaliy",
      description:
        "Eng yuqori sinfdagi uyali polikarbonat, engil dizayn. Iqtisodiy - varaqning solishtirma og'irligi Polygal STANDARD bilan solishtirganda biroz kamayadi. Foydalanish uchun tavsiya etiladi: uzoq muddatli inshootlarda, issiqxonalar, kanoplar, kanoplar, har qanday murakkablikdagi kemerli qoplamalar, ichki dizayn uchun. Muhim zarba yuklari bo'lgan tuzilmalarda Polygal STANDARDga qaraganda qo'llab-quvvatlovchi elementlar o'rtasida kichikroq masofa talab qilinadi.",
      thickness: "Plitalar qalinligi (mm): 4-10",
      dimensions: "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000",
    },
    {
      img: img4,
      title: "TITAN SKY STANDARTI",
      description:
        "Qattiq konstruktsiyali va mukammal issiqlik izolatsiyasiga ega og'ir panellar. X-shaklidagi ichki qattiqlashtiruvchilarga ega noyob panel tuzilishi ajoyib quvvat va issiqlik izolatsiyasini ta'minlaydi. Og'ir yuk ostida past nishabli tomlar va uzun oraliqli uyingizda inshootlarida foydalanish uchun ideal.",
      thickness: "Plitalar qalinligi (mm): 8-25",
      dimensions: "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000",
    },
    {
      img: img5,
      title: "Hummingbird hujayrasi",
      description:
        "Hummingbird savdo belgisi ostida engil engil uyali polikarbonat Rossiya bozori uchun maxsus ishlab chiqilgan. Va u haddan tashqari zarba yuklariga duchor bo'lmagan shaffof tuzilmalarda foydalanish uchun mo'ljallangan. Ammo shu bilan birga, bunday polikarbonat issiqxonalar, shaffof tom yopish inshootlari (qiyalik, gorizontal, kamar) kabi tuzilmalarda ishonchli hisoblanadi.",
      thickness: "Plitalar qalinligi (mm): 3,7-25",
      dimensions: "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000",
    },
    {
      img: img6,
      title: "Kivi hujayrasi",
      description:
        "Kiwi savdo belgisi ostidagi engil uyali polikarbonat keng foydalanish uchun maxsus mo'ljallangan. Ushbu polikarbonat qalinligining katta tanlovi tufayli uni qo'llash doirasi juda katta: vaqtinchalik issiqxonalardan tortib katta issiqxonalargacha, shuningdek, bo'limlar, engil kanoplar, kanoplar, gazeboslar, teraslar va verandalar uchun tom yopish inshootlari, dush, ayvonlar va boshqalarni o'rnatish uchun. juda ko'p, bu super kuch talab qilmaydi.",
      thickness: "Plitalar qalinligi (mm): 3,7-16",
      dimensions: "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000",
    },
  ];

  return (
    <div className="mt-16">
      <H1 className="text-center text-3xl mb-20 font-semibold underline decoration-[#77b94c] underline-offset-[14px]">
        UYALI POLIKARBONAT TURLARI
      </H1>
      <div className="flex justify-between flex-wrap gap-y-6">
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
              <img src={item.img} alt="" className="h-[220px] w-[100%]" />
            </div>
            <div className="px-5 py-7">
              <TextContainer className="h-[310px]">
                <h1 className="text-xl font-semibold pb-5">{item.title}</h1>
                <p className="text-gray-600 font-light">{item.description}</p>
              </TextContainer>
              <div className="flex flex-col gap-y-2">
                <p className="text-gray-700 font-normal">{item.thickness}</p>
                <hr />
                <p className="text-gray-700 font-normal">{item.dimensions}</p>
              </div>
            </div>
          </Container>
        ))}
      </div>
    </div>
  );
};

export default TypeCellular;

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
  }
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 430px) {
    height: 340px;
  }
`;
