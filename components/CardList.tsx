import { Card } from "./Card";

export function CardList() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap ">
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </div>
  );
}
