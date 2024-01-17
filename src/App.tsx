import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {
  AboutUs,
  ContactUs,
  Home,
  Layout,
  Page404,
  Tours,
} from "./components/utils/helper";

import { loader as teamsLoader } from "./components/sections/OurCrew.tsx";
import { loader as pricingLoader } from "./components/sections/Pricing.tsx";
import { themeContext } from "./contexts/themeContext";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={pricingLoader} />
      <Route path="about" element={<AboutUs />} loader={teamsLoader} />
      <Route path="tours" element={<Tours />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="*" element={<Page404 />} />
    </Route>,
  ),
);

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <themeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </themeContext.Provider>
  );
}

export default App;
