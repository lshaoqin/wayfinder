"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function CommentAdd() {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    if (hasSubmitted) {
        return (
            <div className="bg-primary p-2 rounded-md text-sm text-center">
                Thank you for sharing your experience! We will review it and share it with others as soon as we can!
            </div>
        );
    }
    return (
        <>
            <Label htmlFor="comment" className="py-2 font-semibold">How was your own experience?</Label>
            <Textarea id="comment"/>
            <Button type="submit" className="mt-2" onClick={() => {
                setHasSubmitted(true)
            }}>
                Submit
            </Button>
        </>
    )
}