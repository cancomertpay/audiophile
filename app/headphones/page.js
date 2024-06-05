import CategoryLayout from "@/components/UI/category-layout";
import { DUMMY_DATA } from "@/data";

function HeadphonesPage() {
  const sortedData = [...DUMMY_DATA].sort((a, b) => {
    if (a.new && !b.new) return -1;
    if (!a.new && b.new) return 1;
    return 0;
  });

  return <CategoryLayout categoryName="Headphones" data={sortedData} />;
}

export default HeadphonesPage;
