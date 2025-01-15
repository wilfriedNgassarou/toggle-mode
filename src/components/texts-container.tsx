import { clsx } from "clsx";
import { founders } from "../constants/founders";
import { ArrowRightSVG } from "./svgs/arrow-right-svg";
import { MeetSVG } from "./svgs/meet-svg";
import { StarSVG } from "./svgs/star-svg";
import { ZoomSVG } from "./svgs/zoom-svg";

export function TextsContainer({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <div className="flex pl-20 flex-col gap-3 justify-center">
      <h3 className="text-gray-400">
        <span className="border-[1px] rounded-full py-1 px-4">
          <span className="font-semibold">New:</span>
          <span> Integrate with </span>
          <span className="bg-white rounded inline-flex justify-center items-center w-5 h-5">
            <MeetSVG />
          </span>
          <span> Google Meets and </span>
          <ZoomSVG />
          <span> Zoom</span> 
        </span>
      </h3>
      <h1 className="font-semibold text-7xl">
        Transcribe and chat to your voice recordings
      </h1>
      <p className="text-gray-600">
        Effortlessly convert your voice recordings into text and engage in interactive AI conversations. 
      </p>
      <div className="flex items-center gap-4">
        <button 
          className="flex items-center justify-center gap-1 bg-blue-700 hover:bg-opacity-85 duration-150 text-white w-40 h-12 rounded-xl font-medium"
        >
          <span>Try now</span>
          <ArrowRightSVG />
        </button>
        <div className="flex">
          {founders.map((item, index) => (
            <div 
              key={item.id}
              className={clsx(
                "w-11 h-11 border-2 rounded-full relative overflow-hidden",
                theme == 'light' ? 'border-white' : 'border-gray-800'   
              )}
              style={{ left: index * -15 }}
            >
              <img src={item.src} alt="Avatar" />
            </div>
          ))}
        </div>
        <div 
          className="relative flex flex-col justify-center" 
          style={{ left: 4 * -15 }}
        >
          <div className="flex">
            {Array(5).fill(0).map((_, index) => <StarSVG key={index} />)}
          </div>
          <span className="font-medium text-gray-400">125+ Founders</span>
        </div>
      </div>
    </div>
  )
}