import { useContext } from "react";
import img2 from "../../LexanTovar/dvoinoi-polikarbonat.jpg";
import { Image } from "antd";
import H2 from "../../LexanTovar/Turlari/2h.jpg";
import H3 from "../../LexanTovar/Turlari/3h.jpg";
import X3 from "../../LexanTovar/Turlari/3x.jpg";
import W5 from "../../LexanTovar/Turlari/5w.jpg";
import X5 from "../../LexanTovar/Turlari/5x.jpg";
import Table from "../../LexanTovar/Table.jpg";
import styled from "styled-components";
import { LocalizationApi } from "../../Context/Language";

const paragraphs = [
  "Ko'ndalang kesimda varaq to'rtburchaklar yoki uchburchakli chuqurchaga o'xshaydi, bu materialning nomi aslida kelib chiqadi. Buning uchun xom ashyo karbonat kislotasi va dihidroksil birikmalarining poliesterlarining kondensatsiyasi natijasida hosil bo'lgan granullangan polikarbonatdir. Polimer termoset plastiklar guruhiga kiradi va bir qator o'ziga xos xususiyatlarga ega.",
  "Uyali polikarbonatning sanoat ishlab chiqarilishi granüler xom ashyodan ekstruziya texnologiyasidan foydalangan holda amalga oshiriladi. Ishlab chiqarish TU-2256-001-54141872-2006 texnik shartlarga muvofiq amalga oshiriladi. Ushbu hujjat mamlakatimizda materiallarni sertifikatlash uchun qo'llanma sifatida ham qo'llaniladi.",
  "Panellarning asosiy parametrlari va chiziqli o'lchamlari qoidalar talablariga qat'iy mos kelishi kerak.",
  "Ko'ndalang kesimdagi uyali polikarbonatning tuzilishi ikki xil bo'lishi mumkin:",
];
const paragraphsRU = [
  "В поперечном сечении лист имеет вид прямоугольного или треугольного паза, отсюда и собственно название этого материала. Сырьем для этого служит гранулированный поликарбонат, образующийся путем конденсации полиэфиров угольной кислоты и дигидроксильных соединений. Полимер термореактивный относится к группе пластмасс и обладает рядом уникальных свойств.",
  "Промышленное производство сотового поликарбоната осуществляется по экструзионной технологии из гранулированного сырья. Производство осуществляется в соответствии с техническими условиями ТУ-2256-001-54141872-2006. Данный документ также используется как руководство по сертификации материалов в нашей стране.",
  "Основные параметры и линейные размеры панелей должны строго соответствовать требованиям правил.",
  "Структура поперечного сечения сотового поликарбоната может быть двух типов:",
];
const textRu = [
  "2Н – двухслойный с прямоугольными ячейками.",
  "3Х – трехслойная конструкция с сочетанием прямоугольных ячеек с дополнительными наклонными частями.",
  "3Н - листы трехслойные толщиной 6, 8, 10 мм с прямоугольной сотовой структурой.",
  "5W – пятислойные листы с прямоугольной сотовой структурой, обычно толщиной 16 – 20 мм.",
  "5Х – пятислойные листы с плоскими и изогнутыми ребрами толщиной 25 мм.",
];

const Article1 = () => {
  const { language } = useContext(LocalizationApi);
  return (
    <div id="scroll1" className="pt-10">
      <h1 className="text-4xl font-semibold">
        {language === "uz"
          ? "Uyali polikarbonat nima?"
          : "Что такое сотовый поликарбонат?"}
      </h1>
      <div className="flex py-10 justify-between flex-wrap">
        <TextContainer className="flex flex-col gap-y-5 text-lg w-[52%]">
          {language === "uz"
            ? paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            : paragraphsRU.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
        </TextContainer>
        <IMG src={img2} alt="Description of the image" width="45%" />
      </div>

      <div>
        <h3 className="text-xl font-semibold pb-5 flex-wrap">
          {language === "uz"
            ? "Uning choyshablari quyidagi tuzilishda ishlab chiqariladi:"
            : "Его листы выпускаются следующей структуры:"}
        </h3>
        <div className="flex flex-col gap-y-5 flex-wrap">
          {[
            {
              src: H2,
              text: "2H - to'rtburchaklar hujayrali ikki qavatli.",
            },
            {
              src: X3,
              text: "3X - qo'shimcha eğimli qismlarga ega bo'lgan to'rtburchaklar hujayralar kombinatsiyasi bilan uch qatlamli tuzilma.",
            },
            {
              src: H3,
              text: "3H - 6, 8, 10 mm qalinlikda ishlab chiqarilgan to'rtburchaklar chuqurchalar tuzilishi bilan uch qatlamli choyshablar.",
            },
            {
              src: W5,
              text: "5W - to'rtburchaklar chuqurchalar tuzilishiga ega besh qatlamli choyshablar, odatda qalinligi 16 - 20 mm.",
            },
            {
              src: X5,
              text: "5X - qalinligi 25 mm bo'lgan tekis va yeğimli qovurg'alardan iborat besh qatlamli choyshablar.",
            },
          ].map(({ src, text }, index) => (
            <Sheets key={index} className="flex items-center gap-x-5 flex-wrap">
              <img src={src} alt="Sheet" />
              <p className="text-lg">
                {language === "uz" ? text : textRu[index]}
              </p>
            </Sheets>
          ))}
        </div>
        <h3 className="text-xl font-semibold pt-12 pb-5">
          {language === "uz"
            ? "Uyali polikarbonat plitalarining chiziqli o'lchamlari jadvalda keltirilgan:"
            : "Линейные размеры листов сотового поликарбоната приведены в таблице:"}
        </h3>
        <div className="flex items-center flex-wrap justify-between">
          <TABLE className="w-[70%]">
            <Image src={Table} />
          </TABLE>
          <P className="w-[28%] text-xl leading-[35px]">
            {language === "uz"
              ? "Buyurtmachi bilan kelishilgan holda, texnik shartlarda ko'rsatilganidan tashqari parametrlarga ega panellarni ishlab chiqarishga ruxsat beriladi. Qattiqlashtiruvchilarning qalinligi ishlab chiqaruvchi tomonidan belgilanadi, bu qiymat uchun ruxsat etilgan maksimal og'ish belgilanmagan."
              : "По согласованию с заказчиком допускается изготовление панелей с параметрами, отличными от указанных в технических условиях. Толщина ребер жесткости определяется изготовителем, предельно допустимое отклонение на эту величину не указывается."}
          </P>
        </div>
      </div>
    </div>
  );
};

export default Article1;

const IMG = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const TextContainer = styled.p`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

const P = styled.p`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    font-size: 18px;
    line-height: 25px;
  }
`;

const Sheets = styled.div`
  @media only screen and (max-width: 1000px) {
    row-gap: 20px;
  }
`;

const TABLE = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;
