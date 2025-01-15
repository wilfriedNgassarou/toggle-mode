import clsx from "clsx";
import { bars } from "../constants/bars";

export function IllustrationsContainer({ theme }: { theme: 'light' | 'dark' }) {
  const shadowColor = theme == 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.08)'

  return (
    <div className="flex flex-col justify-center items-center px-10 text-sm">
      <div
        style={{ boxShadow: `inset 0px 0px 20px ${shadowColor}` }} 
        className={clsx(
          "border-2 p-4 rounded-2xl relative z-20",
          theme == 'light' ? 'border-black/10' : 'border-gray-100/20'
        )}
      >
        <div className="flex gap-2 mb-8">
          <div 
            className={clsx(
              "w-12 h-12  rounded-full flex items-center justify-center gap-1",
              theme == 'light' ? 'bg-black' : 'bg-white'
            )}
          >
            <div className={ clsx("w-1 h-5 rounded-full", theme == 'light' ? 'bg-white' : 'bg-black') }  />
            <div className={ clsx("w-1 h-5 rounded-full", theme == 'light' ? 'bg-white' : 'bg-black') }  />
          </div>
          <div className="h-12 flex-grow flex justify-between">
            {bars.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "h-full w-0.5 rounded-full",
                  theme == 'light' ? 'bg-black' : 'bg-white',
                  index > 40 && 'bg-opacity-40'
                )}
                style={{ transform: `scaleY(${item.scaleY})` }}
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Transcription</h4>
          <p className=" text-gray-600">
            Hey, this is Dave. I wanted to give you a quick update on the Voice Notes Al project. We just implemented the new transcription feature and it's working <span className={clsx("font-semibold", theme == 'light' ? 'text-black' : 'text-white') }>great</span>. Users can now easily convert their voice recordings into text and interact with them using our Al chat. Let me know if you have any questions or need further details. Talk soon!
          </p>
        </div>
      </div>
      <div className="w-full px-14 relative -top-px">
        <div 
          className={clsx(
            "w-full h-18 flex flex-col justify-end gap-2 pl-32 border-2 rounded-bl-3xl border-r-transparent border-t-transparent",
            theme == 'light' ? 'border-gray-100' : 'border-gray-100/20'
          )}
        >
          <div 
            className={clsx(
              "relative top-5 flex items-center gap-1 ",
              theme == 'light' ? 'text-black' : 'text-gray-400'
            )}
          >
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img src="/founders/wilfried2.webp" alt="Avatar" />
            </div>
            <span>Me • now</span>
          </div>
          <div 
            className={clsx(
              "w-full h-10 flex items-center px-4 relative top-5 rounded-xl",
              theme == 'light' ? 'bg-black text-white' : 'bg-white text-black'
            )}
          >
            <span className="">What is Voicenotes ?</span>
          </div>
        </div>
        <div 
          className={clsx(
            "w-full h-24 relative -top-5 flex flex-col justify-end gap-2 pl-20 border-2 rounded-bl-3xl border-r-transparent border-t-transparent",
            theme == 'light' ? 'border-gray-100' : 'border-gray-100/20'
          )}
        >
          <div 
            className={clsx(
              "relative top-5 flex items-center gap-1 ",
              theme == 'light' ? 'text-black' : 'text-gray-400'
            )}
          >
            <div className="w-5 h-5 border-[3px] rounded-full flex items-center justify-center border-black bg-white">
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>
            <span>Voicenotes • now</span>
          </div>
          <div 
            className={clsx(
              "w-full h-10 rounded-xl flex items-center px-4 relative top-5",
              theme == 'light' ? 'bg-gray-100 text-gray-500' : 'bg-gray-900 text-gray-400'
            )}
          >
            <span className="">
              It's new platform to transform voice recordings
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}