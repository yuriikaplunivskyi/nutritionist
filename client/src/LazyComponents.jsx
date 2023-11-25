import React from "react";

export const LazyHero = React.lazy(() => import("./components/hero/Hero"));
export const LazyNavbar = React.lazy(() => import("./components/navbar/Navbar"));
export const LazyCursor = React.lazy(() => import("./components/cursor/Cursor"));

export const LazyAbout = React.lazy(() => import("./components/about/About"));
export const LazyReview = React.lazy(() => import("./components/reviews/Review"));
export const LazyServices = React.lazy(() => import("./components/services/Services"));
export const LazyContact = React.lazy(() => import("./components/contact/Contact"));
