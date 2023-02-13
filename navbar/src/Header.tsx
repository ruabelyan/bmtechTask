import React, { useCallback } from "react";
import { navigateToUrl } from "single-spa";
import { useLocation } from "./useLocation";

export const Header = () => {
  // console.log(navigateToUrl);
  const redirectToURL = (url: string) => navigateToUrl(url);

  const location = useLocation();

  console.log(location.pathname);
  const createRedirectHandler = useCallback(
    (url: string) => () => {
      redirectToURL(url);
    },
    []
  );
  const checkIfLocationIncludes = useCallback(
    (url: string) => location.pathname.includes(url),
    [location]
  );

  const checkIfLocation = useCallback(
    (url: string) =>
      location.pathname === url ||
      location.pathname === url + "/" ||
      location.pathname + "/" === url,
    [location]
  );

  const path = checkIfLocationIncludes(location.pathname);

  return (
    <div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li>
          <div
            style={
              location.pathname === "/main"
                ? { color: "red", cursor: "pointer" }
                : { color: "black", cursor: "pointer" }
            }
            onClick={createRedirectHandler("main")}
          >
            Page 1
          </div>
        </li>
        <li style={{ marginLeft: " 1rem" }}>
          <div
            style={
              location.pathname === "/main2"
                ? { color: "red", cursor: "pointer" }
                : { color: "black", cursor: "pointer" }
            }
            onClick={createRedirectHandler("/main2")}
          >
            Page 2
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
