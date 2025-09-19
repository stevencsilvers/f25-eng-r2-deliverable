"use client";

import type { Database } from "@/lib/schema";
import Image from "next/image";
import EditSpeciesDialog from "./edit-species-dialog";
import SpeciesInfoDialog from "./species-info-dialog";
type Species = Database["public"]["Tables"]["species"]["Row"];

interface SpeciesCardProps {
  species: Species;
  sessionId: string;
}

export default function SpeciesCard({ species, sessionId }: SpeciesCardProps) {
  return (
    <div className="m-4 flex w-72 min-w-72 flex-col rounded border-2 p-3 shadow">
      {species.image && (
        <div className="relative h-40 w-full">
          <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "cover" }} />
        </div>
      )}
      <h3 className="mt-3 text-2xl font-semibold">{species.scientific_name}</h3>
      <h4 className="text-lg font-light italic">{species.common_name}</h4>
      <p>
        {species.description
          ? species.description.slice(0, 150).trim() + (species.description.length > 150 ? "..." : "")
          : ""}
      </p>
      <div className={"gap 2 mt-auto flex " + (sessionId === species.author ? "justify-between" : "justify-end")}>
        {sessionId === species.author && <EditSpeciesDialog species={species} userId={sessionId} />}
        <SpeciesInfoDialog species={species} />
      </div>
    </div>
  );
}
