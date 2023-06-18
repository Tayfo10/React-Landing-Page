import { useLayoutEffect } from "react";

export default function Blog() {
  // // This part can be used to navigate through arrows in blog section. It is designed to not make it static. CSS adjustment should also be done.
  //   useLayoutEffect(() => {
  //     let client1 = document.querySelector(".client1");
  //     console.log(client1);

  //     let client2 = document.querySelector(".client2");
  //     console.log(client2);

  //     let arrow = document.querySelector(".blogslider-btn");
  //     console.log(arrow);

  //     function clientChange() {
  //       client1?.classList.remove("client1");
  //       client1?.classList.add("client2");

  //       client2?.classList.remove("client2");
  //       client2?.classList.add("client1");
  //     }

  //     if (arrow) {
  //       arrow.addEventListener("click", clientChange);
  //     }

  //   });

  return (
    <>
      <div className="blogpage">
        <div className="blogcontainer">
          <div className="blogbox1">
            <h2>
              What people say <span>about us</span>
            </h2>
            <h3>
              Our Clients send us bunch of smilies with our services and we love
              them.
            </h3>
            <div className="blogslider-btn">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  transform="matrix(-1 0 0 1 40 0)"
                  fill="#FEFCFB"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="19.5"
                  transform="matrix(-1 0 0 1 40 0)"
                  stroke="#999999"
                  stroke-opacity="0.5"
                />
                <path
                  d="M11.2929 20.7071C10.9024 20.3166 10.9024 19.6834 11.2929 19.2929L17.6569 12.9289C18.0474 12.5384 18.6805 12.5384 19.0711 12.9289C19.4616 13.3195 19.4616 13.9526 19.0711 14.3431L13.4142 20L19.0711 25.6569C19.4616 26.0474 19.4616 26.6805 19.0711 27.0711C18.6805 27.4616 18.0474 27.4616 17.6569 27.0711L11.2929 20.7071ZM28 21H12V19H28V21Z"
                  fill="#999999"
                  fill-opacity="0.5"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="20" fill="#FA7436" />
                <path
                  d="M28.7071 20.7071C29.0976 20.3166 29.0976 19.6834 28.7071 19.2929L22.3431 12.9289C21.9526 12.5384 21.3195 12.5384 20.9289 12.9289C20.5384 13.3195 20.5384 13.9526 20.9289 14.3431L26.5858 20L20.9289 25.6569C20.5384 26.0474 20.5384 26.6805 20.9289 27.0711C21.3195 27.4616 21.9526 27.4616 22.3431 27.0711L28.7071 20.7071ZM12 21H28V19H12V21Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className="blogbox2">
            <div className="client1">
              <img src="./assets/blog.png" alt="" />
              <p>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <h3>Mike taylor</h3>
              <h4>Lahore, Pakistan</h4>
            </div>
            <div className="client2">
              <p>
                “On the Windows talking painted pasture yet its express parties
                use. Sure last upon he same as knew next. Of believed or
                diverted no.”
              </p>
              <h3>Chris Thomas</h3>
              <h4>CEO of Red Button</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
