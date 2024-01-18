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
  TourDescription,
  TourDetailLayout,
  TourPlan,
  TourReviews,
  Tours,
} from "./components/utils/helper";
import {
  crewLoader,
  pricingLoader,
  toursLoader,
} from "./components/utils/loaders";
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
      <Route path="about" element={<AboutUs />} loader={crewLoader} />
      <Route path="tours" element={<Tours />} loader={toursLoader} />
      <Route path="tours/:id" element={<TourDetailLayout />}>
        <Route index element={<TourDescription />} />
        <Route path="plan" element={<TourPlan />} />
        <Route path="reviews" element={<TourReviews />} />
      </Route>
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
