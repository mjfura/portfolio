import { useEffect, useState } from "react"
import Layout from "../components/layout"

export default function Home(){
    const [mounted,setMounted]=useState(false);
    useEffect(()=>{
        setMounted(true);
    },[]);
    return(
        <Layout>
        <section className="min-h-screen flex flex-col items-center justify-center " >
            <h1 className={`text-4xl xl:text-7xl transition-all duration-500 mb-4 ${mounted?"tracking-widest ":" tracking-tighter "}`} >Marco Fura</h1>
            <h2 className="xl:text-3xl w-[32ch] whitespace-nowrap text-lg text-center block border-r-2 border-transparent animate-[typing_5s_steps(32),blink_.5s_10_step-end_alternate] overflow-hidden " >Fundador {'&'} CEO en Prysmo Solutions</h2>
            <h3 className="xl:text-xl w-[31ch] whitespace-nowrap text-sm text-center block border-r-2 border-transparent animate-[typing_5s_steps(31),blink_.5s_10_step-end_alternate] overflow-hidden " >FullStack Developer Nextjs MERN</h3>
        </section>

        </Layout>
    )
}