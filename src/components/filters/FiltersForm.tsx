"use client";
import { useContext } from "react";
import FilterQuestion from "./FilterQuestion";
import { CurrentResourceContext } from "../CurrentResourceProvider";
import { filterQuestions } from "@/components/filters/FilterConfig";

export default function FiltersView() {
    const ctx = useContext(CurrentResourceContext);
    const { reset } = ctx;

    return (
        <div>
        {filterQuestions.map((group) => (
            <FilterQuestion key={group.question} group={group} />
        ))}
        <button onClick={reset}>Clear Filters</button>
        </div>

    );
}