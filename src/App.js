import { useContext, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext.js";
import { Formik, ErrorMessage } from "formik";
import { LoginSchema } from "./constants/yupSchema.js";

import Block1 from "./components/block1.js";
import Block2 from "./components/block2.js";
import KayitLine from "./components/kayitLine.js";
import PatikaLogo from "./components/patikaLogo.js";
import DarkButton from "./components/darkButton.js";
import WhiteButton from "./components/whiteButton.js";

import "./App.css";

function App() {
  const { darkTheme, colorSVG, buttonTheme } = useContext(ThemeContext);
  const [isActive,setIsActive] = useState(true);

  return (
    <div>
      <div id="left" className={darkTheme === "dark" ? "dark-content" : ""}>
        <div id="logoPatika">
          <PatikaLogo />
        </div>
        <div id="headerPatika">YAZILIM PATİKALARI</div>
        <div id="contentPatika">
          Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir
          eğitim modelidir. Ekibini büyütmek isteyen şirketler bir bootcamp'lere
          sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe girmeye
          hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8
          haftalık ücretsiz ve yoğun eğitime kabul alırlar. Bootcamp'lerde
          başarılı olan öğrenciler sponsor şirkette ya da sektörde başka
          şirketlere işe yerleşirler.
        </div>
        <div id="blocksPatika">
          <div id="block1">
            <Block1 color={colorSVG} />
          </div>
          <div id="block2">
            <Block2 color={colorSVG} />
          </div>
        </div>
      </div>
      <div id="right" className={darkTheme === "dark" ? "dark-content" : ""}>
        <div id="darkModeButton" onClick={buttonTheme}>
          {darkTheme === "dark" ? <WhiteButton /> : <DarkButton />}
        </div>
        <div
          id="rightColumn"
          className={darkTheme === "dark" ? "dark-content" : ""}
        >
          <div id="headerForm">Kayıt</div>
          <div>
            <KayitLine color={colorSVG} />
          </div>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              username: "",
              pass: "",
              repass: "",
              agree: false,
            }}
            onSubmit={(auth) => {
              console.log(auth);
              setIsActive(false);
              setTimeout(()=> {
                setIsActive(true);
                alert("Giriş yapıldı");
              },3000);

              
            }}
            validationSchema={LoginSchema}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form>
                <div id="nameForm">
                  <span id="firstNameBlock">
                    <span className="textForm">İSİM</span>
                    <span>
                      <input
                        type="text"
                        id="firstName"
                        name="firstname"
                        placeholder="İsmini gir"
                        value={values.firstname}
                        onChange={handleChange}
                      />
                    </span>
                  </span>
                  <span id="middleNameBlock" />
                  <span id="lastNameBlock">
                    <span className="textForm">SOYİSİM</span>
                    <span>
                      <input
                        type="text"
                        id="lastName"
                        name="lastname"
                        placeholder="İsmini gir"
                        value={values.lastname}
                        onChange={handleChange}
                      />
                    </span>
                  </span>
                </div>
                <div className="warning" id="nameFormWarning"></div>
                <div id="mailForm">
                  <span className="textForm">
                    E-POSTA<sup> *</sup>
                  </span>
                  <span>
                    <input
                      type="email"
                      id="emailAddress"
                      name="email"
                      placeholder="E-posta adresini gir"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <div className="warning" id="mailFormWarning">
                <ErrorMessage name="email"/>
                </div>
                <div id="userForm">
                  <span className="textForm">
                    KULLANICI ADI<sup> *</sup>
                  </span>
                  <span>
                    <input
                      type="text"
                      id="userName"
                      name="username"
                      placeholder="Kullanıcı adını gir"
                      value={values.username}
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <div className="warning" id="userFormWarning">
                  <ErrorMessage name="username"/>
                </div>
                <div id="passForm">
                  <span className="textForm">
                    ŞİFRE<sup> *</sup>
                  </span>
                  <span>
                    <input
                      type="password"
                      id="password"
                      name="pass"
                      placeholder="Şifreni gir"
                      value={values.pass}
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <div className="warning" id="passFormWarning">
                <ErrorMessage name="pass"/>
                </div>
                <div id="repassForm">
                  <span className="textForm">
                    ŞİFRENİ TEKRAR GİR<sup> *</sup>
                  </span>
                  <span>
                    <input
                      type="password"
                      id="repassword"
                      name="repass"
                      placeholder="Şifreni doğrula"
                      value={values.repass}
                      onChange={handleChange}
                    />
                  </span>
                </div>
                <div className="warning" id="repassFormWarning">
                <ErrorMessage name="repass"/>
                </div>
                <label id="agreeForm">
                  <label for="agreeButton">Sözleşmeyi kabul ediyorum</label>
                  <input
                    type="checkbox"
                    name="agree"
                    value={values.agree}
                    onChange={handleChange}
                  />
                  <div
                    className={
                      "buttonInput" +
                      (darkTheme === "dark" ? " dark-content" : "")
                    }
                  ></div>
                </label>
                <div className="warning" id="agreeFormWarning"><ErrorMessage name="agree"/></div>
                <input
                  type="submit"
                  className={
                    "button" + (darkTheme === "dark" ? " dark-content" : "")
                  }
                  value={isActive ? "Kayıt Ol" : "Bekleniyor..."}
                  disabled={!isActive}
                  onClick={handleSubmit}
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default App;
