import './App.css';
import { GenerateRecipeButton } from './components/generate_recipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Generator</h1>
      </header>
      <div>
        <p>
          Here's a recipe for some pasta. Don't like it? Click the button to
          randomly generate a new recipe. For example it might be a...
        </p>
        <ul>
          <li>Pie</li>
          <li>Trifle</li>
          <li>Curry</li>
        </ul>
        <p>
          We hope you like experimental flavours, since the ingredients are
          randomly generated as well..! &#128521;
        </p>
        <GenerateRecipeButton />
      </div>
    </div>
  );
}

export default App;
