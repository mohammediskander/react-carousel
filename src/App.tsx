import './App.css'
import {Feature} from "./components/FeatureCard";
import FeaturesCarousel from "./components/FeaturesCarousel";

const features: Feature[] = [
    {
        id: 1,
        icon: "/assets/images/automated.svg",
        title: "مؤتمت",
        description: "تقدم خدمة تبيان عملية مؤتمته بشكل كامل عبر خدمة الذكاء الإصطناعي لقراءة قاعدة بيانات واسعة."
    },
    {
        id: 2,
        icon: "/assets/images/time.svg",
        title: "لحظي",
        description: "يتم تقديم بيان تبيان بشكل لحظي تبعا للمدخلات المعرفة للسيارة."
    },
    {
        id: 3,
        icon: "/assets/images/trusted.svg",
        title: "موثوق",
        description: "تعتمد خدمة تبيان قاعدة موثوقة لقراءة السوق السعودي."
    }
]

function App() {

  return (
    <div className="flex bg-light h-screen">
        <div className="flex flex-col md:flex-row gap-5 p-10 h-2/5 w-full">
            <div
                className="flex-row md:flex-col gap-3 flex md:justify-center justify-start z-0"
            >
              <p className="flex text-4xl font-black sm:text-5xl md:text-6xl lg:text-7xl text-secondary">مزايا</p>
              <p className="flex text-4xl font-black sm:text-5xl md:text-6xl lg:text-7xl text-primary">تبيان</p>
            </div>
            <FeaturesCarousel className="flex flex-row gap-4 w-full" data={features} />
        </div>
    </div>
  )
}

export default App
