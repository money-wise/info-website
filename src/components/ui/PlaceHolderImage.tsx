import React from "react";

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 300,
  height = 200,
  text = "Image",
  bgColor = "#E2E8F0",
  textColor = "#4A5568",
}) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        color: textColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "0.375rem",
      }}
      className="placeholder-image"
    >
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default PlaceholderImage;
