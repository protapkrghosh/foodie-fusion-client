import { useEffect, useState } from "react";

export const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://foodiefusionserver.vercel.app/menu')
      .then(res => res.json())
      .then(data => {
        setMenu(data);
        setLoading(false);
      })
  }, [])

  return [menu, loading];
}
