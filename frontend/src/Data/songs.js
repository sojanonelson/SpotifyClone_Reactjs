import perfect from "./perfect.mp3"
import koode from "./koode.mp3"
import malabar from "./malabar.mp3"
import ghost from "./ghost.mp3"
import perfectImage from "./cover/perfect.jpeg"
import koodeImage from "./cover/koode.jpeg"
import malabarImage from "./cover/malabar.jpeg"
import ghostImage from "./cover/ghost.jpeg"

const songs = [
  {
    id: 1,
    name: "Perfect",
    artist: "Ed Sheeran",
    likes: 100,
    file: perfect,
    img: perfectImage,
  },
  {
    id: 2,
    name: "Koode Thullu",
    artist: "Fejo",
    likes: 150,
    file: koode,
    img: koodeImage,
  },
  {
    id: 3,
    name: "Mary On a Cross",
    artist: "Ghost",
    likes: 120,
    file: ghost,
    img: ghostImage,
  },
  {
    id: 4,
    name: "Malabar Banger",
    artist: "Dabzee",
    likes: 80,
    file: malabar,
    img: malabarImage,
  },
];

export default songs;

  