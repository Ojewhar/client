import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function FilterTableData({ className }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="border border-gray-300 ">
          <Filter size={20} className="mr-2 " />
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className={
          className
            ? `${className} w-80 p-5 md:mr-[30px]`
            : "w-80 p-5 md:mr-[30px]"
        }
      >
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-xl font-semibold leading-none">Filtres</h4>
          </div>
          {/* filter body start */}
          <div>
            <div className="mb-4">
              <Label
                className="block font-normal text-lighttext"
                htmlFor="Revendeur"
              >
                Revendeur
              </Label>
              <select
                id="Revendeur"
                className=" px-2 py-1.5 mt-2 rounded-lg bg-white w-full block border"
              >
                <option value="all">All</option>
              </select>
            </div>
            <div className="mb-4">
              <Label
                className="block font-normal text-lighttext"
                htmlFor="commande"
              >
                Statut de la commande
              </Label>
              <select
                id="commande"
                className=" px-2 py-1.5 mt-2 rounded-lg bg-white w-full block border"
              >
                <option value="all">All</option>
              </select>
            </div>
            <div className="mb-4">
              <Label
                className="block font-normal text-lighttext"
                htmlFor="facturation"
              >
                Statut de la facturation
              </Label>
              <select
                id="facturation"
                className=" px-2 py-1.5 mt-2 rounded-lg bg-white w-full block border"
              >
                <option value="all">All</option>
              </select>
            </div>
            <div className="mt-2">
              <Button className=" rounded-xl text-white font-normal w-full">
                Filtrer
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
export default FilterTableData;
