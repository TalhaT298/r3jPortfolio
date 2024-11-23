/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
// import img1 from "../../../assets/react.svg";
// import img2 from "../../../assets/vuejs.svg";
// import img3 from "../../../assets/python.svg";
// import img4 from "../../../assets/node-js.svg";
// import img5 from "../../../assets/mongodb.svg";
// import img6 from "../../../assets/javascript.svg";
// import img7 from "../../../assets/java.svg";
// import img8 from "../../../assets/go.svg";
// import img9 from "../../../assets/flutter.svg";
// import img10 from "../../../assets/redux.svg";
// import img11 from "../../../assets/typescript.svg";
// import img12 from "../../../assets/tailwind-css.svg";
// import img13 from "../../../assets/ruby.svg";
// import img14 from "../../../assets/npm.svg";
// import img15 from "../../../assets/firebase.svg";
// import img16 from "../../../assets/github.svg";
// import img17 from "../../../assets/aws.svg";
// import img18 from "../../../assets/laravel.svg";

const Technology = () => {
  return (
    <div className="py-8">
      <div className="mx-auto md:w-8/12 my-4 flex justify-center items-center text-center">
        {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
        {/* <h3 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif"> */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-white-600 uppercase pt-4 font-bold font-serif">
          Technologies utilized
        </h3>
      </div>
      <Marquee className="pt-16 text-white" direction="right" speed={50}>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">HTML5</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">CSS3</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Bootstrap</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Tailwind css</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">React</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Javascript</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Nodejs</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Nextjs</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">DaisyUI</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Ant Design</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">React Router DOM</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">MongoDB</p>
      </Marquee>
      <Marquee className="my-5 text-white" direction="left" speed={50}>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">C</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Java</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">C++</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Python</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">PHP</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Postman</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Threejs</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Firebase</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">API</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Laravel</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">AWS</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Typescript</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">NPM</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">MongoDB</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Mongoose</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Github</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">OpenSource</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Redux</p>
      </Marquee>
    </div>
  );
};

export default Technology;