// src/hooks/index.tsx
import axios from "axios";
import { useState } from "react";

export const useMe = () => {
  const [account, setAccount] = useState<string>("");

  const getMe = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) return;

      const response = await axios.get(
        `${process.env.REACT_APP_BACK_URL}/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAccount(response.data.account);
    } catch (error) {
      console.error(error);
    }
  };

  return { account, getMe };
};
