import React from "react";
import Marquee from "react-fast-marquee";

const InfiniteSlider = () => {
  const row1 = [
    { text: "The only way to do great work is to love what you do." },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
    },
    { text: "Don't watch the clock; do what it does. Keep going." },
    {
      text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
    }
  ];
  const row2 = [
    { text: "Quick brown fox jumps over the lazy dog." },
    { text: "To be or not to be, that is the question." },
    { text: "A journey of a thousand miles begins with a single step." },
    { text: "All that glitters is not gold." },
    { text: "The early bird catches the worm." },
  ];
  const row3 = [
    {
      text: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    },
    { text: "A group of flamingos is called a 'flamboyance'." },
    { text: "Octopuses have three hearts." },
    { text: "Bananas are berries, but strawberries aren't." },
    {
      text: "There are more stars in the universe than grains of sand on all the Earth's beaches.",
    },
  ];

  return (
    <div className="my-10">
      <Marquee pauseOnHover>
        {row1.map((item) => {
          return (
            <TextComponent key={item.text} text={item.text}></TextComponent>
          );
        })}
        <TextComponent></TextComponent>
      </Marquee>
      <Marquee direction="right" pauseOnHover>
        {row2.map((item) => {
          return (
            <TextComponent key={item.text} text={item.text}></TextComponent>
          );
        })}
      </Marquee>
      <Marquee  pauseOnHover>
        {row3.map((item) => {
          return (
            <TextComponent key={item.text} text={item.text}></TextComponent>
          );
        })}
      </Marquee>
    </div>
  );
};
const TextComponent = ({ text }) => {
  return (
    <div className="py-5 px-10 rounded-lg text-white bg-[#171616] mr-5 mb-5 hover:bg-white hover:text-black  transition">
      <p>{text}</p>
    </div>
  );
};
export default InfiniteSlider;
