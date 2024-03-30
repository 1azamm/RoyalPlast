import { useContext } from "react";
import { Image } from "antd";
import Table3 from "../../LexanTovar/Table3.jpg";
import styled from "styled-components";
import { LocalizationApi } from "../../Context/Language";

const Article4 = () => {
  const { language } = useContext(LocalizationApi);

  return (
    <div id="scroll4">
      <h1 className="text-4xl font-semibold pt-20 pb-10">
        {language === "uz"
          ? "Plitalar qalinligi va solishtirma og'irligi"
          : "Толщина плиты и удельный вес"}
      </h1>
      <div className="flex justify-between flex-wrap items-center">
        <div className="flex flex-col gap-y-5 text-lg">
          <p>
            {language === "uz"
              ? "Ishlab chiqarish texnologiyasi turli o'lchamdagi uyali polikarbonat ishlab chiqarish imkonini beradi. Hozirgi vaqtda sanoatda qalinligi 4, 6, 8, 10, 16, 20 va 25 mm bo'lgan turli xil ichki panelli tuzilmalarga ega panellar ishlab chiqarilmoqda. Polikarbonatning zichligi 1,2 kg / m 3 ni tashkil qiladi, DIN 53479 standartida ko'rsatilgan o'lchash usuli bo'yicha aniqlanadi."
              : "Технология производства позволяет изготавливать сотовый поликарбонат различных размеров. В настоящее время промышленность выпускает панели с различной внутренней структурой толщиной 4, 6, 8, 10, 16, 20 и 25 мм. Плотность поликарбоната составляет 1,2 кг/м 3, определяется методом измерения, указанным в стандарте DIN 53479."}
          </p>
          <p>
            {language === "uz"
              ? "Panellar uchun bu ko'rsatkich panelning qalinligiga, shuningdek, qatlamlar soniga va qatlamning qadamiga bog'liq. qattiqlashtirgichlar va ularning kesma maydoni."
              : "Для панелей этот показатель зависит от толщины панели, а также количества слоев и шага слоя. ребра жесткости и площадь их поперечного сечения"}
          </p>
        </div>
      </div>
      <div className="flex mt-6 flex-wrap">
        <H3 className="text-xl font-semibold pt-12 pb-5 w-[35%]">
          {language === "uz"
            ? "Uyali polikarbonatning eng keng tarqalgan markalari uchun ma'lumotlar jadvalda keltirilgan:"
            : "Данные по наиболее распространённым маркам сотового поликарбоната представлены в таблице:"}
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
