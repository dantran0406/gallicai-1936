import { Link, useLocation, useNavigate } from 'react-router-dom';

const CRIMSON = "#7B1D35";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Giả lập trạng thái đã đăng nhập với người dùng Lea
  const isLoggedIn = true; 

  const links = [
    { label: "Accueil", path: "/" },
    { label: "Frise Chronologique", path: "/frise" },
    { label: "Ressources Partagées", path: "/ressources" },
    { label: "Ma Bibliothèque", path: "/bibliotheque" },
  ];

  return (
    <nav style={{ 
      background: "#fff", 
      borderBottom: "1px solid #e0dbd5", 
      padding: "0 2rem", 
      display: "flex", 
      alignItems: "center", 
      gap: "2rem", 
      height: "52px", 
      position: "sticky", 
      top: 0, 
      zIndex: 100 
    }}>
      {/* Logo bên trái */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img 
          src="/images/logo-bnf.png" 
          alt="BnF Gallica" 
          style={{ height: "80px", objectFit: "contain", cursor: "pointer" }} 
          onClick={() => navigate("/")}
        />
      </div>
      
      {/* Menu ở giữa */}
      <div style={{ 
        flex: 1, 
        display: "flex", 
        gap: "2rem", 
        fontSize: "13px", 
        letterSpacing: "0.08em", 
        fontFamily: "sans-serif", 
        textTransform: "uppercase", 
        fontWeight: "500" 
      }}>
        {links.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                color: isActive ? "#1a1a1a" : "#555",
                textDecoration: "none",
                borderBottom: isActive ? "2px solid " + CRIMSON : "2px solid transparent",
                paddingBottom: "2px",
                transition: "all 0.2s ease"
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Khu vực người dùng Lea bên phải */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        
        {isLoggedIn ? (
          /* HIỂN THỊ NGƯỜI DÙNG LEA GIẢ LẬP */
          <div 
            onClick={() => navigate("/bibliotheque")} // Nhấn vào avatar dẫn đến thư viện cá nhân
            style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
          >
            <span style={{ 
              fontSize: "13px", 
              fontFamily: "sans-serif", 
              fontWeight: "600", 
              color: "#333" 
            }}>
              Léa
            </span>
            <div style={{ 
              width: "32px", 
              height: "32px", 
              borderRadius: "50%", 
              background: CRIMSON, 
              color: "#fff", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: "bold",
              border: "1px solid #eee"
            }}>
              L
            </div>
            <span style={{ fontSize: "10px", color: "#888" }}>▼</span>
          </div>
        ) : (
          /* Nút Đăng nhập mặc định nếu chưa login */
          <button style={{ 
            background: CRIMSON, 
            color: "#fff", 
            border: "none", 
            padding: "7px 18px", 
            borderRadius: "20px", 
            fontSize: "13px", 
            fontFamily: "sans-serif", 
            cursor: "pointer", 
            fontWeight: "500" 
          }}>
            Se connecter
          </button>
        )}
      </div>
    </nav>
  );
}