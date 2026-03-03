"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function MealSearchinput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  function handleChange(e) {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <input
      className="w-full p-3 border rounded"
      placeholder="Search meals..."
      value={searchQuery}
      onChange={handleChange}
    />
  );
}