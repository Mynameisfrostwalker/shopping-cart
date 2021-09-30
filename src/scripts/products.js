import uniqid from "uniqid";
import redShirt from "../assets/redShirt.jpeg";
import orangeShirt from "../assets/orangeShirt.jpeg";
import yellowShirt from "../assets/yellowShirt.jpeg";
import greenShirt from "../assets/greenShirt.jpeg";
import blueShirt from "../assets/blueShirt.jpeg";
import indigoShirt from "../assets/indigoShirt.jpeg";
import violetShirt from "../assets/violetShirt.jpeg";
import greyShirt from "../assets/greyShirt.jpeg";
import whiteShirt from "../assets/whiteShirt.jpeg";
import blackShirt from "../assets/blackShirt.webp";
import rainbowShirt from "../assets/rainbowShirt.jpeg";
import bgwShirt from "../assets/bgwShirt.jpeg";

/**
 * @module products
 */

/**
 * @type {Array<Object>}
 */
const shirts = [
  {
    name: "Red Shirt",
    price: 500,
    img: redShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "Orange Shirt",
    price: 750,
    img: orangeShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "Yellow Shirt",
    price: 219,
    img: yellowShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "Green Shirt",
    price: 999,
    img: greenShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "Blue Shirt",
    price: 823,
    img: blueShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "Indigo Shirt",
    price: 231,
    img: indigoShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "Violet Shirt",
    price: 234,
    img: violetShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "Grey Shirt",
    price: 756,
    img: greyShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "White Shirt",
    price: 903,
    img: whiteShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "Black Shirt",
    price: 721,
    img: blackShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "Rainbow Shirt",
    price: 444,
    img: rainbowShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
  {
    name: "Contrast Shirt",
    price: 137,
    img: bgwShirt,
    key: uniqid(),
    value: 0,
    added: false,
  },
];

export default shirts;
