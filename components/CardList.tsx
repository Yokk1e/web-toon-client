import { Card } from "./Card";

export function CardList() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap ">
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
