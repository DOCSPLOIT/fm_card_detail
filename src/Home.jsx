import "./App.css";
import Logo from "./assets/images/card-logo.svg";
import { useFormik } from "formik";
import { Form } from "./components/Form";
import { number, object, string } from "yup";
import { useContext } from "react";
import { NavigationContext, Navigator, Route } from "./components/Navigator";
import ThankYou from "./ThankYou";
function Home() {
  const ctx = useContext(NavigationContext);

  const formik = useFormik({
    initialValues: {
      number: "",
      name: "",
      yy: "",
      mm: "",
      cvc: "",
    },
    validationSchema: object().shape({
      name: string().required("Name is required"),
      number: number()
        .typeError("Wrong format, number only")
        .required("Card Number is required"),
      yy: number()
        .typeError("Wrong format, number only")
        .required("Can't be blank"),
      mm: number()
        .typeError("Wrong format, number only")
        .required("Can't be blank"),
      cvc: number()
        .typeError("Wrong format, number only")
        .required("Can't be blank"),
    }),
    onSubmit() {
      ctx.navigate("/thankyou");
    },
  });
  return (
    <div className="antialiased w-screen md:min-h-screen relative   md:bg-quarter flex flex-col md:flex-row  md:bg-[url('./assets/images/bg-main-desktop.png')] bg-[url('./assets/images/bg-main-mobile.png')]  bg-no-repeat">
      <div className=" w-1/2">
        <div className="absolute z-10 shadow-2xl top-[115px] w-[280px] bg-contain h-[154px] left-[15px] md:relative md:top-[20px]   md:h-[245px]  md:w-[447px] md:mt-[11.5rem] md:ml-[22.5%] bg-[url('./assets/images/bg-card-front.png')]  rounded-xl">
          <img
            src={Logo}
            alt="card_logo"
            className=" h-8 md:h-auto m-4 md:m-8 md:pt-8"
          />
          <p className="text-white text-[18px] md:text-3xl mt-8  md:mt-16 text-center tracking-wider">
            {formik.values.number
              ? formik.values.number.match(/.{1,4}/g).join("  ")
              : "0000000000000000".match(/.{1,4}/g).join("  ")}
          </p>
          <div className="flex justify-between mt-3 md:mt-5 px-8">
            <p className="uppercase text-xs md:text-base tracking-wider text-white">
              {formik.values.name.length > 0 ? formik.values.name : "Someone"}
            </p>
            <p className="uppercase text-xs text-white">
              {formik.values.mm.length > 0 ? formik.values.mm : "00"}/
              {formik.values.yy.length > 0 ? formik.values.yy : "00"}
            </p>
          </div>
        </div>
        <div className=" absolute top-[30px] w-[280px] shadow-2xl bg-contain h-[152px] right-[15px]  md:h-[245px] md:relative  md:w-[447px] md:mt-10 md:ml-[36%] bg-[url('./assets/images/bg-card-back.png')]  rounded-xl">
          <p className="text-white pt-[4.05rem] mx-7  md:mx-11 rounded md:pt-[6.6rem] py-2 px-3 text-[12px] text-right tracking-wider">
            {formik.values.cvc.length > 0 ? formik.values.cvc : "000"}
          </p>
        </div>
      </div>

      <Route href={"/"}>
        <Form formik={formik} />
      </Route>
      <Route href={"/thankyou"}>
        <ThankYou />
      </Route>
    </div>
  );
}

export default Home;
