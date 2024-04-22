import Image from "next/image";

const DashboardLayout = ({ children }) => {
  return (
  <div className="h-screen w-screen relative">
    <aside className="absolute top-0 left-0 w-[200px] h-full border-r border-black/10">Mood</aside>
    <div className="ml-[200px]">
      <header className="h-[60px] border-b border-black/10">Hello</header>
        <div className="">
          {children}
        </div>
    </div>
</div>)
};

export default DashboardLayout;
