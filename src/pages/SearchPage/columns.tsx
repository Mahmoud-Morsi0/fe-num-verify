import { ColumnDef } from "@tanstack/react-table";
import { NumberInterface } from ".";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<NumberInterface>[] = [
  {
    accessorKey: "number",
    header: "Phone Number",
  },
  {
    accessorKey: "country_name",
    header: "Country",
  },
  {
    accessorKey: "valid",
    header: "Status",
    cell: ({ row }) => {
      const value = row.getValue("valid");
      return value === true ? (
        <AiOutlineCheck color="green" />
      ) : (
        <AiOutlineClose color="red" />
      );
    },
  },

  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const value = row.getValue("date");
      const date = new Date(value as string);

      const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Egypt",
        hour12: false,
      });

      const formattedDate = formatter.format(date);

      return formattedDate;
    },
  },
];
