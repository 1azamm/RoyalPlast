import React from "react";
import { Image } from "antd";
import Table3 from "../../LexanTovar/Table3.jpg";
import styled from "styled-components";

const Article4 = () => {
  return (
    <div id="scroll4">
      <h1 className="text-4xl font-semibold pt-20 pb-10">
        Plitalar qalinligi va solishtirma og'irligi
      </h1>
      <div className="flex justify-between flex-wrap items-center">
        <div className="flex flex-col gap-y-5 text-lg">
          <p>
            Ishlab chiqarish texnologiyasi turli o'lchamdagi uyali polikarbonat
            ishlab chiqarish imkonini beradi. Hozirgi vaqtda sanoatda qalinligi
            4, 6, 8, 10, 16, 20 va 25 mm bo'lgan turli xil ichki panelli
            tuzilmalarga ega panellar ishlab chiqarilmoqda. Polikarbonatning
            zichligi 1,2 kg / m 3 ni tashkil qiladi, DIN 53479 standartida
            ko'rsatilgan o'lchash usuli bo'yicha aniqlanadi.
          </p>
          <p>
            Panellar uchun bu ko'rsatkich panelning qalinligiga, shuningdek,
            qatlamlar soniga va qatlamning qadamiga bog'liq.
            qattiqlashtirgichlar va ularning kesma maydoni.
          </p>
        </div>
      </div>
      <div className="flex mt-6 flex-wrap">
        <H3 className="text-xl font-semibold pt-12 pb-5 w-[35%]">
          Uyali polikarbonatning eng keng tarqalgan markalari uchun ma'lumotlar
          jadvalda keltirilgan:
        </H3>
        <IMG className="w-[65%]">
          <Image src={Table3} />
        </IMG>
      </div>
    </div>
  );
};

export default Article4;

const IMG = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const H3 = styled.h3`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
