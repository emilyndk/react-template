import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Forside from "./Forside.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* App er mit layout
        App.jsx fungerer som mit layout udelukkende på grund af den måde jeg har stablet mine <Route>-tags oven på hinanden i main.jsx:
        Når en <Route> pakker andre <Route>-tags indeni sig (ligesom en æske med mindre æsker indeni), sker der to ting automatisk i React Router:
        1. Den yderste <Route> (<App/>) bliver altid tegnet først — uanset om brugeren går ind på / eller /about, fordi begge stier starter med /.
        2. Den inderste <Route> (<Forside/> eller <About/>) bliver sendt ind i <Outlet/> inde i den yderste komponent (App.jsx).

*/}
        <Route path="/" element={<App />}>
          <Route index element={<Forside />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
