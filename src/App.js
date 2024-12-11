import './App.css';
import Select from './components/Select';

function App() {
    return (
        <div className="App">
            <Select>
                <Select.Trigger />
                <Select.Menu>
                    <Select.Option value="apple">Apple</Select.Option>
                    <Select.Option value="banana">Banana</Select.Option>
                    <Select.Option value="orange">Orange</Select.Option>
                </Select.Menu>
            </Select>
        </div>
    );
}

export default App;
