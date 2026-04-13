import React from "react";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  text,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
}: ButtonProps) => {
  const colors = {
    primary: "#607274",
    secondary: "#B2A59B",
    danger: "#c0392b",
  };

  const padding =
    size === "sm" ? "6px 12px" : size === "lg" ? "14px 22px" : "10px 16px";

  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      style={{
        padding,
        backgroundColor: colors[variant],
        color: "#FAEED1",
        borderRadius: "6px",
        cursor: "pointer",
        opacity: disabled ? 0.6 : 1,
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {loading ? "Cargando..." : text}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};
