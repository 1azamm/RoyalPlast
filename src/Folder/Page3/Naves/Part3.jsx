import { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import choose from "../../../LexanTovar/tanlash.jpeg";
import styled from "styled-components";

const Part3 = () => {
  const { language } = useContext(LocalizationApi);
  const text = {
    uz: [
      "4 mm - derazalar yoki eshiklar ustidagi kanoplar kabi  kichik tuzilmalar uchun ishlatiladi.",
      "6-8 mm - qor, yomg'ir va shamol yuklariga ta'sir qiladigan kattaroq tuzilmalar uchun javob beradi. Bu kanoplarning ko'pchiligi , masalan, avtomobillar, suzish havzalari uchun.",
      "10 mm yoki undan ko'p - ekstremal ob-havo sharoitida ishlaydigan inshootlarni qurish uchun ishlatiladi.",
    ],
    ru: [
      "4 мм — используется для небольших конструкций, таких как козырьки над окнами или дверями.",
      "6-8 мм — подойдет для более крупных сооружений, подвергающихся нагрузкам от снега, дождя, ветра. Это большинство навесов, например, для автомобилей, бассейнов.",
      "10 мм и более — применяется для возведения конструкций, эксплуатирующихся в экстремальных погодных условиях.",
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
      <div className="w-[48%]">
        <h1 className="text-4xl mt-5 mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px]">
          {language === "uz" ? "Qanday tanlash kerak?" : "Как выбрать?"}
        </h1>
        <div className="flex flex-col text-lg gap-y-5">
          <p>
            {language === "uz"
              ? "Naveslar uchun polikarbonat varag'ini sotib olishdan oldin, uning qalinligi haqida qaror qabul qilish muhimdir."
              : "Прежде чем купить лист поликарбоната для навесов, важно определиться с его толщиной."}
          </p>

          <div>
            <p className="font-semibold  pb-5">
              {language === "uz"
                ? "Uyali polikarbonat uchun siz quyidagi tavsiyalarga amal qilishingiz mumkin:"
                : "Для сотового можно следовать следующим рекомендациям:"}
            </p>
            {text[language].map((item, index) => (
              <P key={index} className="text-base mb-4">
                {item}
              </P>
            ))}
          </div>

          <div>
            <p className="font-semibold  pb-5">
              {language === "uz"
                ? "Tanlashda e'tiborga olish kerak bo'lgan boshqa ko'rsatkichlar:"
                : "Другие показатели, которые необходимо учитывать при выборе:"}
            </p>

            {text2[language].map((item, index) => (
              <P key={index} className="text-base mb-4">
                {item}
              </P>
            ))}
          </div>
        </div>
      </div>
      <img className="w-[50%] pt-10 h-[500px]" src={choose} alt="" />
    </div>
  );
};

export default Part3;

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
