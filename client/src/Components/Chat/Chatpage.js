import { BsEmojiSmile, BsFillEmojiSmileFill } from "react-icons/bs";

function Chat(props) {
  return (
    <div className={props.className}>
      <div className="flex justify-between items-center px-5 bg-[#ffff] w-[100%]">
        <div className="flex items-center gap-x-[10px]">
          <div className="flex flex-col items-start justify-center">
            <h5 className="text-[17px] text-[#2b2e33] font-bold tracking-wide">
              {"to be fixed"}
            </h5>
            <p className="text-[11px] text-[#aabac8]">Last seen 5 min ago</p>
          </div>
        </div>
      </div>

      <div className="scrollbar-hide w-[100%] h-[70vh] md:h-[66vh] lg:h-[69vh] flex flex-col overflow-y-scroll p-4">
        <div className="ml-7 -mb-10">
          <p>Typing..</p>
        </div>
      </div>

      <div className="absolute left-[31%] bottom-[8%]">
        <div className="border-[1px] border-[#aabac8] px-6 py-3 w-[360px] sm:w-[400px] md:w-[350px] h-[50px] lg:w-[400px] rounded-t-[10px]">
          <form onKeyDown={""}>
            <input
              onChange={""}
              className="focus:outline-0 w-[100%] bg-[#f8f9fa]"
              type="text"
              name="message"
              placeholder="Enter message"
              value={""}
            />
          </form>
        </div>

        <div className="border-x-[1px] border-b-[1px] bg-[#f8f9fa] border-[#aabac8] px-6 py-3 w-[360px] sm:w-[400px] md:w-[350px] lg:w-[400px] rounded-b-[10px] h-[50px]">
          <div className="flex justify-between items-start">
            <div className="cursor-pointer" onClick={""}>
              <BsFillEmojiSmileFill className="w-[20px] h-[20px] text-[#ffb02e] border-[black]" />
            </div>
            <button onClick={""}
              className="bg-[#f8f9fa] border-[2px] border-[#d4d4d4] text-[14px] px-2 py-[3px] text-[#9e9e9e] font-medium rounded-[7px] -mt-1"
              >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Chat;
