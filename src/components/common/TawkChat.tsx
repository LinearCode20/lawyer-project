"use client";

import { useEffect } from "react";

export default function TawkChat() {
  useEffect(() => {
    const waitForTawk = setInterval(() => {
      if ((window as any).Tawk_API) {
        (window as any).Tawk_API.onPrechatSubmit = async function (data: any) {
          console.log("Tawk Form Data:", data);

          // Tawk may send the prechat data as an array of { label, answer } pairs.
          // Normalize into an object with name, email, message.
          const normalize = (d: any) => {
            if (!d) return { name: "", email: "", message: "" };
            if (Array.isArray(d)) {
              const out: any = { name: "", email: "", message: "" };
              d.forEach((item: any) => {
                const label = (item.label || "").toString().toLowerCase();
                const answer = item.answer ?? "";
                if (label.includes("name")) out.name = answer;
                else if (label.includes("email")) out.email = answer;
                else if (label.includes("message") || label.includes("question") || label.includes("note")) out.message = answer;
                else out[label] = answer;
              });
              return out;
            }

            // If object, try common keys
            return {
              name: d.name ?? d.fullname ?? d.full_name ?? "",
              email: d.email ?? d.user_email ?? d.email_address ?? "",
              message: d.message ?? d.question ?? "",
            };
          };

          const payload = normalize(data);

          try {
            const res = await fetch("/api/save-lead", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                name: payload.name,
                email: payload.email,
                message: payload.message,
              }),
            });

            if (!res.ok) {
              const text = await res.text();
              console.warn("Failed to save lead, server responded:", res.status, text);
            } else {
              const json = await res.json().catch(() => null);
              console.log("Lead saved result:", json);
            }
          } catch (err) {
            console.error("Error saving lead:", err);
          }

          // Allow Tawk to continue submission regardless of lead save result
          return true;
        };

        clearInterval(waitForTawk);
      }
    }, 500);

    return () => clearInterval(waitForTawk);
  }, []);

  return null;
}