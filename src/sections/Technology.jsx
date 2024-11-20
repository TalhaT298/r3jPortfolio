/* eslint-disable react/no-unescaped-entities */
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
        <h3 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
          We Serve All Tech Stacks
        </h3>
      </div>
      <Marquee className="pt-16" direction="right" speed={50}>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Brainstorming</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Concept Development</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Ideation</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Market Research</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Prototyping</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Wireframing</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Design Thinking</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">User Experience (UX) Design</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Product Design</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Proof of Concept</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Innovation</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Feasibility Study</p>
      </Marquee>
      <Marquee className="my-5" direction="left" speed={50}>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Project Planning</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Roadmap Development</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Minimum Viable Product (MVP)</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Agile Development</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Sprint Planning</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Iteration</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Testing and Validation</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">React</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Java</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">PHP</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">.Net</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Go</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Laravel</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">AWS</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">JavaScript</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Python</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Flutter</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Typescript</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">NPM</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">MongoDB</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Firebase</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Github</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">OpenSource</p>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Redux</p>
      </Marquee>
    </div>
  );
};

export default Technology;