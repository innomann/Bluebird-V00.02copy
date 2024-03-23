import Chat from "./Chatpage";
import NotificationBadge from "react-notification-badge";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";



function Home() {
    return (
      <>
        <div className="bg-[#282C35!] scrollbar-hide z-10 h-[100vh]  lg:w-[90%] lg:mx-auto overflow-y-hidden shadow-2xl">
          <div className="flex">
            <div className="md:flex md:flex-col min-w-[360px] h-[100vh] md:h-[98.6vh] bg-[#ffff] relative">
              <div className="h-[61px] px-4">
                <div className="flex">
                  <a
                    className="flex items-center relative  -top-4 block h-[90px]"
                    href="/"
                  >
                    <h3 className="text-[20px] text-[#1f2228] font-body font-extrabold tracking-wider">
                      Messages
                    </h3>
                  </a>
                </div>

                <div className="absolute top-4 right-5 flex items-center gap-x-3">
                  <button onClick={""}>
                    <RiNotificationBadgeFill
                      style={{
                        width: "25px",
                        height: "25px",
                        color: "#319268",
                      }}
                    />
                  </button>
                  <div className="overflow-y-scroll scrollbar-hide tracking-wide absolute top-10 -left-32 z-10 w-[240px] bg-[#fafafa] px-4 py-2 shadow-2xl">
                    <div className="text-[13px]">{"No  messages"}</div>
                  </div>

                  <button
                    onClick={""}
                    className="flex items-center gap-x-1 relative"
                  >
                    <img
                      className="w-[28px] h-[28px] rounded-[25px]"
                      src={"pic"}
                      alt=""
                    />
                    <IoIosArrowDown
                      style={{
                        color: "#616c76",
                        height: "14px",
                        width: "14px",
                      }}
                    />
                  </button>
                </div>
              </div>
              <div>
                <div className="-mt-6 relative pt-6 px-4">
                  <form onSubmit={""}>
                    <input
                      onChange={""}
                      className="w-[99.5%] bg-[#f6f6f6] text-[#111b21] tracking-wider pl-9 py-[8px] rounded-[9px] outline-0"
                      type="text"
                      name="search"
                      placeholder="Search"
                    />
                  </form>

                  <div className="absolute top-[36px] left-[27px]">
                    <BsSearch style={{ color: "#c4c4c5" }} />
                  </div>

                  
                </div>
              </div>
            </div>
            <Chat className="chat-page relative lg:w-[100%] h-[100vh] bg-[#fafafa]" />
          </div>
        </div>
      </>
    );

}
export default Home;