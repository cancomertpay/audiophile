import CategoryLayout from "@/components/UI/category-layout";

import { DUMMY_DATA } from "@/data";

function SpeakersPage() {
  const sortedData = [...DUMMY_DATA].sort((a, b) => {
    if (a.new && !b.new) return -1;
    if (!a.new && b.new) return 1;
    return 0;
  });

  return <CategoryLayout categoryName="Speakers" data={sortedData} />;
}

export default SpeakersPage;
