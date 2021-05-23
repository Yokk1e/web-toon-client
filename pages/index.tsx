import { CardList } from "../components/CardList";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Header />
        <CardList />
      </div>
    </div>
  );
}
