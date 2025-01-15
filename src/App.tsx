import { MouseEvent, useLayoutEffect, useState } from "react"
import { TextsContainer } from "./components/texts-container";
import { IllustrationsContainer } from "./components/illustrations-container";
import { Credits } from "./components/credits";

function App() {
  const [clipPathLeftValue, setClipPathLeftValue] = useState('100px');

  const [isDragging, setIsDragging] = useState(false) ;

  function handleMouseMove(e: MouseEvent) {
    if(!isDragging) return ;

    setClipPathLeftValue(`${e.clientX}px`);
  }

  useLayoutEffect(() => {
    setClipPathLeftValue(`${window.innerWidth / 2}px`)
  }, [])


  return (
    <section
      onMouseUp={() => setIsDragging(false)}
      onMouseMove={handleMouseMove} 
      className="w-full h-dvh overflow-hidden"
    >
      <div className="fixed lg:hidden inset-0 z-50 bg-white flex items-center justify-center">
        <span className="text-lg font-semibold">
          Please, use a computer !
        </span>
      </div>
      {/* white theme  */}
      <section className="absolute inset-0 bg-white grid grid-cols-2">
        <Credits />
        <TextsContainer theme="light" />
        <IllustrationsContainer theme="light" />
      </section>
      {/* dark theme  */}
      <section
        style={{ clipPath: `inset(0px 0px 0px ${clipPathLeftValue})` }} 
        className="absolute z-40 inset-0 bg-black text-white grid grid-cols-2"
      >
        {/* cursor  */}
        <div
          onMouseDown={() => setIsDragging(true)}
          style={{ transform: `translateX(${clipPathLeftValue})` }}
          className="absolute left-0  top-0 h-full w-1 cursor-w-resize z-50" 
        />
        <Credits />
        <TextsContainer theme="dark" />
        <IllustrationsContainer theme="dark" />
      </section>
    </section>
  )
}

export default App
