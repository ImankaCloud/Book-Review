import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddEditReview from "./pages/AddEditReview";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

const App = () => (
  <>
    <Navbar />
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
        },
        duration: 3000,
      }}
    />
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEditReview />} />
        <Route path="/edit/:id" element={<AddEditReview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </>
);

export default App;
