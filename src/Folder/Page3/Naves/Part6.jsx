import React, { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import img1 from "../../../LexanTovar/orec1.png";
import img2 from "../../../LexanTovar/orec2.png";
import img3 from "../../../LexanTovar/orec3.png";
import img4 from "../../../LexanTovar/orec4.png";
import styled from "styled-components";

const Part6 = () => {
  const { language } = useContext(LocalizationApi);
  const Content = [
    {
      img: img1,
      p:
        language === "uz"
          ? "Issiq yozli iqlim zonalarida oynalar hajmini minimal darajaga kamaytiring, bu esa uzatiladigan quyosh energiyasi miqdorini kamaytiradi;"
          : "В жарком летнем климате уменьшите размеры окон до минимума, что уменьшит количество передаваемой солнечной энергии;",
    },
    {
      img: img2,
      p:
        language === "uz"
          ? "Shaffof kanoplarni, tomlarni, verandalarni shunday loyihalashtiringki, ular kunduzgi soatlarning aksariyati shimolga yo'naltirilgan yoki umumiy bino soyasida joylashgan bo'lishi kerak;"
          : "Прозрачные навесы, крыши, патио проектируйте так, чтобы большую часть светового дня они были обращены на север или находились в тени общего здания;",
    },
    {
      img: img3,
      p:
        language === "uz"
          ? "20 dan 35% gacha yorug'lik o'tkazuvchanligi bilan kulrang, opal, bronza, kumush rangli choyshablardan foydalaning, bu xonaning isitilishini sezilarli darajada kamaytiradi, lekin optik shaffoflikni saqlaydi;"
          : "Используйте серые, опаловые, бронзовые, серебряные листы со светопроницаемостью от 20 до 35%, что позволит существенно снизить нагрев помещения, но сохранить оптическую прозрачность;",
    },
    {
      img: img4,
      p:
        language === "uz"
          ? "Minimal yorug'lik o'tkazuvchanligi bilan oq varaqdan foydalaning. Bunday varaqning optik shaffofligi yo'qligiga qaramasdan."
          : "Используйте белую простыню с минимальной светопроницаемостью. Несмотря на отсутствие оптической прозрачности такого листа.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <H1 className="text-[30px] lg:w-[60%] mt-5 mb-8 text-center font-medium max-[500px]:text-3xl max-[500px]:font-semibold max-[500px]:leading-[35px] ">
        {language === "uz"
          ? "Shuningdek, agar arxitektura loyihasida oynaning shaffofligi muhim bo'lsa, biz quyidagilarni tavsiya qilamiz:"
          : "Поэтому если в архитектурном проекте важна прозрачность остекления мы рекомендуем:"}
      </H1>
      <ContentContainer className="flex justify-between md:flex-wrap sm:flex-wrap mt-10 gap-y-5">
        {Content.map((item, i) => (
          <Contentt
            className="lg:w-[20%] md:w-[48%] sm:w-[45%] flex flex-col items-center gap-y-5"
            key={i}
          >
            <Img className="xl:w-[110px] " src={item.img} />
            <p className="text-sm text-center">{item.p}</p>
          </Contentt>
        ))}
      </ContentContainer>
    </div>
  );
};

export default Part6;

const H1 = styled.h1`
  @media only screen and (max-width: 640px) {
    font-size: 22px;
    font-weight: 700;
  }
  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const ContentContainer = styled.div`
  @media only screen and (max-width: 640px) {
    flex-wrap: wrap;
    row-gap: 50px;
  }
  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    row-gap: 50px;
  }
`;

const Contentt = styled.div`
  @media only screen and (max-width: 640px) {
    width: 48%;
  }
  @media only screen and (max-width: 600px) {
    width: 45%;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Img = styled.img`
  @media only screen and (max-width: 600px) {
    width: 80px;
  }
  @media only screen and (max-width: 500px) {
    width: 100px;
  }
`;
