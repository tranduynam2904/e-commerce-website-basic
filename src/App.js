import Header from "./Header/Header";
import { AppProvider } from "./AppContext";
function App() {
  return (
    <AppProvider>
      <div className="container">
        <Header />
      </div>
    </AppProvider>
  );
}

export default App;
