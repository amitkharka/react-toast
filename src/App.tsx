import React from 'react';
import './App.css';
import Toast from './toast';
import INSTAGRAM_ICON from './assets/icons/instagram.png';

function App() {
  return (
    <div className="App">
      <Toast
        notifications={[{
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 1',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }, {
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 2',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }, {
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 3',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        },{
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 1',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }, {
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 2',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }, {
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 3',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        },{
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 1',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }, {
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 2',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }, {
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 3',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        },{
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 1',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }, {
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 2',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }, {
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 3',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        },{
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 1',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }, {
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 2',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }, {
          icon: INSTAGRAM_ICON,
          title: 'What is Lorem Ipsum? 3',
          message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,'
        }]}
      />
    </div>
  );
}

export default App;
