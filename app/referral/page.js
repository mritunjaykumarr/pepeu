"use client";

import { Suspense } from "react";
import ReferredUser from "../_components/ReferredUser";


export default function ReferralPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReferredUser/>
    </Suspense>
  );
}
