// import { FaHome } from "react-icons/fa";
// import { FaBook } from "react-icons/fa";
// import { FaComputer } from "react-icons/fa6";

const icons = {
  home: {
    icon: "🏠",
    // icon: <FaHome size={30}/>,
    bgColor: "aliceblue",
    // bgColorCompleted: "rgb(240, 245, 255)",
    bgColorCompleted: "rgb(240, 220, 255)",
  },
  study: {
    icon: "🗒️",
    // icon: <FaBook size={30}/>,
    bgColor: "azure",
    // bgColorCompleted: "rgb(240, 248, 255)",
    bgColorCompleted: "rgb(220, 248, 255)",
  },
  work: {
    icon: "🖥️",
    // icon: <FaComputer size={30}/>,
    bgColor: "bisque",
    bgColorCompleted: "rgb(255, 200, 196)",
  },
};

const getIcon = (todo) => {
  return icons[todo.type] || "";
};

export { getIcon };
