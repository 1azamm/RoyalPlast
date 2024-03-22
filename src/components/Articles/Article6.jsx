import React from "react";
import img from "../../LexanTovar/promushlennaya-teplica.jpg";
import styled from "styled-components";

const Article6 = () => {
  const paragraphs = [
    "Uyali polikarbonat juda yaxshi issiqlik izolyatsiyasi xususiyatlariga ega. Bundan tashqari, ushbu materialning issiqlik qarshiligiga nafaqat uning ichida havo borligi, balki materialning o'zi shisha yoki bir xil qalinlikdagi PMMA ga qaraganda ko'proq issiqlik qarshiligiga ega bo'lganligi sababli erishiladi.",
    "Materialning issiqlik izolyatsion xususiyatlarini tavsiflovchi issiqlik uzatish koeffitsienti varaqning qalinligi va tuzilishiga bog'liq. 4,1 Vt/(m² K) (4 mm uchun) dan 1,4 Vt/(m² K) gacha (32 mm uchun). Uyali polikarbonat shaffoflik va yuqori issiqlik izolyatsiyasini birlashtirish zarur bo'lgan eng mos materialdir. Shuning uchun bu material issiqxonalar ishlab chiqarishda juda mashhur bo'ldi.",
  ];
  return (
    <div id="scroll6">
      <h1 className="text-4xl font-semibold pt-20 pb-10">
        Uyali polikarbonatning mexanik kuchi
      </h1>
      <Container className="flex justify-between flew-wrap">
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

export default Article6;

const Container = styled.div`
  flex-wrap: wrap;
`;

const IMG = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-top: 20px;
  }
`;

const Text = styled.p`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
