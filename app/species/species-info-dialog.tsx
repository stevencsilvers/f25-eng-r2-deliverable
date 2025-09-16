import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";
import EditSpeciesDialog from "./edit-species-dialog";

type Species = Database["public"]["Tables"]["species"]["Row"];

export default function SpeciesInfoDialog({ species }: { species: Species }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-3 w-full">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{species.scientific_name}</DialogTitle>
          <DialogDescription>
            <br />
            <div className="font-extrabold  text-emerald-500">{species.common_name && species.common_name}</div>
            <div>{species.total_population && "Total population: " + species.total_population}</div>
            <div>Kingdom: {species.kingdom}</div>
            <br />
            <hr />
            <br />
            <div>{species.description}</div>
          </DialogDescription>
        </DialogHeader>
        <EditSpeciesDialog species={species} />
      </DialogContent>
    </Dialog>
  );
}
