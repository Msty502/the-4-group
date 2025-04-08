import React, { useState } from'react';
import './App.css';

// 左侧栏组件
const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white w-1/6 p-4">
      <h2 className="text-lg font-bold mb-4">左侧栏标题</h2>
      <ul>
        <li className="mb-2"><a href="#" className="text-blue-400 hover:text-blue-300">首页</a></li>
        <li className="mb-2"><a href="#" className="text-blue-400 hover:text-blue-300">关于我们</a></li>
        <li className="mb-2"><a href="#" className="text-blue-400 hover:text-blue-300">服务</a></li>
        <li className="mb-2"><a href="#" className="text-blue-400 hover:text-blue-300">联系我们</a></li>
      </ul>
      <h3 className="text-red-500 font-bold mt-4">组长负责</h3>
    </div>
  );
};

// 组员1作品组件
const Member1Component: React.FC = () => {
  const [state, setState] = useState('初始状态');
  const handleClick = () => {
    setState('点击后的状态');
  };
  return (
    <div className="border-2 border-red-500 p-8 mb-4">
      <h2 className="text-red-500 text-center mb-4">组员1作品（带状态）</h2>
      <p className="text-center">{state}</p>
      <button className="bg-red-500 text-white px-4 py-2 mt-4" onClick={handleClick}>改变状态</button>
    </div>
  );
};

// 组员2作品组件
const Member2Component: React.FC = () => {
  const [state, setState] = useState('初始状态');
  const handleClick = () => {
    setState('点击后的状态');
  };
  return (
    <div className="border-2 border-red-500 p-8">
      <h2 className="text-red-500 text-center mb-4">组员2组件作品（带状态）</h2>
      <p className="text-center">{state}</p>
      <button className="bg-red-500 text-white px-4 py-2 mt-4" onClick={handleClick}>改变状态</button>
    </div>
  );
};

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 p-4">
        <h2 className="text-red-500 text-center mb-4">组长负责 ****组作品</h2>
        <div className="flex flex-col">
          <Member1Component />
          <Member2Component />
        </div>
      </div>
    </div>
  );
}

export default App;
