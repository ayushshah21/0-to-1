import { ReactNode, useState } from "react";
import { User } from "../types/User";
import { UserContext } from "./UserContext";

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      // Check both token and user data
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
      
      if (!token || !storedUser) {
        return null;
      }
      
      return JSON.parse(storedUser);
    } catch (error) {
      console.error("Error parsing stored user:", error);
      return null;
    }
  });

  const value = {
    user,
    setUser: (newUser: User | null) => {
      setUser(newUser);
      if (newUser) {
        localStorage.setItem("user", JSON.stringify(newUser));
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    },
    isAuthenticated: !!(user && localStorage.getItem("token")),
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext };

