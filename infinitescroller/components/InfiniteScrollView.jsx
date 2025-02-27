"use client";
import { useState, useRef, useCallback } from "react";
import ScrollViewItem from "./ScrollViewItem";
import SkeletonItem from "./SkeletonItem";
import { fetchMockData } from "../lib/fakeApi";

export default function InfiniteScrollView({ initialData }) {
    const [data, setData] = useState(initialData);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const observer = useRef();

    const fetchMoreData = async () => {
        if (data.length >= 30000) {
            setHasMore(false);
            return;
        }
        
        setLoading(true);
        const newItems = await fetchMockData(data.length);
        setData((prev) => [...prev, ...newItems]);
        setLoading(false);
    };

    const lastItemRef = useCallback(
        (node) => {
            if (!hasMore || loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        fetchMoreData();
                    }
                },
                { threshold: 1 }
            );

            if (node) observer.current.observe(node);
        },
        [hasMore, loading]
    );

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Infinite Scroll List</h1>
            <div className="space-y-2">
                {data.map((item, index) => (
                    <ScrollViewItem
                        key={index}
                        item={item}
                        ref={index === data.length - 1 ? lastItemRef : null}
                    />
                ))}
                {loading && [...Array(5)].map((_, i) => <SkeletonItem key={i} />)}
            </div>
            {!hasMore && (
                <p className="text-center text-gray-500 mt-4">No more items to load.</p>
            )}
        </div>
    );
}
