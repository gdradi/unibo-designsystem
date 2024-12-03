import { MyStyleProvider } from "./MyStyleProvider";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SamplePage from "./components/SamplePage";
import React from "react";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <MyStyleProvider isDarkMode={isDarkMode}>
      <Router>
        <Sidebar />
        <div className="pl-16">
          <Header isDarkMode={isDarkMode} onThemeChange={setIsDarkMode} />
          <main className="container mr-auto pt-8 px-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/clients" element={<SamplePage />} />
              <Route path="/calendar" element={<SamplePage />} />
              <Route path="/shifts" element={<SamplePage />} />
              <Route path="/settings" element={<SamplePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MyStyleProvider>
  )
}