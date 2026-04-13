import React from "react";

interface CardProps {
  title: string;
  type: "green" | "white" | "black";
  imageUrl?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = ({
  title,
  type,
  imageUrl,
  footer,
  children,
}: CardProps) => {
  const bgColor =
    type === "green" ? "#DED0B6" : type === "black" ? "#607274" : "#FAEED1";

  const textColor = type === "black" ? "#FAEED1" : "#607274";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{title}</h3>

      {imageUrl && (
        <img
          src={imageUrl}
          style={{
            width: "auto",
            height: "250px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      )}

      {/* BADGES */}
      <div style={{ marginBottom: "10px" }}>{children}</div>

      {/* FOOTER (BUTTON) */}
      {footer && <div>{footer}</div>}
    </div>
  );
};
