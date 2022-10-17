import { ContractProvidor } from "./context/SmartContract";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ContractProvidor>
        <Home />
      </ContractProvidor>
    </div>
  );
}

export default App;
