
import Image from "next/image";
import Props from "./component/props";

export default function Home() {
  return (
    <div className="bg-slate-500 font-medium text-left" >
      <Props name ="Usama" rollNo = {337638} center = "Govervor House Karachi" city="Karachi" day="Monday 2 to 5" /><br/>
      <Props name ="Arsalan" rollNo = {413635} center = "Govervor House Karachi" city="Karachi" day="Monday 2 to 5" / ><br/>
      <Props name ="Faisal" rollNo = {243458} center = "Govervor House Karachi" city="Karachi" day="Monday 2 to 5" / ><br/>
    </div>
   
  )
  }
