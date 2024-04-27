import React, { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import choose from "../../../LexanTovar/Gazebos_tanlash.jpeg";

const Part2 = () => {
  const { language } = useContext(LocalizationApi);

  return (
    <div className="flex justify-between lg:flex-row md:flex-col-reverse sm:flex-col-reverse max-[640px]:flex-col-reverse flex-wrap">
      <img
        className="lg:w-[50%] lg:h-[460px] md:w-[100%] md:h-[600px] md:pt-5 sm:pt-5 max-[640px]:pt-5 sm:h-[450px] max-[600px]:h-[400px] max-[500px]:h-[350px] max-[430px]:h-[300px]"
        src={choose}
        alt=""
      />
      <div className="lg:w-[48%] md:w-[100%]">
        <h1 className="text-4xl mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px] lg:leading-[55px] max-[500px]:text-3xl max-[500px]:font-semibold max-[1024px]:leading-[52px] max-[500px]:leading-[50px]">
          {language === "uz"
            ? "Gazebos uchun polikarbonatni qanday tanlash mumkin?"
            : "Как выбрать поликарбонат для беседки?"}
        </h1>
        <ul className="flex flex-col gap-y-5">
          <li>
            {language === "uz"
              ? "Gazebos uchun polimer plitalarning optimal qalinligi 4, 6, 8, 10 mm. Qanchalik qalinroq bo'lsa, material kuchliroq bo'ladi. Shaffoflik darajasi sizning xohishingizga bog'liq bo'ladi. Agar siz ko'rinishingizni bloklashni xohlamasangiz, shaffof polikarbonatni tanlashingiz yoki yengil soyalarni tanlashingiz mumkin. Agar siz binoning devorlarini begona ko'zlardan himoya qilishni afzal ko'rsangiz, matli navlar va quyuq ranglar siz uchun."
              : "Оптимальная толщина полимерных листов для беседки — 4, 6, 8, 10 мм. Чем толще, тем материал прочнее. Уровень прозрачности будет зависеть от ваших пожеланий. Если вы не хотите закрывать обзор, можно остановиться на прозрачном поликарбонате или выбрать светлые оттенки. Если предпочитаете, чтобы стены постройки защищали от посторонних глаз, для вас матовые разновидности и темные цвета."}
          </li>
          <li>
            {language === "uz"
              ? "Kompaniyamiz quyidagi qalinliklarni taklif qiladi: 3,7 mm dan 25 mm gacha chuqurchalar choyshablari , 1,5 mm dan 15 mm gacha monolit plitalar. Polikarbonat panellarining uchlari lenta bilan himoyalangan."
              : "Наша компания предлагает следующие толщины: сотовые листы от 3,7мм до 25мм, монолитные от 1,5мм до 15мм. Торцы поликарбонатных панелей защищены скотчем."}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Part2;
