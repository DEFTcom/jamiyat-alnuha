import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Drawer } from "@/components/ui/Drawer";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "عن الجمعية" },
  { to: "/board", label: "مجلس الإدارة" },
  { to: "/team", label: "الفريق التنفيذي" },
  { to: "/governance", label: "الحوكمة" },
  { to: "/contact", label: "تواصل معنا" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? "text-brand-700" : "text-neutral-600 hover:text-brand-700"
    }`;

  return (
    <header
      className={`sticky top-0 z-30 transition-all ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2 text-lg font-semibold text-neutral-900">
          <img src={logo} alt="جمعية النهى" className="h-10 w-auto" />
          <span className="hidden sm:inline">جمعية النهى</span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          className="rounded-full p-2 text-neutral-700 hover:bg-neutral-100 md:hidden"
          onClick={() => setDrawerOpen(true)}
          aria-label="القائمة"
        >
          <Menu size={22} />
        </button>
      </nav>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="flex flex-col gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setDrawerOpen(false)}
              className={linkClass}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </header>
  );
}
