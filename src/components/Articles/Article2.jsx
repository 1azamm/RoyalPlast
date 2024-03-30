import { useContext } from "react";
import Temperature from "../../LexanTovar/termorasshirenie.jpg";
import styled from "styled-components";
import { LocalizationApi } from "../../Context/Language";

const Article2 = () => {
  const { language } = useContext(LocalizationApi);

  const paragraphs = [
    "Uyali polikarbonat noqulay ekologik sharoitlarga juda yuqori qarshilikka ega. Ishlash haroratining shartlari to'g'ridan-to'g'ri materialning markasiga, xom ashyo sifatiga va ishlab chiqarish texnologiyasiga muvofiqligiga bog'liq. Panel turlarining aksariyati uchun bu ko'rsatkich - 40 ° C dan + 130 ° C gacha.",
    "Polikarbonatning ayrim turlari materialning tuzilishini buzmasdan - 100 ° C gacha bo'lgan juda past haroratlarga bardosh bera oladi. Materialni qizdirganda yoki sovutganda uning chiziqli o'lchamlari o'zgaradi. Ushbu material uchun chiziqli termal kengayish koeffitsienti DIN 53752 ga muvofiq belgilanadigan 0,0065 mm / m- ° S ni tashkil qiladi.",
    "Uyali polikarbonatning maksimal ruxsat etilgan kengayishi varaqning uzunligi va kengligi bo'ylab 1 m uchun 3 mm dan oshmasligi kerak. Ko'rib turganingizdek, polikarbonat sezilarli issiqlik kengayishiga ega, shuning uchun uni o'rnatishda tegishli bo'shliqlarni qoldirish kerak.",
  ];
  const paragraphsRU = [
    "Сотовый поликарбонат обладает очень высокой устойчивостью к неблагоприятным условиям окружающей среды. Температурный режим эксплуатации напрямую зависит от марки материала, качества сырья и совместимости технологии производства. Для большинства типов панелей этот показатель составляет от - 40°С до +130°С.",
    "Некоторые виды поликарбоната выдерживают очень низкие температуры до -100°С, не разрушая при этом структуру материала. При нагревании или охлаждении материала изменяются его линейные размеры. Коэффициент линейного теплового расширения этого материала составляет 0,0065 мм/м-°C, определяется согласно DIN 53752.",
    "Максимально допустимое расширение сотового поликарбоната не должно превышать 3 мм на 1 м по длине и ширине листа. Как видите, поликарбонат имеет значительное тепловое расширение, поэтому при его установке необходимо оставлять соответствующие зазоры.",
  ];

  return (
    <div id="scroll2">
      <h1 className="text-4xl font-semibold pt-20 pb-10">
        {language === "uz"
          ? "Uyali polikarbonatdan foydalanish uchun harorat sharoitlari"
          : "Температурный режим использования сотового поликарбоната"}
      </h1>
      <div className="flex justify-between items-center flex-wrap">
        <Container className="flex flex-col gap-y-8 text-lg w-[55%]">
          {language === "uz"
            ? paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            : paragraphsRU.map((paragraph, index) => (
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
