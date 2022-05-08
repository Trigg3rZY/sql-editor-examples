import { Editor } from './Editor';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="editor">
        <Editor />
      </div>
      <div className="ast">AST</div>
    </div>
  );
}

export default App;
