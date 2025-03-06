import { Roboto_Slab } from "next/font/google"

import LoginForm from "@/components/login-form";

const font = Roboto_Slab({ subsets: ["latin"]})

const LoginPage = () => {
    return (
  <main className="flex justify-center items-center h-screen w-11/12 md:w-1/3 ml-auto mr-auto">
    <div className="relative w-full p-[2px] border-2 border-transparent rounded-xl bg-clip-padding backdrop-blur-md">
      {/* 🌌 極光漸層邊框 */}
      <div 
        className="absolute inset-0 rounded-xl p-[2px]"
        style={{
          background: "linear-gradient(135deg, rgba(0, 255, 150, 0.6), rgba(0, 112, 255, 0.7), rgba(75, 0, 130, 0.6))"
        }}
      ></div>
      {/* 📦 內部卡片 */}
      <div className="relative bg-black/50 p-[2px] rounded-xl text-white">
        <LoginForm font={font} />
      </div>
    </div>
  </main>
    );
}

export default LoginPage;