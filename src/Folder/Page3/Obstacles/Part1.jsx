import { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import Devor from "../../../LexanTovar/devor.webp";

const Part1 = () => {
  const { language } = useContext(LocalizationApi);
  const paragraph = {
    uz: [
      "Chidamlilik, go'zallik, arzonlik - mahalliy hududni yoki er uchastkasini fextavonie qilish uchun polikarbonat tobora ko'proq talab qilinadigan fazilatlar.",
      "Tanlashda choyshabning qalinligiga alohida e'tibor berilishi kerak. Yozgi uylar uchun qalinligi 4-6-8 mm bo'lgan panellar ishlatiladi. Polikarbonat choyshablari qanchalik qalinroq bo'lsa, ular qanchalik kuchliroq bo'lsa, ular jismoniy yukga dosh bera oladilar.",
      "Kompaniyamiz quyidagi qatlam qalinligini taklif qiladi: 3,7 mm, 4 mm, 6 mm, 8 mm, 10 mm, 16 mm, 20 mm, 25 mm. Polikarbonat panellarining uchlari lenta bilan himoyalangan.",
    ],
    ru: [
      "Прочность, красота, доступность по цене — качества, за которые поликарбонат для ограждения придомовой территории или земельного участка становится все более востребованным.",
      "При выборе особое внимание необходимо обращать на толщину листов. Для дачных участков используются панели толщиной 4-6-8 мм. Чем толще поликарбонатные листы, тем они прочнее, тем большие физические нагрузки они смогут выдержать.",
      "Наша компания предлагает следующие толщины листов: 3,7мм, 4мм, 6мм, 8мм, 10мм, 16мм, 20мм, 25мм. Торцы поликарбонатных панелей защищены скотчем.",
    ],
  };

  const paragraph2 = {
    uz: [
      "To'siqlar uchun monolit va uyali polikarbonat mos keladi, garchi ikkinchi variant ko'proq ishlatiladi. U engilroq, shovqindan yaxshiroq himoya qiladi va arzonroq. Monolitik dizayn echimlari uchun javob beradi. Ushbu turdagi polimer shaffof, shisha kabi va juda bardoshli. Biroq, u og'irroq, bu ramkani o'rnatishda e'tiborga olinishi kerak.",
      "Soyani tanlayotganda, qo'llab-quvvatlash materialiga va atrofdagi binolarning ranglariga e'tibor bering. Shaffof va sutli neytral hisoblanadi. Kumush va bronza metall ramka bilan yaxshi ketadi. Saytda suzish havzasi mavjud bo'lsa, suvning chuqurligini ta'kidlash uchun ko'k va ochiq ko'k soyalar mos keladi. Saytda ko'katlar ko'p bo'lsa, bir xil rangdagi panjara o'rnatish oqilona. Qizil panellar, agar ular tomning yoki boshqa tuzilmalarning rangini aks ettirsa, mos keladi.",
    ],
    ru: [
      "Для заборов подойдет монолитный и сотовый поликарбонат, хотя чаще используется второй вариант. Он легче, лучше защищает от шума и выгоднее по цене. Монолитный подойдет для дизайнерских решений. Полимер такого типа прозрачный, как стекло и очень прочный. Однако он тяжелее, что необходимо учитывать при установке каркаса.",
      "При выборе оттенка обращайте внимание на материал опоры и цвета построек вокруг. Нейтральными считаются прозрачный и молочный. Серебро и бронза хорошо сочетаются с металлическим каркасом. Если на территории есть бассейн, будут уместны синие и голубые оттенки, которые подчеркнут глубину воды. Если на участке много зелени, разумно установить забор такого же цвета. Красные панели будут уместны, если они перекликаются с цветом кровли или другими сооружениями.",
    ],
  };

  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="lg:w-[48%] md:w-[100%] md:pb-5 sm:pb-5 max-[640px]:pb-5">
          <h1 className="text-4xl mt-5 mb-8 font-medium underline decoration-[#77b94c] underline-offset-[14px] max-[500px]:text-3xl max-[500px]:font-semibold max-[542px]:leading-[52px] max-[473px]:leading-[52px]">
            {language === "uz"
              ? "Devor uchun polikarbonat"
              : "Поликарбонат для Беседки"}
          </h1>
          <p className="font-semibold pb-5">
            {language === "uz"
              ? "Royal Plast kompaniyasi standart va yuqori sifatli, turli rang va o'lchamdagi polikarbonatni taklif etadi. Mahsulotlar zamonaviy uskunalar yordamida ishlab chiqariladi va xalqaro sifat standartlariga javob beradi, bu sertifikatlar bilan tasdiqlangan."
              : "Компания “Роял Пласт” предлагает поликарбонат стандартного и премиум-качества, различных цветов и размеров. Продукция производится на современном оборудовании, соответствует мировым стандартам качества, что подтверждают сертификаты."}
          </p>
          <div className="flex flex-col gap-y-5">
            {paragraph[language].map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
        <img
          className="lg:w-[50%] lg:h-[430px] lg:pb-0 md:w-[100%] md:h-[620px] md:pb-10 sm:h-[500px] sm:w-[100%] sm:pb-10 max-[640px]:pb-10 max-[640px]:w-[100%] max-[500px]:h-[350px] "
          src={Devor}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-y-5 relative -top-16">
        {paragraph2[language].map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </>
  );
};

export default Part1;
