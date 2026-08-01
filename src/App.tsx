import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { BoardMembers } from "@/pages/BoardMembers";
import { ExecutiveTeam } from "@/pages/ExecutiveTeam";
import { Governance } from "@/pages/Governance";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<BoardMembers />} />
        <Route path="/team" element={<ExecutiveTeam />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
