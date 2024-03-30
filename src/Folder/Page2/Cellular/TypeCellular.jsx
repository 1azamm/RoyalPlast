import { useContext } from "react";
import img from "../../../LexanTovar/product_type_thumb35.jpeg";
import img2 from "../../../LexanTovar/product_type_sota_img1.png";
import img3 from "../../../LexanTovar/product_type_sota_img2.png";
import img4 from "../../../LexanTovar/product_type_sota_img3.png";
import img5 from "../../../LexanTovar/product_type_sota_img4.png";
import img6 from "../../../LexanTovar/product_type_sota_img5.png";
import styled from "styled-components";
import { LocalizationApi } from "../../../Context/Language";

const TypeCellular = () => {
  const { language } = useContext(LocalizationApi);

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
      title: language === "uz" ? "Polygal SMART" : "Полигал СМАРТ",
      description:
        language === "uz"
          ? "Yangi avlodning innovatsion materiali. To'g'ridan-to'g'ri quyosh nurlarining 100% tarqalishi. Fotosintezni yaxshilaydi, kuyish va qizib ketishdan himoya qiladi.Yorug'lik tarqatuvchi material sifatida kanoplar, kanoplar, gazeboslar, gumbazlar, barcha turdagi oynalar va boshqa inshootlarni qurish uchun juda mos keladi. Ayniqsa yorqin quyoshli hududlarda."
          : "Инновационный материал нового поколения. 100% рассеивание прямых солнечных лучей. Улучшает фотосинтез, защищает от ожогов и перегрева.Как светорассеивающий материал он очень подходит для строительства навесов, козырьков, беседок, куполов, всевозможных окон и других конструкций. Особенно в ярких солнечных местах.",
      thickness:
        language === "uz"
          ? "Plitalar qalinligi (mm): 4-10"
          : "Толщина пластины (мм): 4-10",
      dimensions:
        language === "uz"
          ? "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000"
          : "Размеры плиты (мм): 2100х6000, 2100х12000",
    },
    {
      img: img2,
      title: language === "uz" ? "GOST standarti" : "ГОСТ стандарт",
      description:
        language === "uz"
          ? "Polygal STANDARD - bu dunyoni zabt etgan shakldagi uyali polikarbonat. Bu haqiqiy uyali polikarbonat va uning engil hamkasblari emas. Muhim yuklarga duchor bo'lgan ishonchli tuzilmalar uchun juda bardoshli material. Choyshablar qor qoplami yuqori bo'lgan hududlarda dolzarbdir. Ular ko'p yillik tajriba bilan tasdiqlangan va sanoat standartiga aylangan polikarbonatning solishtirma og'irligi va qattiqligi o'rtasidagi optimal nisbatga ega."
          : "Полигал СТАНДАРТ – это сотовый поликарбонат формы, покорившей мир. Это настоящий сотовый поликарбонат, а не его легкие аналоги. Очень прочный материал для надежных конструкций, подвергающихся значительным нагрузкам. Листы актуальны в районах с высоким снежным покровом. Они имеют оптимальное соотношение между удельным весом и твердостью поликарбоната, что доказано многолетним опытом и стало отраслевым стандартом.",
      thickness:
        language === "uz"
          ? "Plitalar qalinligi (mm): 4-25"
          : "Толщина пластины (мм): 4-25",
      dimensions:
        language === "uz"
          ? "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000"
          : "Размеры плиты (мм): 2100х6000, 2100х12000",
    },
    {
      img: img3,
      title: language === "uz" ? "Amaliy" : "Практичный",
      description:
        language === "uz"
          ? "Eng yuqori sinfdagi uyali polikarbonat, engil dizayn. Iqtisodiy - varaqning solishtirma og'irligi Polygal STANDARD bilan solishtirganda biroz kamayadi. Foydalanish uchun tavsiya etiladi: uzoq muddatli inshootlarda, issiqxonalar, kanoplar, kanoplar, har qanday murakkablikdagi kemerli qoplamalar, ichki dizayn uchun. Muhim zarba yuklari bo'lgan tuzilmalarda Polygal STANDARDga qaraganda qo'llab-quvvatlovchi elementlar o'rtasida kichikroq masofa talab qilinadi."
          : "Сотовый поликарбонат высочайшего качества, легкая конструкция. Экономичен – удельный вес листа немного снижен по сравнению с Полигалом СТАНДАРТ. Рекомендуется к использованию: в долговременных конструкциях, теплицах, навесах, навесах, арочных перекрытиях любой сложности, для оформления внутренних помещений. В конструкциях со значительными ударными нагрузками требуется меньшее расстояние между опорными элементами, чем Полигал СТАНДАРТ.",
      thickness:
        language === "uz"
          ? "Plitalar qalinligi (mm): 4-10"
          : "Толщина пластины (мм): 4-10",
      dimensions:
        language === "uz"
          ? "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000"
          : "Размеры плиты (мм): 2100х6000, 2100х12000",
    },
    {
      img: img4,
      title: language === "uz" ? "TITAN SKY STANDARTI" : "ТИТАН СКАЙ СТАНДАРТ",
      description:
        language === "uz"
          ? "Qattiq konstruktsiyali va mukammal issiqlik izolatsiyasiga ega og'ir panellar. X-shaklidagi ichki qattiqlashtiruvchilarga ega noyob panel tuzilishi ajoyib quvvat va issiqlik izolatsiyasini ta'minlaydi. Og'ir yuk ostida past nishabli tomlar va uzun oraliqli uyingizda inshootlarida foydalanish uchun ideal."
          : "Тяжелые панели, прочная конструкция и отличная теплоизоляция. Уникальная конструкция панели с внутренними Х-образными ребрами жесткости обеспечивает превосходную прочность и теплоизоляцию. Идеально подходит для использования на низкоскатных крышах и длиннопролетных кровельных конструкциях, подвергающихся большим нагрузкам.",
      thickness:
        language === "uz"
          ? "Plitalar qalinligi (mm): 8-25"
          : "Толщина пластины (мм): 8-25",
      dimensions:
        language === "uz"
          ? "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000"
          : "Размеры плиты (мм): 2100х6000, 2100х12000",
    },
    {
      img: img5,
      title: language === "uz" ? "Hummingbird hujayrasi" : "Клетка колибри",
      description:
        language === "uz"
          ? "Hummingbird savdo belgisi ostida engil engil uyali polikarbonat Rossiya bozori uchun maxsus ishlab chiqilgan. Va u haddan tashqari zarba yuklariga duchor bo'lmagan shaffof tuzilmalarda foydalanish uchun mo'ljallangan. Ammo shu bilan birga, bunday polikarbonat issiqxonalar, shaffof tom yopish inshootlari (qiyalik, gorizontal, kamar) kabi tuzilmalarda ishonchli hisoblanadi."
          : "Легкий сотовый поликарбонат под торговой маркой «Колибри» был разработан специально для российского рынка. И он предназначен для использования в прозрачных конструкциях, не подвергающихся чрезмерным ударным нагрузкам. Но в то же время такой поликарбонат надежен в таких конструкциях, как теплицы, прозрачные кровельные конструкции (накатные, горизонтальные, арочные).",
      thickness:
        language === "uz"
          ? "Plitalar qalinligi (mm): 3,7-25"
          : "Толщина пластины (мм): 3,7-25",
      dimensions:
        language === "uz"
          ? "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000"
          : "Размеры плиты (мм): 2100х6000, 2100х12000",
    },
    {
      img: img6,
      title: language === "uz" ? "Kivi hujayrasi" : "Киви клетка",
      description:
        language === "uz"
          ? "Kiwi savdo belgisi ostidagi engil uyali polikarbonat keng foydalanish uchun maxsus mo'ljallangan. Ushbu polikarbonat qalinligining katta tanlovi tufayli uni qo'llash doirasi juda katta: vaqtinchalik issiqxonalardan tortib katta issiqxonalargacha, shuningdek, bo'limlar, engil kanoplar, kanoplar, gazeboslar, teraslar va verandalar uchun tom yopish inshootlari, dush, ayvonlar va boshqalarni o'rnatish uchun. juda ko'p, bu super kuch talab qilmaydi."
          : "Легкий сотовый поликарбонат торговой марки «Киви» специально разработан для широкого спектра применения. Благодаря большому выбору толщин этого поликарбоната сфера его применения очень велика: от временных теплиц до больших теплиц, а также для устройства перегородок, легких навесов, навесов, беседок, кровельных конструкций террас и веранд, душевых кабин. , навесы и т. д. . очень, суперсилы не требует",
      thickness:
        language === "uz"
          ? "Plitalar qalinligi (mm): 3,7-16"
          : "Толщина пластины (мм): 3,7-16",
      dimensions:
        language === "uz"
          ? "Plitalar o'lchamlari (mm): 2100x6000, 2100x12000"
          : "Размеры плиты (мм): 2100х6000, 2100х12000",
    },
  ];

  return (
    <div className="mt-16">
      <H1 className="text-center text-3xl mb-20 font-semibold underline decoration-[#77b94c] underline-offset-[14px]">
        {language === "uz"
          ? "UYALI POLIKARBONAT TURLARI"
          : "ВИДЫ СОТОВОГО ПОЛИКАРБОНАТА"}
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
  @media only screen and (max-width: 575px) {
    line-height: 60px;
  }
  @media only screen and (max-width: 484px) {
    font-size: 24px;
    margin-bottom: 45px;
    line-height: 50px;
  }
`;

const TextContainer = styled.div`
  @media only screen and (max-width: 430px) {
    height: 340px;
  }
`;
