import { useState } from "react";

type FormData = {
  companyName: string;
  email: string;
  details: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: "",
    email: "",
    details: "",
  });

  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong");
      }

      console.log("Success:", data);

      setStatus("success");

      // reset form
      setFormData({
        companyName: "",
        email: "",
        details: "",
      });
    } catch (error) {
      console.error("Submission error:", error);

      setStatus("error");
    } finally {
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return {
    formData,
    status,
    handleChange,
    handleSubmit,
    setFormData,
  };
}
