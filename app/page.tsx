import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import NewDrops from "@/components/NewDrops";
import Reviews from "@/components/Reviews";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <NewDrops />
      <Categories />
      <Reviews />
    </main>
  );
}
