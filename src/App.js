import './App.css';
import 'antd/dist/antd.css';
import { Slider, Space } from 'antd';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);

  const sliders = (count) => {
    const result = [];

    for (let i = 0; i < count; i++) {
      result.push(<Slider
        defaultValue={Math.random() * 100}
        min={0}
        max={100}
        tooltipVisible
        tooltipPlacement="bottom"
      />);
    }

    return result;
  }

  return (
    <div className="App">
      <div style={{ padding: 50 }}>
        <Space direction="vertical" style={{ width: '80%' }}>
          <Slider
            value={number}
            min={0}
            max={15}
            tipFormatter={(val) => `number of sliders: ${val}`}
            tooltipVisible
            onChange={(val) => setNumber(val)}
          />
          {sliders(number)}
        </Space>
      </div>
    </div>
  );
}

export default App;
