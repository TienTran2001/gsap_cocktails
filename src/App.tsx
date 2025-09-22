import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
    return (
        <div className="text-red-500 flex-center h-[100vh]">App</div>
    )
}

export default App