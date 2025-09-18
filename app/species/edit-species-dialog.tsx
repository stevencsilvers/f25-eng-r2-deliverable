"use client";

import { Icons } from "@/components/icons";
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
import { useState } from "react";
import SpeciesForm, { FormData } from "./species-form";

type Species = Database["public"]["Tables"]["species"]["Row"];

type EditSpeciesProps = {
  species: Species;
  userId: string;
};

export default function EditSpeciesDialog({ species, userId }: EditSpeciesProps) {
  // Control open/closed state of the dialog
  const [open, setOpen] = useState<boolean>(false);

  const onSubmit = () => {
    setOpen(false);
  };

  const initialValues: Partial<FormData> = {
    scientific_name: species.scientific_name,
    common_name: species.common_name,
    kingdom: species.kingdom,
    total_population: species.total_population,
    image: species.image,
    description: species.description,
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-3 h-12 w-12 rounded-full bg-stone-300 transition duration-200 ease-in-out hover:scale-105 hover:bg-stone-300">
          <Icons.settings className="h-6 w-6 scale-150" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Species</DialogTitle>
          <DialogDescription>
            Edit information about {species.scientific_name}. Click &quot;Edit Species&quot; below when you&apos;re
            finished.
          </DialogDescription>
        </DialogHeader>
        <SpeciesForm userId={userId} defaultValues={initialValues} species={species} submitCall={onSubmit} />
      </DialogContent>
    </Dialog>
  );
}
