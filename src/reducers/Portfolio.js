// import { GET_M_PORTFOLİO } from '../constants/ActionTypes';
import Aviasiya from '../assets/images/Portfolios/Aviasiya.svg';
import BakuTaxi from '../assets/images/Portfolios/BakuTaxi.png';
import BTXC from '../assets/images/Portfolios/btxC.webp';
import BTXD from '../assets/images/Portfolios/btxD.webp';
import Zimmer from '../assets/images/Portfolios/Zimmer.png';
import Runpizza from '../assets/images/Portfolios/runpizza.png';
import Mover from '../assets/images/Portfolios/Mover.az.png';
import Lent from '../assets/images/Portfolios/Lent.svg';
import Apa from '../assets/images/Portfolios/Apa.svg';
import Ezoterica from '../assets/images/Portfolios/Ezoterica.png';
import Axor from '../assets/images/Portfolios/axor.png';

const initialState = {
    portfolio_web: [
        {
            appName: 'Baku Taxi',
            link: 'site.bakutaxi.net/',
            img: BakuTaxi
        },
        {
            appName: 'Aviasiya',
            link: 'aviasiya.onneks.com/',
            img: Aviasiya
        },
        {
            appName: 'Mover',
            link: 'www.mover.az/',
            img: Mover
        },
        {
            appName: 'Lent',
            link: 'lent.az/',
            img: Lent
        },
        {
            appName: 'APA',
            link: 'apa.az/', 
            img: Apa
        },
        {
            appName: 'Zimmer',
            link: 'zimmer-home.com/',
            img: Zimmer
        },
        {
            appName: 'Ezoterica',
            link: 'ezoterica.surge.sh/',
            img: Ezoterica
        },
        {
            appName: 'Run pizza',
            link: 'run-pizza.ru/',
            img: Runpizza
        },
        {
            appName: 'Axor Atego',
            link: 'axor.surge.sh/',
            img: Axor
        },
    ],
    portfolio_mobile: [
        {
            appName: 'Baku Taxi (Customer android)',
            link: 'play.google.com/store/apps/details?id=com.bakutaxi&hl=en&gl=US',
            img: BTXC
        },
        {
            appName: 'Baku Taxi (Driver android)',
            link: 'play.google.com/store/apps/details?id=com.bakutaxidriver&hl=en&gl=US',
            img: BTXD
        },
        {
            appName: 'Baku Taxi (Customer ios)',
            link: 'apps.apple.com/az/app/bakutaxi/id1505793560',
            img: BTXC
        },
        {
            appName: 'Baku Taxi (Driver ios)',
            link: 'apps.apple.com/gh/app/bakutaxi-driver/id1504709462',
            img: BTXD
        },
        
    ],
}



export default function Resume(state = initialState, action) {

    switch (action.type) {
        // case GET_EXPERIENCE:
        //     return {
        //         ...state,
        //         experience_data: action.payload,
        //     }
        default:
            return state
    }
}