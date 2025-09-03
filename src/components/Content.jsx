import Riad from "./Riad";
import Farm from "./Farm";
import Boho from "./Boho";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <section className="grid grid-cols-[180px_1fr_1fr_1fr] gap-4 pt-6 h-screen">
      <Sidebar />

      {/* 3 Content Columns */}
      <Riad />
      <Farm />
      <Boho />
    </section>
  );
};

export default Content;
