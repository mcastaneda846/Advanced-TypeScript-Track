import React from "react";

interface BadgeProps {
  label: string;
  status?: "success" | "warning" | "info" | "error" | "neutral";
  icon?: React.ReactNode;
}

export const Badge = ({ label, status = "neutral", icon }: BadgeProps) => {
  const colors = {
    success: "#40bd40ff",
    warning: "orange",
    info: "#B2A59B",
    error: "#red",
    neutral: "#DED0B6",
  };

  return (
    <span
      style={{
        backgroundColor: colors[status],
        color: "#FAEED1",
        padding: "6px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      {icon && <span>{icon}</span>}
      {label}
    </span>
  );
};
