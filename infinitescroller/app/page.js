import InfiniteScrollView from "@/components/InfiniteScrollView";

const initialData = Array.from({ length: 50 }, (_, i) => ({
    name: `User_${i + 1}`,
}));

export default function Home() {
    return <InfiniteScrollView initialData={initialData} />;
}