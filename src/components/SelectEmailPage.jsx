import { Card, CardContent } from "@/components/ui/card";

const SelectEmailPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-[300px] bg-gradient-to-b from-gray-800 to-gray-900 text-center rounded-md shadow-lg">
        <CardContent className="p-6">
          <h1 className="text-white text-lg font-semibold">
            Select an Email
          </h1>
          <p className="text-gray-400 mt-2">
            Please select an email from the list to view its content.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectEmailPage;
