import { RouterProvider} from "react-router-dom";
import router from "./components/AppRouter";
import StoreProvider from "./settings";

function App (){
  return(
    <StoreProvider>
      <RouterProvider router={router}/>
    </StoreProvider>
  )
}

export default App;
