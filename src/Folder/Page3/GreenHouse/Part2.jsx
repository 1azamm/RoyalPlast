import React, { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import advantage from "../../../LexanTovar/afzallik.jpeg";
import styled from "styled-components";

const Part2 = () => {
  const { language } = useContext(LocalizationApi);

  const text = {
    uz: [
      "Qalinligi Optimal 6-8 mm. Kichkina issiqxona uchun siz 4 mm, issiqxona majmuasi uchun - 10-12 mm dan foydalanishingiz mumkin.",
      "Shaffoflik. Pigment yorug'lik o'tkazuvchanligini pasaytiradi, bu o'simliklarning o'sishi va meva berishiga salbiy ta'sir ko'rsatishi mumkin. Mat polikarbonat ham tavsiya etilmaydi.",
      "Kuch. Asal qolipli polimer varag'i barmoqlaringiz bilan siqib qo'yganingizda buzilmasligi kerak.",
      "UV himoyasi . Polimerning ultrabinafsha nurlari ta'sirida yomonlashishi va bulutli bo'lishiga yo'l qo'ymaslik uchun uning bir tomoni UV bilan belgilangan maxsus qatlam bilan qoplanishi kerak. Plitalar himoyalangan tomoni tashqariga qaragan holda o'rnatilishi kerak.",
      "Qatlamlar soni. Agar siz qishda issiqxonadan foydalanmoqchi bo'lsangiz , ko'p qatlamli uyali polikarbonatni tanlash yaxshidir . Yozgi issiqxona uchun ikki qatlamli H shaklidagi polimer etarli bo'ladi.",
    ],
    ru: [
      "Толщина. Оптимальной является 6-8 мм. Для небольшого парника можно использовать 4 мм, для тепличного комплекса — 10-12 мм.",
      "Прозрачность. Пигмент снижает светопропускаемость, что может негативно сказаться на росте и плодоношении растений. Также не рекомендуется матовый поликарбонат.",
      "Прочность. Лист сотового полимера не должен сминаться, если вы сдавливаете его пальцами.",
      "Защита от ультрафиолета. Чтобы полимер не разрушался и не мутнел под действием уф-лучей, одна его сторона должна быть покрыта специальным слоем, который маркируется UV. Монтировать листы нужно защищенной стороной наружу.",
      "Количество слоев. Если предполагается использование теплицы зимой, лучше выбирать многослойный сотовый поликарбонат. Для летней теплицы будет достаточно двухслойного полимера H-образного сечения.",
    ],
  };

  return (
    <div className="flex justify-between flex-wrap">
      <div className="lg:w-[48%] md:w-[100%]">
        <h1 className="text-4xl mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px] max-[500px]:text-3xl max-[500px]:font-semibold max-[1024px]:leading-[52px] max-[500px]:leading-[50px]">
          {language === "uz"
            ? "Polikarbonat issiqxonasi uchun polimerni qanday tanlash mumkin?"
            : "Как выбрать полимер для теплицы из поликарбоната?"}
        </h1>
        {text[language].map((item, index) => (
          <P key={index} className="text-base mb-4">
            {item}
          </P>
        ))}
      </div>
      <img
        className="lg:w-[50%] md:w-[100%] max-[1024px]:pt-5"
        src={advantage}
        alt=""
      />
    </div>
  );
};

export default Part2;

const P = styled.p`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 30px;

  &::before {
    content: "";
    background-color: #179bd7;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
    top: 7px;
  }
`;
