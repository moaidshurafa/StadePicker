// Dummy image imports placeholders
import etihadStadiumImg from "./assets/etihad-stadium.jpg";
import parcDesPrincesImg from "./assets/parc-des-princes.jpg";
import allianzArenaImg from "./assets/allianz-arena.jpg";
import bernabeuImg from "./assets/bernabeu.jpg";
import campNouImg from "./assets/camp-nou.jpg";
import juventusStadiumImg from "./assets/juventus-stadium.jpg";
import anfieldImg from "./assets/anfield.jpg";
import stamfordBridgeImg from "./assets/stamford-bridge.jpg";
import signalIdunaParkImg from "./assets/signal-iduna-park.jpg";
import wandaMetropolitanoImg from "./assets/wanda-metropolitano.jpg";
import sanSiroImg from "./assets/san-siro.jpg";
import diegoArmandoMaradonaImg from "./assets/diego-armando-maradona.jpg";
import estadioDaLuzImg from "./assets/estadio-da-luz.jpg";
import johanCruijffArenaImg from "./assets/johan-cruijff-arena.jpg";
import redBullArenaImg from "./assets/red-bull-arena.jpg";
import ramonSanchezPizjuanImg from "./assets/ramon-sanchez-pizjuan.jpg";
import estadioDoDragaoImg from "./assets/estadio-do-dragao.jpg";
import tottenhamStadiumImg from "./assets/tottenham-stadium.jpg";
import bayArenaImg from "./assets/bayarena.jpg";
import ibroxStadiumImg from "./assets/ibrox-stadium.jpg";
import celticParkImg from "./assets/celtic-park.jpg";
import nscOlimpiyskiyImg from "./assets/nsc-olimpiyskiy.jpg";
import groupamaStadiumImg from "./assets/groupama-stadium.jpg";
import velodromeImg from "./assets/velodrome.jpg";
import janBreydelStadiumImg from "./assets/jan-breydel-stadium.jpg";
import stadeLouisIIImg from "./assets/stade-louis-ii.jpg";
import deutscheBankParkImg from "./assets/deutsche-bank-park.jpg";
import estadioJoseAlvaladeImg from "./assets/estadio-jose-alvalade.jpg";
import parkenStadiumImg from "./assets/parken-stadium.jpg";
import stadioOlimpicoImg from "./assets/stadio-olimpico.jpg";
import turkTelekomStadiumImg from "./assets/turk-telekom-stadium.jpg";

export const AVAILABLE_STADIUMS = [
  {
    id: "m1",
    title: "Etihad Stadium",
    image: {
      src: etihadStadiumImg,
      alt: "Home stadium of Manchester City in Manchester, England.",
    },
    lat: 53.4831,
    lon: -2.2004,
  },
  {
    id: "m2",
    title: "Parc des Princes",
    image: {
      src: parcDesPrincesImg,
      alt: "Home stadium of Paris Saint-Germain in Paris, France.",
    },
    lat: 48.8415,
    lon: 2.2526,
  },
  {
    id: "m3",
    title: "Allianz Arena",
    image: {
      src: allianzArenaImg,
      alt: "Home stadium of Bayern Munich in Munich, Germany.",
    },
    lat: 48.218,
    lon: 11.6215,
  },
  {
    id: "m4",
    title: "Santiago Bernabéu Stadium",
    image: {
      src: bernabeuImg,
      alt: "Home stadium of Real Madrid in Madrid, Spain.",
    },
    lat: 40.4531,
    lon: -3.6883,
  },
  {
    id: "m5",
    title: "Camp Nou",
    image: {
      src: campNouImg,
      alt: "Home stadium of Barcelona in Barcelona, Spain.",
    },
    lat: 41.3809,
    lon: 2.1228,
  },
  {
    id: "m6",
    title: "Allianz Stadium",
    image: {
      src: juventusStadiumImg,
      alt: "Home stadium of Juventus in Turin, Italy.",
    },
    lat: 45.1096,
    lon: 7.6413,
  },
  {
    id: "m7",
    title: "Anfield",
    image: {
      src: anfieldImg,
      alt: "Home stadium of Liverpool in Liverpool, England.",
    },
    lat: 53.4308,
    lon: -2.9608,
  },
  {
    id: "m8",
    title: "Stamford Bridge",
    image: {
      src: stamfordBridgeImg,
      alt: "Home stadium of Chelsea in London, England.",
    },
    lat: 51.4816,
    lon: -0.191,
  },
  {
    id: "m9",
    title: "Signal Iduna Park",
    image: {
      src: signalIdunaParkImg,
      alt: "Home stadium of Borussia Dortmund in Dortmund, Germany.",
    },
    lat: 51.4928,
    lon: 7.4517,
  },
  {
    id: "m10",
    title: "Wanda Metropolitano",
    image: {
      src: wandaMetropolitanoImg,
      alt: "Home stadium of Atlético Madrid in Madrid, Spain.",
    },
    lat: 40.4362,
    lon: -3.5996,
  },
  {
    id: "m11",
    title: "San Siro",
    image: {
      src: sanSiroImg,
      alt: "Home stadium of AC Milan and Inter Milan in Milan, Italy.",
    },
    lat: 45.4781,
    lon: 9.1231,
  },
  {
    id: "m12",
    title: "Stadio Diego Armando Maradona",
    image: {
      src: diegoArmandoMaradonaImg,
      alt: "Home stadium of Napoli in Naples, Italy.",
    },
    lat: 40.853,
    lon: 14.3056,
  },
  {
    id: "m13",
    title: "Estádio da Luz",
    image: {
      src: estadioDaLuzImg,
      alt: "Home stadium of Benfica in Lisbon, Portugal.",
    },
    lat: 38.7636,
    lon: -9.0953,
  },
  {
    id: "m14",
    title: "Johan Cruijff Arena",
    image: {
      src: johanCruijffArenaImg,
      alt: "Home stadium of Ajax in Amsterdam, Netherlands.",
    },
    lat: 52.3144,
    lon: 4.9411,
  },
  {
    id: "m15",
    title: "Red Bull Arena",
    image: {
      src: redBullArenaImg,
      alt: "Home stadium of RB Leipzig in Leipzig, Germany.",
    },
    lat: 51.3397,
    lon: 12.3716,
  },
  {
    id: "m16",
    title: "Ramón Sánchez Pizjuán Stadium",
    image: {
      src: ramonSanchezPizjuanImg,
      alt: "Home stadium of Sevilla in Seville, Spain.",
    },
    lat: 37.3844,
    lon: -5.9732,
  },
  {
    id: "m17",
    title: "Estádio do Dragão",
    image: {
      src: estadioDoDragaoImg,
      alt: "Home stadium of Porto in Porto, Portugal.",
    },
    lat: 41.1616,
    lon: -8.5833,
  },
  {
    id: "m18",
    title: "Tottenham Hotspur Stadium",
    image: {
      src: tottenhamStadiumImg,
      alt: "Home stadium of Tottenham Hotspur in London, England.",
    },
    lat: 51.6042,
    lon: -0.067,
  },
  {
    id: "m19",
    title: "BayArena",
    image: {
      src: bayArenaImg,
      alt: "Home stadium of Bayer Leverkusen in Leverkusen, Germany.",
    },
    lat: 51.0345,
    lon: 7.0197,
  },
  {
    id: "m20",
    title: "Ibrox Stadium",
    image: {
      src: ibroxStadiumImg,
      alt: "Home stadium of Rangers in Glasgow, Scotland.",
    },
    lat: 55.8498,
    lon: -4.3093,
  },
  {
    id: "m21",
    title: "Celtic Park",
    image: {
      src: celticParkImg,
      alt: "Home stadium of Celtic in Glasgow, Scotland.",
    },
    lat: 55.8493,
    lon: -4.205,
  },
  {
    id: "m22",
    title: "NSC Olimpiyskiy",
    image: {
      src: nscOlimpiyskiyImg,
      alt: "Temporary home stadium of Shakhtar Donetsk in Kyiv, Ukraine.",
    },
    lat: 50.434,
    lon: 30.5216,
  },
  {
    id: "m23",
    title: "Groupama Stadium",
    image: {
      src: groupamaStadiumImg,
      alt: "Home stadium of Olympique Lyonnais in Lyon, France.",
    },
    lat: 45.7683,
    lon: 4.9507,
  },
  {
    id: "m24",
    title: "Stade Vélodrome",
    image: {
      src: velodromeImg,
      alt: "Home stadium of Marseille in Marseille, France.",
    },
    lat: 43.2707,
    lon: 5.3951,
  },
  {
    id: "m25",
    title: "Jan Breydel Stadium",
    image: {
      src: janBreydelStadiumImg,
      alt: "Home stadium of Club Brugge in Bruges, Belgium.",
    },
    lat: 51.216,
    lon: 3.2294,
  },
  {
    id: "m26",
    title: "Stade Louis II",
    image: {
      src: stadeLouisIIImg,
      alt: "Home stadium of AS Monaco in Monaco.",
    },
    lat: 43.7333,
    lon: 7.4167,
  },
  {
    id: "m27",
    title: "Deutsche Bank Park",
    image: {
      src: deutscheBankParkImg,
      alt: "Home stadium of Eintracht Frankfurt in Frankfurt, Germany.",
    },
    lat: 50.0978,
    lon: 8.6492,
  },
  {
    id: "m28",
    title: "Estádio José Alvalade",
    image: {
      src: estadioJoseAlvaladeImg,
      alt: "Home stadium of Sporting CP in Lisbon, Portugal.",
    },
    lat: 38.7615,
    lon: -9.161,
  },
  {
    id: "m29",
    title: "Parken Stadium",
    image: {
      src: parkenStadiumImg,
      alt: "Home stadium of Copenhagen in Copenhagen, Denmark.",
    },
    lat: 55.657,
    lon: 12.583,
  },
  {
    id: "m30",
    title: "Stadio Olimpico",
    image: {
      src: stadioOlimpicoImg,
      alt: "Home stadium of Lazio in Rome, Italy.",
    },
    lat: 41.9333,
    lon: 12.4543,
  },
  {
    id: "m31",
    title: "Türk Telekom Stadium",
    image: {
      src: turkTelekomStadiumImg,
      alt: "Home stadium of Galatasaray in Istanbul, Turkey.",
    },
    lat: 41.0889,
    lon: 29.0625,
  },
];
