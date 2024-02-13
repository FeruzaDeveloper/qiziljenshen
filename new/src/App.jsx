import { useState } from "react";
import Logo from "./assets/img/Logo.png";
import img4 from "./assets/img/img4.png";
import group from "./assets/img/group.png";
import img5 from "./assets/img/img5.png";
import img6 from "./assets/img/img6.png";
import img7 from "./assets/img/img7.png";
import img8 from "./assets/img/img8.png";
import img9 from "./assets/img/img9.png";
import img11 from "./assets/img/img11.png";
import img12 from "./assets/img/img12.png";
import img14 from "./assets/img/img14.png";

import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="general_div">
      <div className="container">
        <section className="header">
          <div className="headline">
            <img className="logo" src={Logo} alt="" />
            <ul>
              <li>KOMPANIYA HAQIDA</li>
              <li>FAKTLAR</li>
              <li>MAHSULOTLAR</li>
              <li>UZ</li>
            </ul>
            <button className="btn1">Buyurtma bering</button>
          </div>
          <div className="header2">
            <h2>100% tabiiy</h2>
            <h1>
              Koreya qizil jenshen <br />
              ichimligi
            </h1>
            <button className="btn2">Buyurtma berish</button>
          </div>
        </section>
        <section className="main"></section>
      </div>
      <div className="cards">
        <div className="card">
          <img className="group" src={group} alt="" />
          <div className="card2">
            <h3>Buyurtma berish</h3>
            <p className="p1">
              Formani to'ldiring, mutaxassislardan bepul <br /> konsultatsiya
              oling va chegirmaga ega bo'ling
            </p>
            <div className="inputs">
              <input type="text" placeholder="Ismingiz" />
              <input type="text" placeholder="+998" />
              <button className="btn3">Buyurtma bering</button>
            </div>
          </div>
          <img className="img4" src={img4} alt="" />
        </div>
      </div>
      <section className="main2">
        <div className="rasmlar">
          <img src={img5} alt="" />
          <img src={img5} alt="" />
        </div>
      </section>
      <section className="main3">
        <div className="div1">
          <p className="main3_p">
            Qizil jenshen bilan oddiy jenshenni farqi,yetishtirilishi. <br />
            Jenshen mahsulotini ekishdan oldin ekin maydoni 2 <br /> yil
            og'itlar bilan sugorilib tayyorlanadi. 3-yili esa yerga <br />
            jenshen 2 xil usulda ekiladi,1-jenshen niholini donalab <br />{" "}
            ekish(koreada asosan shu usuldan foydalaniladi),2- <br /> urugni
            sepish orqali. Yerga jenshen ekilgandan song, 1 <br /> ~ 8 yil
            davomida jenshen turli og'itlar bilan sugorilib <br /> katta
            qilinadi.(jenshen yerda qancha turganiga qarab <br /> oshancha
            yillik jenshen deb nomlanadi). Yerdan yangi <br /> uzilgan 1~8
            yillik ho'l jenshen(koreyschada insam인 <br />
            삼,susam수삼 deb nomlanadi)bu oddiy jenshen <br /> hisoblanadi(lekin
            buniham foydali hususiyatlari juda <br />
            kop. Giyohlar ichida qizil jenshendan song birinchi <br /> orinda
            turadi)
          </p>
          <img className="img6" src={img6} alt="" />
        </div>
        <div className="div2">
          <img className="img6" src={img7} alt="" />
          <p className="main3_p">
            Qizil jenshen bilan oddiy jenshenni farqi,yetishtirilishi. <br />
            Jenshen mahsulotini ekishdan oldin ekin maydoni 2 <br /> yil
            og'itlar bilan sugorilib tayyorlanadi. 3-yili esa yerga <br />
            jenshen 2 xil usulda ekiladi,1-jenshen niholini donalab <br />
            ekish(koreada asosan shu usuldan foydalaniladi),2- <br /> urugni
            sepish orqali. Yerga jenshen ekilgandan song, 1 <br /> ~ 8 yil
            davomida jenshen turli og'itlar bilan sugorilib <br /> katta
            qilinadi.(jenshen yerda qancha turganiga qarab <br /> oshancha
            yillik jenshen deb nomlanadi). Yerdan yangi <br /> uzilgan 1~8
            yillik ho'l jenshen(koreyschada insam인 <br />
            삼,susam수삼 deb nomlanadi)bu oddiy jenshen <br /> hisoblanadi(lekin
            buniham foydali hususiyatlari juda <br />
            kop. Giyohlar ichida qizil jenshendan song birinchi <br /> orinda
            turadi)
          </p>
        </div>
        <div className="pas">
          <img className="img8" src={img8} alt="" />
          <div className="div4">
            <p className="div4_p">
              Qizil jenshen bilan jenshenni foydali hususiyatlaridagi farqi-{" "}
              <br />
              1-qizil jenshenni aks tasiri oddiy jenshenga qaraganda kamroq,{" "}
              <br />
              o'zi esa kuchliroq shuning uchun qizil jenshen 50 yoshdan <br />
              yuqoridagilar uchun judaham qulay va foydali. 2- qizil jenshen{" "}
              <br />
              hozirgi kundagi eng ko'p kasalliklar( davlenya, saxr,jinsiy <br />
              zaiflik)ni davolashdagi eng uchun eng kuchli giyohdir. Oddiy{" "}
              <br />
              jenshen esa asosan yoshlar(15-40 yosh) uchundir u judaham kuchli{" "}
              <br />
              issiqlik manbayidir. U insondagi dangasa immunitetlarni uyg'otadi{" "}
              <br />
              va odamni ishchanlik, harakatchanligini oshiradi, insondagi <br />
              sovuqlikni tanadan quvib chiqaradi va insonni kop bezovta <br />
              qiladigan shamollash,grip,tanadagi og'riqlar,prostata kabi <br />
              kasalliklarni yoq qiladi. Korealik jenshen mutahasislari va <br />
              doctorlarning hulosasiga ko'ra qizil jenshenni 50 yoshdan <br />
              yuqorilar uchun. Oddiy jenshenni esa 15 yoshdan-50 yoshgacha{" "}
              <br />
              bolgan insonlar uchun tafsiya qilish eng to'g'ri yo'ldir. <br />
            </p>
            <img className="img9" src={img9} alt="" />
          </div>
        </div>
      </section>
      <section className="main4">
        <div className="div5">
          <h4>Kompaniya haqida</h4>
          <p className="main5_p">
            "Soosum" kompaniyasi 2021-yildan boshlab uzoq sharq o’simligi <br />
            bo’lgan “Jenshen”ning ildizidan tayyorlangan ichimlikni ishlab{" "}
            <br />
            chiqarib, O’zbekiston bo’ylab yetkazib berishni yo’lga qo’ydi.{" "}
            <br />
            Kompaniyamiz Koreyaning "Chejun" ITD hamda Qizil Jenshen sharbati{" "}
            <br />
            MChJ korxonalari bilan hamkorlikda ishlaydi. "Sunmee" qizil jenshen{" "}
            <br />
            ildizi Janubiy Koreyada yetishtirilib O’zbekistonda qadoqlanadi.{" "}
            <br />
          </p>
          <img className="img11" src={img11} alt="" />
        </div>
        <img className="img12" src={img12} alt="" />
        <h1 className="main4_h1">
          Koreya qizil jensheni ichimligini kimlar <br /> iste'mol qiladilar?
        </h1>
      </section>

      <div className="rasm5">
        <div className="div6">
          <h2 className="rasm5_h2">
            Qizil jenshen ildizi ichimligidan <br />
            qanday foydalaniladi?
          </h2>
          <p className="rasm5_p">
            Qizil jenshen bilan oddiy jenshenni farqi,yetishtirilishi. Jenshen
            <br />
            mahsulotini ekishdan oldin ekin maydoni 2 yil og'itlar bilan <br />
            sugorilib tayyorlanadi. 3-yili esa yerga jenshen 2 xil usulda <br />
            ekiladi,1-jenshen niholini donalab ekish(koreada asosan shu usuldan
            <br />
            foydalaniladi),2- urugni sepish orqali. Yerga jenshen ekilgandan
            <br />
            song, 1 ~ 8 yil davomida jenshen turli og'itlar bilan sugorilib
            <br />
            katta qilinadi.(jenshen yerda qancha turganiga qarab oshancha yillik
            <br />
            jenshen deb nomlanadi). Yerdan yangi uzilgan 1~8 yillik ho'l <br />
            jenshen(koreyschada insam인삼,susam수삼 deb nomlanadi)...*rasm qo'y*
            <br />
            bu oddiy jenshen hisoblanadi(lekin buniham foydali hususiyatlari
            <br />
            juda kop. Giyohlar ichida qizil jenshendan song birinchi orind
            turadi). Yerdan yangi uzilgan 1~8 yillik jenshenni zavodda yuvib
            <br />
            tozalab ortiqcha shoxlarini qirqib, zavoddagi mahsus bosimli <br />
            quritish tehnologiyasida quritilgan jenshen( quritilgan jenshen
            <br />
            koreyschada 홍삼 xo'ngsam deb ataladi, quriganida qizil tusga kiradi
            <br />
            va foydali hususiyatlari yanada ortadi, shuning uchunham bunga
            <br />
            yetadigan giyoh yoq va dunyoda giyohlar qiroli hisoblanadi)* rasm
            <br />
            qo'y*qizil jenshen deb ataladi.
          </p>
        </div>
      </div>
      <section className="main6">
        <h1 className="main6_h1">
          Faktlar sonlarda
        </h1>
        <img className="img14" src={img14} alt="" />
        <img className="img14"src={img14} alt="" />
        <img className="img14" src={img14} alt="" />
      </section>
      <section className="footer">
        <div className="divs">
        <div className="footer1">
        <img className="logo1" src={Logo} alt="" />
        <p className="footer_p">Janubiy Koreyada tayyorlangan haqiqiy <br />
        6 yillik qizil jenshen ekstrakti</p>
        <div className="icons">
        <box-icon color="white" className="icon"  type='logo' name='telegram'></box-icon>
        <box-icon color="white" className="icon" type='logo' name='instagram'></box-icon>
        <box-icon color="white" className="icon" type='logo' name='facebook'></box-icon>
        <box-icon color="white" className="icon" name='youtube' type='logo' ></box-icon>
        </div>
        </div>
        <div className="footer2">
          <ul className="footer_ul">
            <li>Kompaniya haqida</li>
            <li>Faktlar</li>
            <li>Mahsulot</li>
          </ul>
        </div>
        <div className="footer3">
          <p className="footer_3">  
          Formani toʻldiring, mutaxascislardan bepul <br /> konsultatsiya oling va chegirmaga ega boling
          </p>
          <input className="footer_inp" type="text"  placeholder="Ismingiz"/>
          <input  className="footer_inp"type="text" placeholder="+998" />
          <button className="footer_btn">Buyurtma berish</button>
        </div>
        </div>
      </section>
    </div>     
  );
}

export default App;
