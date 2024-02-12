import "./App.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ContentProvider } from "../context";
const Shop = lazy(() => import("../pages/shop/Shop"));
const Page404 = lazy(() => import("../pages/Page404/Page404"));
const Products = lazy(() => import("../pages/products/Products"));
const OneCategory = lazy(() => import("../pages/OneCategory/OneCategory"));
const OneMeal = lazy(() => import("../pages/OneMeal/OneMeal"));
const SearchPage = lazy(() => import("../pages/searchPage/SearchPage"));
const Areas = lazy(() => import("../pages/areas/Areas"));
const OneArea = lazy(() => import("../pages/OneArea/OneArea"));
const About = lazy(() => import("../pages/about/About"));
const Spinner = lazy(() => import("../spinner/Spinner"));

function App() {
  return (
    <>
      <ContentProvider>
        <Header />
        <div style={{ minHeight: "calc(100vh - 110px - 417px)" }}>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:cat" element={<OneCategory />} />
              <Route path="/meals/:id" element={<OneMeal />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/areas" element={<Areas />} />
              <Route path="/areas/:name" element={<OneArea />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </div>

        <Footer />
      </ContentProvider>
    </>
  );
}

export default App;
