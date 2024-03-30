import { useContext } from "react";
import img from "../../LexanTovar/promushlennaya-teplica.jpg";
import styled from "styled-components";
import { LocalizationApi } from "../../Context/Language";

const Article6 = () => {
  const { language } = useContext(LocalizationApi);

  const paragraphs = [
    "Uyali polikarbonat juda yaxshi issiqlik izolyatsiyasi xususiyatlariga ega. Bundan tashqari, ushbu materialning issiqlik qarshiligiga nafaqat uning ichida havo borligi, balki materialning o'zi shisha yoki bir xil qalinlikdagi PMMA ga qaraganda ko'proq issiqlik qarshiligiga ega bo'lganligi sababli erishiladi.",
    "Materialning issiqlik izolyatsion xususiyatlarini tavsiflovchi issiqlik uzatish koeffitsienti varaqning qalinligi va tuzilishiga bog'liq. 4,1 Vt/(m² K) (4 mm uchun) dan 1,4 Vt/(m² K) gacha (32 mm uchun). Uyali polikarbonat shaffoflik va yuqori issiqlik izolyatsiyasini birlashtirish zarur bo'lgan eng mos materialdir. Shuning uchun bu material issiqxonalar ishlab chiqarishda juda mashhur bo'ldi.",
  ];
  const paragraphsRU = [
    "Сотовый поликарбонат обладает очень хорошими теплоизоляционными свойствами. Кроме того, термостойкость этого материала достигается не только потому, что он содержит воздух, но и потому, что сам материал обладает большей термостойкостью, чем стекло или ПММА той же толщины.",
    "Коэффициент теплопередачи, характеризующий теплоизоляционные свойства материала, зависит от толщины и структуры листа. От 4,1 Вт/(м²·К) (для 4 мм) до 1,4 Вт/(м²·К) (для 32 мм). Сотовый поликарбонат – наиболее подходящий материал, когда необходимо совместить прозрачность и высокую теплоизоляцию. Поэтому этот материал стал очень популярен при производстве теплиц.",
  ];

  return (
    <div id="scroll6">
      <h1 className="text-4xl font-semibold pt-20 pb-10">
        {language === "uz"
          ? "Uyali polikarbonatning mexanik kuchi"
          : "Механическая прочность сотового поликарбоната"}
      </h1>
      <Container className="flex justify-between flew-wrap">
        <Text className="flex flex-col text-lg gap-y-5 w-[48%]">
          {language === "uz"
            ? paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            : paragraphsRU.map((paragraph, index) => (
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
