import React, { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import Teplica from "../../../LexanTovar/teplica.jpg";
import styled from "styled-components";

const Part2 = () => {
  const { language } = useContext(LocalizationApi);

  const text = {
    uz: [
      "Royal Plast kompaniyasining mahsulotlari qishloq xo'jaligi mahsulotlarini iloji boricha samarali ishlab chiqarish imkonini beradi. Issiqxonaga termal infraqizil nurlanishni o'tkazadigan shaffof choyshablar, katta miqdorda ko'rinadigan yorug'lik 80%, issiqxonalar uchun eng yaxshi qoplama hisoblanadi.",
      "Havo bo'shlig'i issiqlik izolatsiyasini yaratadi, bu issiqxonani isitishda sezilarli energiya tejashga yordam beradi. Bardoshli polikarbonat qoplamasi noqulay ob-havo sharoitidan ishonchli himoya qiladi.",
      "8, 10 mm qalinlikdagi choyshab bilan qoplash polietilen plyonka yoki bir qatlamli profilli taxtalarga nisbatan issiqlik yo'qotilishini yarmi yoki undan ko'proq kamaytiradi. Bu issiqxonada harorat o'zgarishini kamaytiradi, natijada o'sish sur'atlari tezlashadi va hosil ertaroq olinadi. Ularning asosiy qiymati binoni saqlash xarajatlarini kamaytirishdir. Bizning tajribamizga ko'ra, issiqxonani o'rnatish va texnik xizmat ko'rsatish uch yil ichida o'zini oqlaydi, keyin esa texnik xizmat ko'rsatish xarajatlarini tejash Royal Plast mahsulotlari foydasiga guvohlik beradi, plitalarning xizmat qilish muddati 15-20 yilga etadi;",
    ],
    ru: [
      "Изделия компании «Роял Пласт» позволяют максимально эффективно производить сельскохозяйственную продукцию. Прозрачные листы, пропускающие тепловое инфракрасное излучение внутрь помещения теплицы, большое количество видимого света 80%, являются наилучшим покрытием для теплиц.",
      "Воздушная прослойка создает теплоизоляцию, способствующую значительной экономии энергии при обогреве теплицы. Прочное поликарбонатное покрытие создает надежную защиту от неблагоприятных атмосферных явлений.",
      "Покрытие листами толщиной 8, 10 мм уменьшает потери тепла в два раза и более по сравнению с полиэтиленовой пленкой или однослойными профилированными плитами. Оно сокращает перепады температуры в теплице, что приводит к ускоренным темпам роста и ранним урожаям. Их главная ценность состоит в уменьшении стоимости содержания строения. Из нашего опыта, установка и содержание теплицы окупается в течение трех лет, а далее экономия в стоимости содержания свидетельствует в пользу изделий «Роял Пласт», срок эксплуатации плит достигает 15-20 лет.",
    ],
  };

  return (
    <div className="flex justify-between flex-wrap">
      <div className="lg:w-[48%] md:w-[100%] md:pb-5 sm:pb-5 max-[640px]:pb-5">
        <h1 className="text-4xl mt-5 mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px] max-[500px]:text-3xl max-[500px]:font-semibold max-[542px]:leading-[52px] max-[473px]:leading-[52px]">
          {language === "uz" ? "Issiqxonalar" : "Тепличные хозяйства"}
        </h1>
        {text[language].map((item, index) => (
          <P key={index} className="text-base mb-4">
            {item}
          </P>
        ))}
      </div>
      <img className="lg:w-[50%] md:w-[100%]" src={Teplica} alt="" />
    </div>
  );
};

export default Part2;

const P = styled.p``;
