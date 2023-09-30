import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//
import MThemeProvider from "./theme/MThemeProvider";
import HomePage from "./pages/HomePage";
import ReadingPage from "./pages/ReadingPage";
import NotFoundPage from "./pages/NotFoundPage";
import BookDetailPage from "./pages/BookDetailPage";
import PublicLayout from "./layout/PublicLayout";

//
function App() {
  return (
    <BrowserRouter>
      <MThemeProvider>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomePage />} />
            <Route path="books/:id" element={<BookDetailPage />} />
            <Route path="reading" element={<ReadingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MThemeProvider>
    </BrowserRouter>
  );
}

export default App;
