import MoveTitle from "../components/common/MoveTitle";
import Layout from "../components/layout";
import {AiOutlineCheck} from "react-icons/ai";
export default function About(){
    return(
        <Layout>
            <MoveTitle title={"Acerca de mí"} />
           
            <div className="flex flex-col ">

            <section className="min-h-screen flex justify-center items-center p-4 z-30" >
                <p className="w-[40rem] text-2xl " >Mi nombre es Marco Josué Fura Mendoza, soy un desarrollador fullstack MERN con Nextjs y Typescript. Apasionado por la programación, gestión y en resolver problemas con soluciones digitales. </p>
            </section>
            <section className="min-h-screen p-4 z-30 " >
                <div className="z-30" >
                <h2 className="text-6xl tracking-wider  " >Habilidades</h2>
                <ul className=" py-2 text-lg  w-[45rem] " >
                    <li className="my-2 flex " >
                        <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span> <p  >HTML, CSS, JavaScript, programación funcional y orientada a objetos (POO).</p>
                    </li>
                    <li className="my-2 flex">
                         <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span><p>Reactjs (Manejo de hooks personalizados, Contexts, useReducer, variables de entorno, request mediante Fetch, Axios, React Router).</p>
                    </li>
                    <li className="my-2 flex">
                        <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span> <p>Nextjs (ServerSideRendering, StaticSiteGeneration, optimización del SEO, uso de style jsx, useRouter, integración con Typescript, buenas prácticas y estructura de ficheros) </p>
                    </li>
                    <li className="my-2 flex">
                        <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span> <p>Autenticación y autorización por el front-end con NextAuthjs, Firebase y por el back-end con JWT(JsonWebToken) mediante middlewares. </p>
                    </li>
                    <li className="my-2 flex">
                         <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span><p>Responsive design usando un paradigma first mobile, media queries. Estilos mediante CSS puro, Bootstrap, Tailwind.</p>
                    </li>
                    <li className="my-2 flex">
                         <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span><p>Web scrapping con Puppetear</p>
                    </li>
                    <li className="my-2 flex">
                        <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span> <p>Construcción de API REST con buenas prácticas y arquitectura MVC ocupando Nodejs, Express, MongoDB, Mongoose, MySQL.</p>
                    </li>
                    <li className="my-2 flex ">
                        <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span> <p>Conocimientos básicos en C++, POO en Java, patrones de diseño, metodologías ágiles (SCRUM), Python, PHP y Postman para realizar peticiones.</p>
                    </li>
                </ul>
                </div>
                <div className="flex" >
                    
                </div>
            </section>
            <section className="min-h-screen flex flex-row-reverse p-4 z-30 " >
                <div  >
                    <h2 className=" text-6xl " >Formación Profesional</h2>
                    <ul className="text-lg w-[40rem] " >
                        <li className="flex my-2" >
                            <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span>
                            <p>

                            Formación en Ingeniería de Software en la Universidad Nacional Mayor de San Marcos (2017 - Actualidad)
                            </p>
                            </li>
                        <li className="flex my-2" >
                            <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span>
                            <p>

                            Inglés intermedio en el Centro de idiomas de la UNMSM
                            </p>
                        </li>
                        <li className="flex my-2" >
                            <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span>
                            <p>
                                Fundación y gerencia de Prysmo Solutions hasta la actualidad.
                            </p>
                        </li>
                    </ul>
                </div>
                <div></div>
            </section>
            <section className="min-h-screen relative p-4 z-30 flex flex-col items-center" >
                <h2 className="text-3xl" >¿Qué es Prysmo Solutions?</h2>
                <p className="w-96 text-center" >Empresa encargada en el desarrollo de sitios web para startups, negocios no digitalizados y todo tipo de proyectos en general con diferentes tecnologías.</p>
                <div className="w-96 h-[30rem] overflow-hidden bg-yellow-200 " >
                <article className="w-4/5 -left-1/4 -top-1/4 relative h-4/5 bg-red-300 animate-[prysmo_5s_infinite] " >
                <span className="w-4 h-4 bg-black absolute top-1/2 left-1/2 -mt-2 -ml-2 rounded-full animate-pulse " ></span>

                </article>
                </div>
            </section>
            </div>
         
        
        </Layout>
    )
}