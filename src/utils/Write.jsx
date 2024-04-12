import React, { useState, useContext } from "react";
import Button from "./Button";
import { LocalizationApi } from "../Context/Language";
import { message, Space } from "antd";
import "../Styles/Write.css";

import x from "../assets/imgs/x.png";

const Write = ({ text, modal, setModal }) => {
  const { language } = useContext(LocalizationApi);

  const [messageApi, contextHolder] = message.useMessage();
  const handleSuccess = () => {
    messageApi.open({
      type: "success",
      content: "Xabar yuborildi",
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    city: "",
    question: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const Submit = (e) => {
    e.preventDefault();

    const bot = {
      TOKEN: "6135365349:AAHe4m6YpTTjre8aeWKUbsdzQMD8JuuiG2U",
      chatID: "-4159260230",
    };

    const message = `Name: ${formData.name},  Tel: ${formData.tel},  City: ${formData.city},  Question: ${formData.question}`;

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message}`,
      {
        method: "GET",
      }
    ).then(
      (response) => {
        setFormData({
          name: "",
          tel: "",
          city: "",
          question: "",
        });
        toggleModal();
        handleSuccess();
      },
      (error) => {
        alert("Message not sent!");
        console.log(error);
      }
    );
  };
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      {contextHolder}
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <button
              className="close-modal hover:bg-gray-200 rounded"
              onClick={toggleModal}
            >
              <img src={x} alt="" width="40px" />
            </button>
            <div className="flex mt-5 flex-col items-center justify-center pt-2">
              <h1 className="text-3xl font-medium">{text}</h1>
              <p className="pText text-2xl text-center w-[80%] font-light pt-1">
                {language === "uz"
                  ? " Kontaktlaringizni qoldiring va bizning mutaxassisimiz siz bilan bog'lanadi:"
                  : "Оставьте свои контакты и наш специалист свяжется с вами:"}
              </p>
              <form onSubmit={Submit} className="flex flex-col gap-y-2 mt-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={Change}
                  placeholder={
                    language === "uz" ? "Ismingizni kiriting" : "Имя"
                  }
                  className="message p-2 max-w-[100%] rounded outline-[#00aeff] outline-offset-[3px]"
                />
                <input
                  type="text"
                  name="tel"
                  value={formData.tel}
                  onChange={Change}
                  placeholder="+998 (__) ___ __ __"
                  className="message p-2 rounded outline-[#00aeff] outline-offset-[3px]"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={Change}
                  placeholder={
                    language === "uz" ? "Shaharni kiriting" : "Город"
                  }
                  className="message p-2 rounded outline-[#00aeff] outline-offset-[3px]"
                />
                <textarea
                  name="question"
                  value={formData.question}
                  onChange={Change}
                  placeholder={
                    language === "uz"
                      ? "Savolingiz bo'lsa shu yerga yozing"
                      : "Вопрос"
                  }
                  className="message h-[120px] p-2 rounded outline-[#00aeff] outline-offset-[3px]"
                  cols="40"
                  rows="7"
                ></textarea>
                <Button
                  text={language === "uz" ? "Yuborish" : "Отправка"}
                  position={
                    "bg-transparent rounded hover:text-white w-[100%] mt-3 mb-0 hover:shadow-[inset_2rem_2rem_2rem_8rem]"
                  }
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Write;
