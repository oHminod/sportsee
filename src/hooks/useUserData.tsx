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

/**
 * Custom hook to fetch and manage user data.
 *
 * @returns {{ userData: UserData | null, loading: boolean }} An object containing the user data and loading state.
 */
const useUserData = (): { userData: UserData | null; loading: boolean } => {
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

    return () => {
      setUserData(null);
      setLoading(true);
    };
  }, []);

  return { userData, loading };
};

export default useUserData;
