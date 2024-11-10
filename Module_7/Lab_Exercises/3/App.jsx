import Emoji from "./components/Emoji";
import { EmojiProvider } from "./context/EmojiContext";

function App() {
  return (
    <>
      <EmojiProvider>
        <Emoji />
      </EmojiProvider>
    </>
  );
}

export default App;
