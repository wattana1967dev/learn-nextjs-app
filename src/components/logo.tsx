import Image from "next/image";

export const Logo = () => (
   <Image 
      src="/next.svg" 
      alt="โลโก้ Next.js" 
      width={0} 
      height={0}
      // loading="eager" คือ แสดงโลโก้โหลดเลย
      loading="eager"
      style={{
        width: 124,
        height: 32
      }}
    />
);
