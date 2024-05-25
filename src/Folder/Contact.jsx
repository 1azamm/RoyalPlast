import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LocalizationApi } from "../Context/Language";
import Button from "../utils/Button";
import { message } from "antd";
import styled from "styled-components";

import tel from "../assets/network/bxs_phone-call.png";
import mail from "../assets/network/ic_sharp-email.png";
import location from "../assets/network/carbon_location-filled.png";

import frame from "../assets/imgs/Frame 1.png";

import tg from "../assets/network/tg2.png";
import insta from "../assets/network/ins.png";
import facebook from "../assets/network/facebuk.png";

const Contact = () => {
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
    email: "",
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

    const message = `Name: ${formData.name}, Email: ${formData.email}, Tel: ${formData.tel},   City: ${formData.city},  Question: ${formData.question}`;

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message}`,
      {
        method: "GET",
      }
    ).then(
      (response) => {
        setFormData({
          name: "",
          email: "",
          tel: "",
          city: "",
          question: "",
        });
        handleSuccess();
      },
      (error) => {
        alert("Message not sent!");
      }
    );
  };

  const net = [
    {
      img: tel,
      text: "+998 95 000 00 44",
      url: "tel:+998950000044",
    },
    {
      img: mail,
      text: "royalplast1977@gmail.com",
      url: "mailto:royalplast1977@gmail.com",
    },
    {
      img: location,
      text: "Toshkent shahar, Olmazor tumani, Qorasaroy ko'chasi, 326",
      url: "https://yandex.uz/maps/-/CDFufN~P _blank",
    },
  ];

  const net2 = [
    {
      img: tg,
      url: "https://t.me/leksan_nomer1",
    },
    {
      img: insta,
      url: "https://instagram.com/rossiyskiy_leksan.uz?utm_medium=copy_link",
    },
    { img: facebook, url: "#facebook" },
  ];
  return (
    <Container className="pt-[85px] px-20">
      {contextHolder}
      <p className="py-3 text-sm">
        <Link to="/">
          <span className=" hover:text-blue-600 cursor-pointer">
            {language === "uz" ? "Bosh sahifa" : "Главный"}
          </span>
        </Link>
        <span className="text-gray-400"> / </span>
        <span className="text-blue-600">
          {language === "uz" ? "Aloqa" : "Связаться"}
        </span>
      </p>
      <h1 className="text-center text-3xl font-semibold mt-7">
        {language === "uz" ? "Biz bilan bog'lanish" : "Связаться с нами"}
      </h1>
      <p className="text-center text-gray-800 font-light mt-2">
        {language === "uz"
          ? "Savol yoki izohlar bormi? Xabaringizni yozib qoldiring!"
          : "Есть вопросы или комментарии? Вы можете записать сообщение!"}
      </p>

      {/* main */}

      <Main className="flex justify-between mt-14">
        <Left
          style={{
            backgroundImage: `url(${frame})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "45%",
            height: "60vh",
          }}
          className="text-black w-[45%] p-5 "
        >
          <h1 className="font-semibold text-2xl">
            {language === "uz"
              ? "Bog'lanish uchun ma'lumot"
              : "Контактная информация"}
          </h1>
          <P className="text-[#2f2f2f] mt-2 ">
            {language === "uz"
              ? "  Qiziqtirgan savolingiz bo'lsa qo'ng'iroq qiling yoki xabar jo'nating!"
              : "Если у вас есть вопросы, позвоните или отправьте сообщение!"}
          </P>
          <div className="pt-16 flex flex-col gap-y-7">
            {net.map((network, i) => (
              <div className="flex gap-x-3 items-center " key={i}>
                <NetImg src={network.img} width="30px" />
                <a href={network.url}>
                  <NetText className="hover:text-blue-600">
                    {network.text}
                  </NetText>
                </a>
              </div>
            ))}
            <Net className="flex gap-x-5 mt-32">
              {net2.map((network2, index) => (
                <a href={network2.url} key={index}>
                  <Net2Img
                    src={network2.img}
                    width="40px"
                    className="bg-white rounded-[30%] p-1 cursor-pointer hover:bg-slate-100"
                  />
                </a>
              ))}
            </Net>
          </div>
        </Left>

        <Right className="right flex flex-col justify-center w-[52%]">
          <form className="flex justify-between flex-wrap gap-y-10">
            <Inp
              name="name"
              type="text"
              value={formData.name}
              onChange={Change}
              placeholder="Ism"
              className="border-b-[1.5px] border-black focus:border-blue-600 placeholder:text-sm p-1 text-lg outline-none w-80"
            />
            <Inp
              name="city"
              type="text"
              placeholder="Shahar"
              value={formData.city}
              onChange={Change}
              className="border-b-[1.5px] border-black focus:border-blue-600 placeholder:text-sm p-1 text-lg outline-none w-80 "
            />
            <Inp
              name="email"
              type="text"
              value={formData.email}
              onChange={Change}
              placeholder="Email"
              className="border-b-[1.5px] border-black focus:border-blue-600 placeholder:text-sm p-1 text-lg outline-none w-80"
            />
            <Inp
              name="tel"
              type="text"
              placeholder="Nomer"
              value={formData.tel}
              onChange={Change}
              className="border-b-[1.5px] border-black focus:border-blue-600 placeholder:text-sm p-1 text-lg outline-none w-80 "
            />
            <textarea
              placeholder="Xabar"
              name="question"
              onChange={Change}
              value={formData.question}
              rows="5"
              className="border-b-[1.5px] border-black focus:border-blue-600 outline-none w-[100%]"
            ></textarea>
          </form>
          <Btn className="flex justify-end items-end mt-24">
            <Button
              onClick={Submit}
              text={language === "uz" ? "Yuborish" : "Отправка"}
              position="bg-transparent rounded-1 hover:text-white "
            />
          </Btn>
        </Right>
      </Main>

      <div className="flex justify-center mt-10">
        <Iframe
          src="https://yandex.uz/map-widget/v1/?ll=69.241504%2C41.363500&mode=search&sll=69.241611%2C41.363056&text=41.363056%2C69.241611&utm_source=share&z=16"
          width="90%"
          height="500"
          frameborder="1"
          className="rounded-xl"
          allowfullscreen="true"
          style={{ position: "relative" }}
        ></Iframe>
      </div>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  @media only screen and (max-width: 1200px) {
    padding: 80px 40px 0 40px;
  }
  @media only screen and (max-width: 900px) {
    padding: 80px 20px 0 20px;
  }
  @media only screen and (max-width: 430px) {
    padding: 80px 10px 0 10px;
  }
`;

const Main = styled.div`
  @media only screen and (max-width: 1030px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;

const Left = styled.div`
  @media only screen and (max-width: 1280px) {
    width: 55% !important;
  }
  @media only screen and (max-width: 1150px) {
    background-size: contain !important;
    height: 55vh !important;
  }
  @media only screen and (max-width: 1030px) {
    width: 100% !important;
  }
  @media only screen and (max-width: 600px) {
    background-size: cover !important;
    background-position: right !important;
  }
`;

const Right = styled.div`
  @media only screen and (max-width: 1280px) {
    width: 42% !important;
    @media only screen and (max-width: 1030px) {
      width: 100% !important;
    }
  }
`;

const Inp = styled.input`
  @media only screen and (max-width: 1280px) {
    width: 100%;
  }
  @media only screen and (max-width: 1030px) {
    width: 48% !important;
  }
`;

const Btn = styled.div`
  @media only screen and (max-width: 1030px) {
    margin-top: 60px !important;
  }
`;

const P = styled.p`
  @media only screen and (max-width: 552px) {
    font-size: 14px !important;
  }
`;

const Net = styled.div`
  @media only screen and (max-width: 1150px) {
    margin-top: 60px !important;
  }
  @media only screen and (max-width: 1030px) {
    margin-top: 90px !important;
  }
  @media only screen and (max-width: 530px) {
    margin-top: 70px !important;
  }
`;

const NetText = styled.div`
  @media only screen and (max-width: 500px) {
    font-size: 14px !important;
  }
`;
const NetImg = styled.img`
  @media only screen and (max-width: 500px) {
    width: 25px !important;
  }
`;
const Net2Img = styled.img`
  @media only screen and (max-width: 500px) {
    width: 35px !important;
  }
`;

const Iframe = styled.iframe`
  @media only screen and (max-width: 1030px) {
    height: 320px !important;
    width: 100% !important;
  }
`;
