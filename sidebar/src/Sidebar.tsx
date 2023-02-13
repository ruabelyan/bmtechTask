import { useState } from "react";

import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import userImage from "./assets/image-avatar.jpg";
import { ClosedSideBar, Container, Content, OpenSideBar } from "./style";

export function Sidebar() {
  const [sideBar, setSideBar] = useState(false);

  function handleChangeSideBar() {
    setSideBar((prevState) => !prevState);
  }
  return (
    <Container>
      <Content>
        {!sideBar ? (
          <ClosedSideBar>
            <nav>
              <div>
              <svg height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 17 16"><g stroke="none" stroke-width="1" fill="#000" fill-rule="evenodd"><path d="M8.931,7.986 L13.744,1.643 C12.408,0.617 10.743,-0.000999999989 8.931,-0.000999999989 C4.551,-0.000999999989 1,3.561 1,7.956 C1,12.352 4.551,15.915 8.931,15.915 C12.448,15.915 15.426,13.615 16.464,10.434 L8.931,7.986 L8.931,7.986 Z M7.49947239,5 C6.6732325,5 6,4.3286418 6,3.50105559 C6,2.67241379 6.6732325,2 7.49947239,2 C8.3267675,2 9,2.67241379 9,3.50105559 C9,4.3286418 8.32782272,5 7.49947239,5 L7.49947239,5 Z" fill="#fff" ></path></g></svg> 
              </div>
              {/* TODO */}
              {/* <button onClick={handleChangeSideBar}>
                <ArrowRightIcon />
              </button> */}
            </nav>
            <div>
              <span>
                <button onClick={() => {}}>
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.502 11.342a.703.703 0 00-.588.128 7.499 7.499 0 01-2.275 1.33 7.123 7.123 0 01-2.581.46A7.516 7.516 0 018.74 11.06a7.516 7.516 0 01-2.198-5.316c0-.87.153-1.713.41-2.48.28-.817.69-1.559 1.226-2.197a.652.652 0 00-.102-.92.703.703 0 00-.588-.128C5.316.607 3.425 1.91 2.07 3.649A10.082 10.082 0 000 9.783C0 12.57 1.125 15.1 2.965 16.94a10.04 10.04 0 007.156 2.965c2.352 0 4.524-.818 6.262-2.173a10.078 10.078 0 003.579-5.597.62.62 0 00-.46-.793z"
                      fill="#7E88C3"
                      fill-rule="nonzero"
                    />
                  </svg>
                </button>
              </span>
              <div
                style={{ height: "2px", width: "90%", background: "#40445D" }}
              ></div>
              <span>
                <img src={userImage} alt="userImage" />
              </span>
            </div>
          </ClosedSideBar>
        ) : (
          <OpenSideBar>
            <section>
              <nav>
                <span>
                  <button onClick={handleChangeSideBar}>
                    <ArrowLeftIcon />
                  </button>
                </span>
                {/* TODO */}
                {/* <ul>
                  <a href="/" title="Test">
                    <DeleteIcon />
                    <p>Test</p>
                  </a>
                </ul> */}
              </nav>
              <div>
                <span>
                  <img src={userImage} alt="userImage" />
                  <p>User</p>
                </span>
              </div>
            </section>
            <aside onClick={handleChangeSideBar} />
          </OpenSideBar>
        )}
      </Content>
    </Container>
  );
}
