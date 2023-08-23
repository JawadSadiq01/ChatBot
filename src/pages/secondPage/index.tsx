import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setName, setAge } from '../../reducer';
import ChatBot from "react-simple-chatbot";
import { stepifyScript } from "./utils";
import { ROUTES_CONSTANTS } from '../../config/constants';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ages = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
  const script = [
    {
      id: "1",
      message: "Hello, Welcome to student info system!",
      trigger: "2",
      delay: 3000,
    },
    {
      id: "2",
      options: [
        { label: "Got it!", trigger: "3" },
      ]
    },
    {
      id: "3",
      message: "Enter your name",
      trigger: "4"
    },
    {
      id: '4',
      user: true,
      trigger: '5',
    },
    {
      id: "5",
      message: "Enter your age.",
      trigger: "6"
    },
    {
      id: "6",
      options: ages.map((age) => ({
        label: `${age}`,
        value: age,
        trigger: '7',
      })),
    },
    {
      id: "7",
      message: "Thank you. In 5 seconds, bot will exit",
      trigger: 8,
    },
    {
      id: "8",
      message: "5..",
      delay: 2000,
      trigger: "9",
    },
    {
      id: "9",
      message: "4..",
      delay: 1000,
      trigger: "10",
    },
    {
      id: "10",
      message: "3..",
      delay: 1000,
      trigger: "11",
    },
    {
      id: "11",
      message: "2..",
      delay: 1000,
      trigger: "12",
    },
    {
      id: "12",
      message: "1..",
      trigger: async (userInput: any) => {
        const { steps } = userInput;
        const name = steps[4].message;
        const age = steps[6].message;

        await dispatch(setName(name));
        await dispatch(setAge(age));

        navigate(`/${ROUTES_CONSTANTS.EXIT_PAGE}`, {state:{name: name, age: age}});
      },
    },
  ];

  return (
    <div className="flex justify-end">
      <ChatBot
        bubbleOptionStyle={{ backgroundColor: "white", color: "black" }}
        steps={stepifyScript(script)}
      />
    </div>
  )
}

export default Dashboard;