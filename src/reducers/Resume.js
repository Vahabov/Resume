// import { GET_EXPERIENCE } from '../constants/ActionTypes';

const initialState = {
  experience_data: [
    {
      job: "MOVER LLC",
      date: "2018 january - 2019 march",
      position: "Front end developer - WEB",
    },
    {
      job: "ONNEKS LAB",
      date: "2019 march - 2020 october",
      position: "Front end developer - WEB AND MOBILE",
    },
    {
      job: "APA GROUP",
      date: "2020 october - 2021 may",
      position: "Front end developer - WEB AND MOBILE",
    },
    {
      job: "Freelancer",
      date: "2021 may - Present",
      position: "Front end developer - WEB AND MOBILE",
    },
  ],
  education_data: [
    {
      job: "Tech academy",
      date: "2017 october - 2018 january",
      position: "Full stack developer",
    },
    {
      job: "Udemy & other courses",
      date: "2018 january - Present",
      position: "",
    },
  ],
  skills: [
    {
      skill: "HTML",
      percentage: 90,
    },
    {
      skill: "CSS",
      percentage: 90,
    },
    {
      skill: "BOOTSTRAP (3,4)",
      percentage: 90,
    },
    {
      skill: "JS (ES5/ES6)",
      percentage: 80,
    },
    {
      skill: "Jquery",
      percentage: 80,
    },
    {
      skill: "TypeScript",
      percentage: 80,
    },
    {
      skill: "React JS",
      percentage: 80,
    },
    {
      skill: "Next JS",
      percentage: 80,
    },
    {
      skill: "Vue JS",
      percentage: 70,
    },
    {
      skill: "Vuex",
      percentage: 70,
    },
    {
      skill: "Redux",
      percentage: 80,
    },
    {
      skill: "React Native",
      percentage: 80,
    },
    {
      skill: "MobX",
      percentage: 70,
    },
    {
      skill: "AJAX, JSON",
      percentage: 80,
    },
    {
      skill: "GIT",
      percentage: 80,
    },
  ],
  otherSkills: [
    {
      skill: "Linux",
      percentage: 60,
    },
    {
      skill: "Python",
      percentage: 40,
    },
    {
      skill: "Node JS",
      percentage: 30,
    },
    {
      skill: "Express JS",
      percentage: 30,
    },
  ],
  languages: [
    {
      skill: "English",
      percentage: 50,
    },
    {
      skill: "Russian",
      percentage: 60,
    },
    {
      skill: "Turkish",
      percentage: 90,
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
