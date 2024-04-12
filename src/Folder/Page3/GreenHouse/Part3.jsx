import React, { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import choose from "../../../LexanTovar/tanlash.jpeg";
import styled from "styled-components";

const Part3 = () => {
  const { language } = useContext(LocalizationApi);
  const text = {
    uz: [
      "Tom yopish yoki oddiy o'z-o'zidan tejamkor vintlardek - birinchi variant yanada ishonchli va qulay;",
      "Rezina termal yuvish vositalari - metalldan farqli o'laroq, ular choyshabni mahkam ushlab turadi va oqmaydi;",
      "Uchlarini yopish uchun o'z-o'zidan yopishqoq teshilgan lenta.",
    ],
    ru: [
      "Кровельные или простые саморезы – первый вариант надежнее и удобнее;",
      "Резиновые термошайбы – в отличие от металлических, плотно держат лист и не протекают;",
      "Самоклеящаяся перфорированная лента для герметизации концов.",
    ],
  };

  const text2 = {
    uz: [
      "Kelajakdagi binoning parametrlari va konfiguratsiyasi - bunga asoslanib, polimer qatlamining turi va uning o'lchami tanlanadi. Kemerli tuzilmalar uchun uyali polikarbonat qulayroqdir, chunki butun uzunligi bo'ylab yaxshi egiladi.",
      "Tomning burchagi - qanchalik kichik bo'lsa, panel qalinroq bo'lishi kerak, chunki u qor yoki to'plangan suvning ko'proq og'irligiga bardosh berishi kerak. Yupqa choyshablar uchun qo'shimcha ko'priklar qo'shilishi kerak.",
    ],
    ru: [
      "Параметры и конфигурация будущей постройки — исходя из этого подбирается вид полимерного листа, его размер. Для арочных конструкций удобнее сотовый поликарбонат, т.к. он хорошо сгибается по всей длине.",
      "Угол наклона кровли — чем он меньше, тем толще должна быть панель, потому что ей необходимо выдерживать больший вес снега или скопившейся воды. Для тонких листов следует добавлять дополнительные перемычки.",
    ],
  };

  return (
    <div className="flex justify-between items-start flex-wrap">
      <img className="w-[50%] h-[460px]" src={choose} alt="" />
      <div className="w-[48%]">
        <h1 className="text-4xl mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px]">
          {language === "uz"
            ? "Qanday qilib xavfsiz o'rnatish kerak?"
            : "Как крепить и перевозить?"}
        </h1>
        <div className="flex flex-col text-lg gap-y-5">
          <div>
            <p className="font-semibold pb-5">
              {language === "uz"
                ? "Fiksatsiya qilish uchun quyidagilar qo'llaniladi:"
                : "Для фиксации используются:"}
            </p>
            {text[language].map((item, index) => (
              <StyledParagraph key={index}>{item}</StyledParagraph>
            ))}
          </div>
          <p className="text-base">
            {language === "uz"
              ? "Uyali polikarbonat plitalari rulonga o'ralgan holda, hujayralar burilib ketmasligi uchun gorizontal holatda tashiladi. Saytga kelgandan so'ng, panellar ochilishi kerak."
              : "Плиты сотового поликарбоната скатывают и транспортируют горизонтально, чтобы ячейки не перекручивались. После прибытия на объект панели должны открыться."}
          </p>
          <p className="text-base">
            {language === "uz" ? (
              <>
                Issiqxona uchun polikarbonat plitalarini sotib olish uchun{" "}
                <a
                  href="tel:+998950000044"
                  className="text-blue-700 hover:text-blue-500"
                >
                  +998 95 000 00 44
                </a>{" "}
                telefon raqamiga qo'ng'iroq qiling yoki Murojaat tugmasini
                bosing. Tajribali menejerlar barcha savollaringizga javob
                berishadi, tanlov qilishingizga yordam beradi va tezda buyurtma
                beradi.
              </>
            ) : (
              <>
                Купить листы поликарбоната для теплицы{" "}
                <a
                  href="tel:+998950000044"
                  className="text-blue-700 hover:text-blue-500"
                >
                  +998 95 000 00 44
                </a>{" "}
                позвоните по номеру телефона или нажмите кнопку «Связаться».
                Опытные менеджеры по всем вашим вопросам отвечают, помогают
                сделать выбор, причем быстро заказы.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Part3;

const StyledParagraph = styled.p`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 30px;
  padding-bottom: 5px;
  font-size: 16px;

  &::before {
    content: "";
    background-color: #179bd7;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    position: absolute;
    left: 0px;
    top: 8px;
  }
`;
