import React, { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import designer from "../../../LexanTovar/dizayner.png";

const Part5 = () => {
  const { language } = useContext(LocalizationApi);

  const text = {
    uz: [
      "Zavod etarli darajada katta buyurtma bo'lsa, har qanday rang, soya va har qanday yorug'lik o'tkazuvchanligi bilan choyshablarni ishlab chiqarishi mumkin.",
      "Keng miqyosli loyihalar uchun monolit polikarbonat yoki akril plitalari 2050 mm kengligida va uzunligi 12 m gacha bo'lgan buyurtma asosida tayyorlanishi mumkin.Biroq, materialning termal kengayish xususiyatlarini hisobga olgan holda, Royal Plast kompaniyasi tavsiya qiladi. uzunligi 7 m dan oshmaydigan choyshablardan foydalanish.",
      "To'liq shaffof 'Polygal', 'Monogal' yoki 'Plazkril' choyshablari juda chiroyli va oqlangan ko'rinadi, bu sizga butunlay shaffof tomlar va oynalarni yaratishga imkon beradi. Ammo bu xususiyatlarning barchasi, ayniqsa, issiq iqlim sharoitida noqulaylik tug'dirishi mumkin.",
    ],
    ru: [
      "Завод может изготовить лист любого цвета, оттенка и с любым коэффициентом светопропускания при наличии достаточно большого заказа.",
      "Для масштабных проектов листы монолитного поликарбоната или акрила могут быть изготовлены на заказ шириной 2050 мм и длиной до 12 м. Однако, учитывая свойства теплового расширения материала, компания «Royal Plast» рекомендует к использованию листы не более 7 м. в длину.",
      "Совершенно прозрачные листы 'Полигаль', 'Моногаль' или 'Плазкрил' смотрятся очень красиво и элегантно, позволяя создать абсолютно прозрачные кровли и остекление. Но все эти свойства могут доставить и неудобства, особенно в жарком климате.",
    ],
  };

  const texts = language === "uz" ? text.uz : text.ru;

  return (
    <div>
      <h1 className="text-[40px] mt-5 mb-8 text-center font-semibold underline decoration-[#77b94c] underline-offset-[14px] max-[500px]:text-3xl max-[500px]:font-semibold max-[500px]:leading-[50px] ">
        {language === "uz"
          ? "Dizaynerlar uchun umumiy tavsiyalar"
          : "Общие рекомендации проектировщикам"}
      </h1>
      <div className="flex justify-between items-center md:flex-wrap sm:flex-wrap max-[640px]:flex-wrap pt-5">
        <img
          className="lg:w-[50%] md:w-[100%] md:pb-7 sm:w-[100%] sm:pb-7 max-[640px]:w-[100%] max-[640px]:pb-7"
          src={designer}
          alt=""
        />
        <ul className="lg:w-[48%] md:w-[100%] sm:w-[100%] flex flex-col text-base gap-y-7">
          {texts.map((paragraph, index) => (
            <li key={index}>{paragraph}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Part5;
