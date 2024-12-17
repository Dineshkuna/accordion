

import './App.css';
// import CustomCalendar from './components/CustomCalendar/CustomCalendar';
// import FormBuilder from './components/FormBuilder/FormBuilder';
// import KanbanBoard from './components/KanbanBoard/KanbanBoard';
// import MemoryGame from './components/MemoryGame/MemoryGame';
// import PollWidget from './components/pollWidget/PollWidget';
// import NestedComments from './components/nestedComments/NestedComments';
// import Autocomplete from './components/Autocomplete/Autocomplete';
// import ProgressBar from './components/progressBar/ProgressBar';
// import ChangeThemeBg from './components/changeTheme/ChangeTheme';
// import Tabs from './components/tabs/Tabs';
// import ToastContainer from './components/toast/ToastContainer';
// import TodoApp from './components/todo_List/Todo_List';
// import QrCode from './components/qrCodeGenrator/QrGen';
// import LoadMoreData from './components/load-data/LoadData';
// import TreeMenu from './components/tree-view/TreeMenu';
// import SliderImages from './components/slider/Slider';
// import Rating from './components/star_rating/Starrating';
// import Accordion from './components/accordion/Accordion';
// import RandomColor from './components/randomColor/RandomColor';



function App() {
  const tabsData = [
    { label: "Home", content: <p>Welcome to the Home Tab!</p> },
    { label: "Profile", content: <p>This is your Profile Tab.</p> },
    { label: "Settings", content: <p>Adjust your preferences here.</p> },
  ];


  const mockAPI = (query) => {
    const data = [
      "Apple",
      "Banana",
      "Cherry",
      "Date",
      "Grape",
      "Mango",
      "Orange",
      "Peach",
      "Pear",
      "Pineapple",
      "Strawberry",
      "Watermelon",
    ];
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          data.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          )
        );
      }, 500); // Simulated API latency
    });
  };
  
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      {/* <Rating/> */}
      {/* <SliderImages/> */}
      {/* <LoadMoreData/> */}
      {/* <TreeMenu/> */}
      {/* <QrCode/> */}
      {/* <ChangeThemeBg/> */}
      {/* <TodoApp/> */}
      {/* <Tabs tabs={tabsData}/> */}
      {/* <ToastContainer /> */}
      {/* <Autocomplete fetchSuggestions={mockAPI} /> */}
      {/* <ProgressBar/> */}
      {/* <NestedComments /> */}
      {/* <PollWidget/> */}
      {/* <MemoryGame/> */}
      {/* <FormBuilder/> */}
      {/* <KanbanBoard/> */}
      {/* <CustomCalendar/> */}
      
      
    </div>
  );
}

export default App;
