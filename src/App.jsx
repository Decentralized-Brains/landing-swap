import { ContractProvidor } from "./context/SmartContract";
import Home from "./pages/Home";

function App() {
  return (
    <ContractProvidor>
      <div className="App">
        <Home />
      </div>
    </ContractProvidor>
  );
}

export default App;
