// import { GET_M_PORTFOLİO } from '../constants/ActionTypes';
import Aviasiya from "../assets/images/Portfolios/Aviasiya.svg";
import BakuTaxi from "../assets/images/Portfolios/BakuTaxi.png";
import GencApp from "../assets/images/Portfolios/Gencapp.webp";
import Avtovagzal from "../assets/images/Portfolios/Avtovagzal.webp";
import Realest from "../assets/images/Portfolios/Realest.webp";
import BTXC from "../assets/images/Portfolios/btxC.webp";
import BTXD from "../assets/images/Portfolios/btxD.webp";
import Zimmer from "../assets/images/Portfolios/Zimmer.png";
import Runpizza from "../assets/images/Portfolios/runpizza.png";
import Skyline from "../assets/images/Portfolios/skyline.png";
import Mover from "../assets/images/Portfolios/Mover.az.png";
import Lent from "../assets/images/Portfolios/Lent.svg";
import Apa from "../assets/images/Portfolios/Apa.svg";
import Vesti from "../assets/images/Portfolios/vesti.svg";
import Kulis from "../assets/images/Portfolios/Kulis.png";
import Kargolux from "../assets/images/Portfolios/Kargolux.svg";
import KargoLuxMobile from "../assets/images/Portfolios/KargoLux.webp";
import Troni from "../assets/images/Portfolios/Troni.webp";
import Medico from "../assets/images/Portfolios/Medico.webp";
import Ezoterica from "../assets/images/Portfolios/Ezoterica.png";
import Axor from "../assets/images/Portfolios/axor.png";
import VirtualCard from "../assets/images/Portfolios/VirtualCard.webp";
import Onepoint from "../assets/images/Portfolios/Onepoint.webp";

const initialState = {
  portfolio_web: [
    {
      appName: "Kargolux",
      link: "kargolux.az/",
      img: Kargolux,
    },
    {
      appName: "APA",
      link: "apaaz.surge.sh/",
      img: Apa,
    },
    {
      appName: "Lent",
      link: "lent.az/",
      img: Lent,
    },
    {
      appName: "Kulis",
      link: "kulis.surge.sh/",
      img: Kulis,
    },
    {
      appName: "Vesti",
      link: "vesti.az/",
      img: Vesti,
    },
    {
      appName: "Baku Taxi",
      link: "site.bakutaxi.net/",
      img: BakuTaxi,
    },
    {
      appName: "Aviasiya",
      link: "aviasiya.onneks.com/",
      img: Aviasiya,
    },
    {
      appName: "Ezoterica",
      link: "ezoterica.surge.sh/",
      img: Ezoterica,
    },
    {
      appName: "Axor Atego",
      link: "axor.surge.sh/",
      img: Axor,
    },
    {
      appName: "Mover",
      link: "www.mover.az/",
      img: Mover,
    },
    {
      appName: "Zimmer",
      link: "zimmer-home.com/",
      img: Zimmer,
    },
    {
      appName: "Run pizza",
      link: "run-pizza.ru/",
      img: Runpizza,
    },
    {
      appName: "Skyline crypro",
      link: "skylinecrypto.com.tr/",
      img: Skyline,
    },
  ],
  portfolio_mobile: [
    {
      appName: "GencApp (androind)",
      link: "play.google.com/store/apps/details?id=com.gencup&hl=en&gl=US",
      img: GencApp,
    },
    {
      appName: "GencApp (ios)",
      link: "apps.apple.com/us/app/gencapp/id1474200721",
      img: GencApp,
    },
    {
      appName: "Realest (androind)",
      link: "play.google.com/store/apps/details?id=com.onneks.realest&hl=en&gl=US",
      img: Realest,
    },
    {
      appName: "Realest (ios)",
      link: "apps.apple.com/us/app/realest/id1502804047",
      img: Realest,
    },
    {
      appName: "Baku Taxi (Customer android)",
      link: "play.google.com/store/apps/details?id=com.bakutaxi&hl=en&gl=US",
      img: BTXC,
    },
    {
      appName: "Baku Taxi (Driver android)",
      link: "play.google.com/store/apps/details?id=com.bakutaxidriver&hl=en&gl=US",
      img: BTXD,
    },
    {
      appName: "Baku Taxi (Customer ios)",
      link: "apps.apple.com/az/app/bakutaxi/id1505793560",
      img: BTXC,
    },
    {
      appName: "Baku Taxi (Driver ios)",
      link: "apps.apple.com/gh/app/bakutaxi-driver/id1504709462",
      img: BTXD,
    },
    {
      appName: "Avtovagzal (android)",
      link: "play.google.com/store/apps/details?id=com.avtovagzal&hl=en&gl=US",
      img: Avtovagzal,
    },
    {
      appName: "Avtovagzal (ios)",
      link: "apps.apple.com/az/app/avtovagzal-bus-tickets/id1467486522",
      img: Avtovagzal,
    },
    {
      appName: "Virtual card (android)",
      link: "play.google.com/store/apps/details?id=com.virtualcard&hl=en&gl=US",
      img: VirtualCard,
    },
    {
      appName: "KargoLux (android)",
      link: "play.google.com/store/apps/details?id=com.kargolux&hl=en&gl=US",
      img: KargoLuxMobile,
    },
    {
      appName: "KargoLux (ios)",
      link: "apps.apple.com/us/app/kargolux/id1620330187",
      img: KargoLuxMobile,
    },
    {
      appName: "Troni (android)",
      link: "play.google.com/store/apps/details?id=com.troni&hl=en&gl=US",
      img: Troni,
    },
    {
      appName: "Troni (ios)",
      link: "apps.apple.com/app/troni/id1618193154",
      img: Troni,
    },
    {
      appName: "Medico Cashback (android)",
      link: "play.google.com/store/apps/details?id=com.medicoapp",
      img: Medico,
    },
    {
      appName: "Medico Cashback (ios)",
      link: "apps.apple.com/az/app/medico-cashback/id6443469755",
      img: Medico,
    },
    {
      appName: "OnePoint (ios)",
      link: "apps.apple.com/az/app/onepoint-az/id6462992552",
      img: Onepoint,
    },
  ],
};

export default function Resume(state = initialState, action) {
  switch (action.type) {
    // case GET_EXPERIENCE:
    //     return {
    //         ...state,
    //         experience_data: action.payload,
    //     }
    default:
      return state;
  }
}
