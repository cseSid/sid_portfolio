import { slugs } from "src/User";
import IconCloud from "./magicui/icon-cloud";
import { IconHexagon } from "@tabler/icons-react";

export function Loader() {
    return (
      <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4s] items-center justify-center px-20 pb-20 pt-8 ">
        <IconCloud iconSlugs={slugs} />
        <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]"  size={120} color="#64FFDA" stroke={1.25}/>
        <div className="absolute font-mono text-6xl text-primaryColor font-semibold -z-10" >SV</div>
      </div>
    );
  }