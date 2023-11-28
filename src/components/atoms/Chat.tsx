import { Icon } from '@iconify/react/dist/iconify.js';
import DropdownIcon from './DropdownIcon';

const Chat = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
  <div className="flex flex-col flex-grow w-full max-w-xl overflow-hidden">
    <div className="flex flex-col flex-grow overflow-auto space-y-4 scroll-smooth " style={{ maxHeight: "400px", overflow: "scroll" }}>
        {/* Chat pertama */}
        <div className="flex w-full space-x-3 max-w-md ml-3">
        <div className="relative">
     <DropdownIcon/>
        </div>
            <div className="bg-quicks-chats-purple-light p-3 rounded-r-lg rounded-bl-lg">
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span className="text-xs pt-2 text-quicks-primary-black leading-none flex text-right ml-auto">2 min ago</span>
          </div>
        </div>
              {/* Batas */}
        
            <div className="text-center mt-4">
            <hr className="w-full border-t-2 border-quicks-primary-grey  mt-4" />
            <span className="relative inline-block px-4 bg-white text-quicks-primary-grey text-base -top-3">
            Today June 09, 2021            
            </span>
          </div>
          <p className="text-left text-quicks-chats-orange text-sm ml-auto">Mary Hilda</p>
          <div className="flex w-full mt-2 space-x-3 max-w-md ml-auto justify-end">
            <div className="flex">
              <div className="bg-quicks-chats-orange-light text-quicks-primary-black p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <span className="text-xs pt-2 text-gray-500 leading-none flex text-right ml-auto">2 min ago</span>
              </div>
              <DropdownIcon/>
            </div>
          </div>

          {/* Chat kedua */}
          <p className="text-left text-quicks-chats-purple text-sm ml-auto">You</p>

          <div className="flex w-full mt-2 space-x-3 max-w-md">
            <div className="flex">
              <Icon icon="majesticons:more-menu" width="24" height="24" />
              <div className="bg-quicks-chats-purple-light p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="text-xs pt-2 text-quicks-primary-black leading-none flex text-right ml-auto">2 min ago</span>
              </div>
            </div>
          </div>
          <p className="text-left text-quicks-chats-orange text-sm ">Mary Hilda</p>
          <div className="flex w-full mt-2 space-x-3 max-w-md ml-auto justify-end">
            <div className="flex">
              <div className="bg-quicks-chats-orange-light text-quicks-primary-black p-3 rounded-l-lg rounded-br-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <span className="text-xs pt-2 text-gray-500 leading-none flex text-right ml-auto">2 min ago</span>
              </div>
              <Icon icon="majesticons:more-menu" width="24" height="24" />
            </div>
          </div>
        {/* Batas */}

          <div className="text-center mt-4">
            <hr className="w-full border-t-2 border-quicks-indicator-red  mt-4" />
            <span className="relative inline-block px-4 bg-white text-quicks-indicator-red text-base -top-3">
              New Message
            </span>
          </div>
          {/* Chat ketiga */}
          <p className="text-left text-quicks-chats-green text-sm ">Obaidullah Amarkhil</p>
          <div className="flex w-full mt-2 space-x-3 max-w-md">
            <div className="flex">
              <Icon icon="majesticons:more-menu" width="24" height="24" />
              <div className="bg-quicks-chats-green-light p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <span className="text-xs pt-2 text-quicks-primary-black leading-none flex text-right ml-auto">2 min ago</span>
              </div>
            </div>
          </div>
          <div>
          <span className="inline-flex items-center rounded-md bg-quicks-stickers-white px-2 py-1 text-xs font-medium text-quicks-primary-blue ring-1 ring-inset ring-gray-500/10">
        New Message
      </span>   
          </div>
      
          <div className="flex ml-2 ">
            <input className="border rounded-sm p-2 border-quicks-primary-black text-sm w-full" type="text" placeholder="Type a new message…" />
        <button className="bg-quicks-primary-blue py-2 px-4 ml-2 rounded-md text-white">Send</button>
        </div>


        </div>
      </div>
    </div>
  );
};

export default Chat;
