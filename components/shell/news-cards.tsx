import Image from "next/image";
import { Card } from "@/components/ui/card";
import { news } from "@/app/data/news";

export function NewsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {news.map((n) => (
        <Card key={n.id}>
          <div className="relative w-full h-40 rounded-xl overflow-hidden">
            <Image src={n.image} alt={n.title} fill className="object-cover" />
          </div>
          <div className="mt-3">
            <p className="text-xs text-muted">{new Date(n.date).toLocaleDateString()}</p>
            <h3 className="text-lg font-semibold">{n.title}</h3>
            <p className="text-sm text-muted mt-1">{n.summary}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
