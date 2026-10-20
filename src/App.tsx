import { useState } from "react";
import { ALL_PRODUCTS } from "./data/products";
import { SERVICES } from "./data/services";
import { FORMATIONS } from "./data/formations";
import { RESOURCES } from "./data/resources";
import { segments, useRouter } from "./lib/router";
import { AnnouncementBar, Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { ResourcePage, ResourcesPage } from "./pages/ResourcesPage";
import { EbooksPage } from "./pages/EbooksPage";
import { ServicesPage } from "./pages/ServicesPage";
import { GuidePage } from "./pages/GuidePage";
import { FormationPage, FormationsPage } from "./pages/FormationsPage";
import { FaqPage } from "./pages/FaqPage";
import { ServicePage } from "./pages/ServicePage";
import { NotFound, ProductPage } from "./pages/ProductPage";

export default function App() {
  const { path } = useRouter();
  // L'état de recherche vit ici pour survivre à un aller-retour vers une fiche.
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const seg = segments(path);
  const onEbooks = seg[0] === "ebooks";

  let page;
  if (seg.length === 0) {
    page = <Home />;
  } else if (onEbooks) {
    page = (
      <EbooksPage
        query={query}
        onQuery={setQuery}
        category={category}
        onCategory={setCategory}
      />
    );
  } else if (seg[0] === "gratuit") {
    page = <ResourcesPage />;
  } else if (seg[0] === "ressource" && seg[1]) {
    const r = RESOURCES.find((x) => x.slug === seg[1] && x.published);
    page = r ? <ResourcePage r={r} /> : <NotFound />;
  } else if (seg[0] === "services") {
    page = <ServicesPage />;
  } else if (seg[0] === "guide-ultime") {
    page = <GuidePage />;
  } else if (seg[0] === "formations") {
    page = <FormationsPage />;
  } else if (seg[0] === "faq") {
    page = <FaqPage />;
  } else if (seg[0] === "formation" && seg[1]) {
    const f = FORMATIONS.find((x) => x.slug === seg[1] && x.published);
    page = f ? <FormationPage f={f} /> : <NotFound />;
  } else if (seg[0] === "produit" && seg[1]) {
    const p = ALL_PRODUCTS.find((x) => x.slug === seg[1] && x.published);
    page = p ? <ProductPage p={p} /> : <NotFound />;
  } else if (seg[0] === "service" && seg[1]) {
    const s = SERVICES.find((x) => x.slug === seg[1] && x.published);
    page = s ? <ServicePage s={s} /> : <NotFound />;
  } else {
    page = <NotFound />;
  }

  return (
    <>
      <AnnouncementBar />
      <Header
        query={onEbooks ? query : undefined}
        onQuery={onEbooks ? setQuery : undefined}
      />
      {page}
      <Footer />
    </>
  );
}
