import Image from 'next/image'
import nextjs from '../../assets/images/nextjs.png'
import mongodb from '../../assets/images/mongodb.png'
import expresjs from '../../assets/images/expressjs.png'
import nodejs from '../../assets/images/nodejs.png'
import tailwind from '../../assets/images/tailwind.png'
import typescript from '../../assets/images/typescript.png'
import redux from '../../assets/images/redux.png'
import reactjs from '../../assets/images/reactjs.png'
import mysql from '../../assets/images/mysql.png'
export default function Skills() {
  return (
    <aside className="grid grid-cols-3 grid-flow-row  gap-4 w-full p-4">
      <div className="flex dark:bg-gray-200 px-1 rounded-lg relative">
        <Image layout="intrinsic" src={nextjs} alt="" />
      </div>
      <div className="flex relative">
        <Image layout="intrinsic" src={mongodb} alt="" />
      </div>
      <div className="flex dark:bg-gray-200 px-1 rounded-lg   relative">
        <Image layout="intrinsic" src={expresjs} alt="" />
      </div>
      <div className="flex relative">
        <Image layout="intrinsic" src={nodejs} alt="" />
      </div>
      <div className="flex relative">
        <Image layout="intrinsic" src={tailwind} alt="" />
      </div>
      <div className="flex relative">
        <Image layout="intrinsic" src={typescript} alt="" />
      </div>
      <div className="flex relative">
        <Image layout="intrinsic" src={mysql} alt="" />
      </div>
      <div className="flex relative">
        <Image layout="intrinsic" src={reactjs} alt="" />
      </div>
      <div className="flex relative">
        <Image layout="intrinsic" src={redux} alt="" />
      </div>
    </aside>
  )
}
