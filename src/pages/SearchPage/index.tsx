import { getAllNumbers, verifyNumber } from "@/api/services/num-verify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { DataTable } from "./DataTable";
import { columns } from "./columns";

export interface NumberInterface {
  carrier: string;
  country_code: string;
  country_name: string;
  country_prefix: string;
  date: string;
  international_format: string;
  line_type: string | null;
  local_format: string;
  location: string;
  number: string;
  valid: boolean;
  _id: string;
}

export const SearchPage = () => {
  const [allNumbers, setAllNumbers] = useState<NumberInterface[]>([]);
  const [number, setNumber] = useState<string | undefined>();

  const verifyNumberHandler = async () => {
    try {
      if (typeof number !== "undefined") {
        const { data } = await verifyNumber(number);
        setAllNumbers([data]);
      }
    } catch (e) {
      console.log({ e });
    }
  };

  const getAllNubmersHandler = async () => {
    try {
      const { data } = await getAllNumbers();
      setAllNumbers(data);
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    if (!number || number?.length === 0) {
      getAllNubmersHandler();
    }
  }, [number]);

  return (
    <div className="container mx-auto">
      <div className="my-8 md:w-[500px] md:mx-auto w-full flex flex-col gap-4">
        <Label className="text-3xl font-serif">Insert a phone number</Label>
        <Input
          onChange={(e) => setNumber(e.target.value)}
          type="number"
          className="border-black input"
          pattern="\d*"
          placeholder="+20123456789"
        />
        <Button onClick={verifyNumberHandler}>Check</Button>
      </div>
      <div className="my-8">
        <DataTable columns={columns} data={allNumbers} />
      </div>
    </div>
  );
};
