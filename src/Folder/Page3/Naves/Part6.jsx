import React, { useContext } from "react";
import { LocalizationApi } from "../../../Context/Language";
import img1 from "../../../LexanTovar/orec1.png";
import img2 from "../../../LexanTovar/orec2.png";
import img3 from "../../../LexanTovar/orec3.png";
import img4 from "../../../LexanTovar/orec4.png";

const Part6 = () => {
  const { language } = useContext(LocalizationApi);
  const Content = [
    {
      img: img1,
      p:
        language === "uz"
          ? "Issiq yozli iqlim zonalarida oynalar hajmini minimal darajaga kamaytiring, bu esa uzatiladigan quyosh energiyasi miqdorini kamaytiradi;"
          : "В жарком летнем климате уменьшите размеры окон до минимума, что уменьшит количество передаваемой солнечной энергии;",
    },
    {
      img: img2,
      p:
        language === "uz"
          ? "Shaffof kanoplarni, tomlarni, verandalarni shunday loyihalashtiringki, ular kunduzgi soatlarning aksariyati shimolga yo'naltirilgan yoki umumiy bino soyasida joylashgan bo'lishi kerak;"
          : "Прозрачные навесы, крыши, патио проектируйте так, чтобы большую часть светового дня они были обращены на север или находились в тени общего здания;",
    },
    {
      img: img3,
      p:
        language === "uz"
          ? "20 dan 35% gacha yorug'lik o'tkazuvchanligi bilan kulrang, opal, bronza, kumush rangli choyshablardan foydalaning, bu xonaning isitilishini sezilarli darajada kamaytiradi, lekin optik shaffoflikni saqlaydi;"
          : "Используйте серые, опаловые, бронзовые, серебряные листы со светопроницаемостью от 20 до 35%, что позволит существенно снизить нагрев помещения, но сохранить оптическую прозрачность;",
    },
    {
      img: img4,
      p:
        language === "uz"
          ? "Minimal yorug'lik o'tkazuvchanligi bilan oq varaqdan foydalaning. Bunday varaqning optik shaffofligi yo'qligiga qaramasdan."
          : "Используйте белую простыню с минимальной светопроницаемостью. Несмотря на отсутствие оптической прозрачности такого листа.",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[30px] w-[60%] mt-5 mb-8 text-center font-medium">
        {language === "uz"
          ? "Shuningdek, agar arxitektura loyihasida oynaning shaffofligi muhim bo'lsa, biz quyidagilarni tavsiya qilamiz:"
          : "Поэтому если в архитектурном проекте важна прозрачность остекления мы рекомендуем:"}
      </h1>
      <div className="flex justify-between mt-10 gap-y-5">
        {Content.map((item, i) => (
          <div className="w-[20%] flex flex-col items-center gap-y-5" key={i}>
            <img src={item.img} width="110px" />
            <p className="text-sm text-center">{item.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Part6;
