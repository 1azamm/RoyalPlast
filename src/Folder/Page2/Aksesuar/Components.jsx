import { useState, useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import HP from "../../../LexanTovar/HP.webp";
import HCP from "../../../LexanTovar/HCP.jpg";
import Tugatish from "../../../LexanTovar/Tugatish.jpeg";
import Bolt from "../../../LexanTovar/bolt.jpeg";
import Skotch from "../../../LexanTovar/Lenta.jpeg";
import Lenta from "../../../LexanTovar/skotch.jpeg";
import Shayba from "../../../LexanTovar/Shayba.webp";
import Metall from "../../../LexanTovar/metall.jpeg";
import Button from "../../../utils/Button";
import Write from "../../../utils/Write";

import styled from "styled-components";

const Components = () => {
  const { language } = useContext(LocalizationApi);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const enlargeImage = (event) => {
    event.target.style.transform = "scale(1.1)";
    event.target.style.transition = "transform 0.3s ease-in-out";
  };

  const resetImage = (event) => {
    event.target.style.transform = "scale(1)";
  };

  const data = [
    {
      img: HP,
      title:
        language === "uz"
          ? "Ulanish tizimi (profil) HP"
          : "Система подключения (профиль) HP",
      description:
        language === "uz"
          ? "Royal Plast zavodi choyshablarni ulash va qoplamani qo'llab-quvvatlovchi tuzilishga mahkamlash uchun polikarbonat birlashtiruvchi profillarning keng tanlovini taklif etadi. Uyali polikarbonatni ehtiyotkorlik bilan o'rnatish, uni uzoq vaqt davomida saqlash, butun strukturaning mustahkamligi va estetik ko'rinishi uchun maxsus birlashtiruvchi profillar yordamida tayyorlangan choyshablarni ulash tavsiya etiladi."
          : "Завод «Роял Пласт» предлагает широкий выбор соединительных профилей из поликарбоната для соединения листов и крепления покрытия к несущей конструкции. Рекомендуется аккуратно устанавливать сотовый поликарбонат, чтобы сохранить его на длительное время, соединять листы, изготовленные с использованием специальных соединительных профилей, для прочности и эстетичного вида всей конструкции.",
    },
    {
      img: HCP,
      title: language === "uz" ? "HCP profillari" : "HCP профили",
      description:
        language === "uz"
          ? "Royal Plast zavodi choyshablarni ulash va qoplamani qo'llab-quvvatlovchi tuzilishga mahkamlash uchun polikarbonat birlashtiruvchi profillarning keng tanlovini taklif etadi. Uyali polikarbonatni ehtiyotkorlik bilan o'rnatish, uni uzoq vaqt davomida saqlash, butun strukturaning mustahkamligi va estetik ko'rinishi uchun maxsus birlashtiruvchi profillar yordamida tayyorlangan choyshablarni ulash tavsiya etiladi."
          : "Завод «Роял Пласт» предлагает широкий выбор соединительных профилей из поликарбоната для соединения листов и крепления покрытия к несущей конструкции. Рекомендуется аккуратно устанавливать сотовый поликарбонат, чтобы сохранить его на длительное время, соединять листы, изготовленные с использованием специальных соединительных профилей, для прочности и эстетичного вида всей конструкции.",
    },
    {
      img: Tugatish,
      title: language === "uz" ? "Profillarni tugatish" : "Конечные профили",
      description:
        language === "uz"
          ? "Royal Plast zavodi choyshablarni ulash va qoplamani qo'llab-quvvatlovchi tuzilishga mahkamlash uchun polikarbonat birlashtiruvchi profillarning keng tanlovini taklif etadi. Uyali polikarbonatni ehtiyotkorlik bilan o'rnatish, uni uzoq vaqt davomida saqlash, butun strukturaning mustahkamligi va estetik ko'rinishi uchun maxsus birlashtiruvchi profillar yordamida tayyorlangan choyshablarni ulash tavsiya etiladi."
          : "Завод «Роял Пласт» предлагает широкий выбор соединительных профилей из поликарбоната для соединения листов и крепления покрытия к несущей конструкции. Рекомендуется аккуратно устанавливать сотовый поликарбонат, чтобы сохранить его на длительное время, соединять листы, изготовленные с использованием специальных соединительных профилей, для прочности и эстетичного вида всей конструкции.",
    },
    {
      img: Bolt,
      title: language === "uz" ? "Uskuna" : "Оборудование",
      description:
        language === "uz"
          ? "Termal yuvish moslamalari monolit va uyali polikarbonat plitalarini ichki va tashqi makonda turli xil tuzilmalarda mahkamlash uchun mo'ljallangan. Plitalarni yog'och va metall yuzalarga ehtiyotkorlik bilan va ishonchli tarzda yopishtiring, choyshablarni shikastlanishdan saqlang."
          : "Термошайбы предназначены для крепления листов монолитного и сотового поликарбоната в различных конструкциях внутри и снаружи помещений. Аккуратно и надежно приклейте пластины к деревянным и металлическим поверхностям, защитите листы от повреждений.",
    },
    {
      img: Skotch,
      title: language === "uz" ? "Yopishqoq lenta" : "Самоклеющаяся пленка",
      description:
        language === "uz"
          ? "Teshilgan lenta kabi, u uyali polikarbonat hujayralarida hosil bo'lgan kondensatning tabiiy va yumshoq bug'lanishiga xizmat qiladi, shuningdek, hujayralarni chang, hasharotlar, o'simlik sporalari va moxning kirib kelishidan himoya qiladi."
          : "Как и перфорированная лента, она служит для естественного и бережного испарения конденсата, образующегося в ячейках сотового поликарбоната, а также защищает ячейки от пыли, насекомых, спор растений и мха.",
    },
    {
      img: Lenta,
      title: language === "uz" ? "Yopishqoq lenta" : "Самоклеющаяся пленка",
      description:
        language === "uz"
          ? "Teshikli lenta uyali polikarbonat hujayralarida hosil bo'lgan kondensatni tabiiy va ehtiyotkorlik bilan olib tashlash, shuningdek, hujayralarni chang, hasharotlar, o'simlik sporalari va moxlarning kirib kelishidan himoya qilish uchun xizmat qiladi. O'z-yopishqoq teshilgan lenta ilg'or to'qilmagan materiallardan tayyorlangan bo'lib, birinchi darajali drenajni ta'minlash uchun maxsus ishlov berilgan, choyshab bo'shliqlaridan namlik va kirni yumshoq va samarali tarzda olib tashlaydi."
          : "Перфорированная лента служит для естественного и бережного удаления конденсата, образующегося в ячейках сотового поликарбоната, а также для защиты ячеек от пыли, насекомых, спор растений и мха. Самоклеящаяся перфорированная лента изготовлена ​​из современных нетканых материалов, специально обработана для обеспечения первоклассного дренажа, мягко и эффективно удаляет влагу и грязь из спальных мест.",
    },
    {
      img: Shayba,
      title: language === "uz" ? "Metall shayba" : "Металлическая шайба",
      description:
        language === "uz"
          ? "Metall shaybasi (bo'shliqlar) o'z-o'zidan tejamkor murvatning boshi va plita yuzasi o'rtasida muhrlangan qistirmalari sifatida ishlatiladi. Plitani qo'llab-quvvatlovchi tuzilishga nuqta mahkamlash uchun mo'ljallangan. Plita shamol yuki ostida tushishiga yo'l qo'ymaslik uchun uning maydoni orqali strukturaga mahkamlanadi."
          : "В качестве уплотнительной прокладки между головкой самореза и поверхностью плиты используется металлическая шайба (проставка). Предназначен для точечного крепления к несущей конструкции плиты. Пластина крепится к конструкции по всей ее площади, чтобы предотвратить ее падение под ветровой нагрузкой.",
    },
    {
      img: Metall,
      title:
        language === "uz"
          ? "Metall shayba mahkamlagichi"
          : "Металлический фиксатор шайбы",
      description:
        language === "uz"
          ? "Polikarbonat termal yuvish mashinasi juda bardoshli va quyosh nuri va boshqa ob-havo omillariga chidamli. Polikarbonat konstruktsiyalarini mahkamlashda termal yuvish vositasidan foydalanish ularning xizmat muddatini sezilarli darajada oshiradi. Termal yuvish moslamalari ichi bo'sh yadroli Polygal qoplama plitalari uchun maxsus ishlab chiqilgan va mijozlar talabiga binoan komponent mahsulot sifatida etkazib beriladi."
          : "Термошайба из поликарбоната очень прочна и устойчива к солнечному свету и другим погодным факторам. Использование термошайбы при креплении поликарбонатных конструкций значительно увеличивает срок их службы. Термошайбы специально разработаны для полых облицовочных листов Polygal и поставляются в виде комплектующих изделий в соответствии с требованиями заказчика.",
    },
  ];

  return (
    <div className="mt-16">
      <H1 className="text-3xl mb-16 mt-5 underline decoration-[#77b94c] underline-offset-[14px]">
        {language === "uz"
          ? "Polikarbonatni mahkamlash uchun komponentlar"
          : "Компоненты для крепления поликарбоната"}{" "}
        <span className="font-semibold">
          {language === "uz" ? "turlari" : "типы"}
        </span>
      </H1>
      <DataContainer className="flex  flex-wrap gap-6">
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
              <img src={item.img} alt="" className="h-[250px] w-[100%] " />
            </div>

            <div className="px-5 py-7">
              <hr />
              <div className="pt-5 h-[310px]">
                <h1 className="text-xl font-semibold pb-5">{item.title}</h1>
                <P className="text-gray-600 font-light">{item.description}</P>
              </div>

              <Button
                id={"btn3"}
                text={language === "uz" ? "Buyurtma" : "Заказ"}
                position={
                  "text-[16px] mb-[0px] py-[7px] w-[100%] bg-[#5bb521] text-white border-[#5bb521] border-2 text-white hover:text-[#5bb521] hover:shadow-[inset_1rem_1rem_1rem_12rem] hover:bg-transparent hover:shadow-[#5cb5212b] duration-[500ms,800ms] transition-[color,box-shadow] rounded-none lg:hover:text-green-900"
                }
                onClick={handleClick}
              />
            </div>
          </Container>
        ))}
      </DataContainer>
      <Write
        text={language === "uz" ? "Buyurtma" : "Заказ"}
        modal={toggle}
        setModal={setToggle}
      />
    </div>
  );
};

export default Components;

const DataContainer = styled.div`
  @media only screen and (max-width: 1280px) {
    justify-content: center;
  }
`;
const Container = styled.div`
  &:hover {
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 20px gray;
  }
  @media only screen and (max-width: 1280px) {
    width: 48%;
  }
  @media only screen and (max-width: 870px) {
    width: 100%;
    margin: 0 40px;
  }
  @media only screen and (max-width: 700px) {
    margin: 0;
  }
`;

const H1 = styled.h1`
  @media only screen and (max-width: 484px) {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 45px;
    line-height: 50px;
  }
`;
const P = styled.p`
  @media only screen and (max-width: 484px) {
    font-size: 15px;
  }
`;
