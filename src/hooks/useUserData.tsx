import { useEffect, useState } from "react";
import { getUserData } from "../utils/data-access-layer";
import { UserData } from "../utils/types";

/**
 * Extracts the user ID from the query string in the URL.
 * @returns {number | undefined} The user ID or undefined if not found.
 */
const getUserIdFromQueryString = (): number | undefined => {
  const params = new URLSearchParams(window.location.search);

  const id = Number(params.get("id")) || undefined;
  return id;
};

const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * Fetches user data based on the user ID from the query string.
     * @async
     */
    const fetchUserData = async () => {
      const userId = getUserIdFromQueryString();

      try {
        const data = await getUserData(userId);
        setUserData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return { userData, loading };
};

export default useUserData;
