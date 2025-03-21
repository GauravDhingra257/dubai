import React from "react";

// Define types for triangle images
interface TriangleImageMap {
  [key: string]: string;
}

// Define types for a single triangle configuration
interface TriangleConfig {
  imageKey?: string;
  imageSrc?: string;
  position: { x: number; y: number };
  zIndex: number;
  rotation?: number;
  scale?: number;
  alt?: string;
}

// Props for the TriangleImage component
interface TriangleImageProps {
  imageSrc: string;
  position: { x: number; y: number };
  zIndex: number;
  rotation: number;
  scale: number;
  alt: string;
}

// Props for the TriangleArrangement component
interface TriangleArrangementProps {
  triangleImages: TriangleImageMap;
  arrangement?: "custom";
  customTriangles?: TriangleConfig[];
  containerStyle?: React.CSSProperties;
}

// Triangle image component that works with your existing triangle image assets
const TriangleImage: React.FC<TriangleImageProps> = ({
  imageSrc,
  position = { x: 0, y: 0 },
  zIndex = 1,
  rotation = 0,
  scale = 1,
  alt = "Triangle decoration",
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        zIndex: zIndex,
        transform: `rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: "center",
      }}
    >
      <img loading="lazy" 
        src={imageSrc}
        alt={alt}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

// Main component for triangle arrangement
const TriangleArrangement: React.FC<TriangleArrangementProps> = ({
  triangleImages,
  arrangement = "featured",
  customTriangles = [],
  containerStyle = {},
}) => {
  // Define the standard arrangements
  const getArrangement = (): TriangleConfig[] => {
    const arrangements: Record<string, TriangleConfig[]> = {
      featured: [
        {
          imageKey: "blueTriangle",
          position: { x: 0, y: 0 },
          zIndex: 1,
        },
      ],
      leadership: [
        {
          imageKey: "blueTriangle",
          position: { x: 0, y: 0 },
          zIndex: 1,
        },
      ],
      faq: [
        {
          imageKey: "blueTriangle",
          position: { x: 0, y: 30 },
          zIndex: 1,
          scale: 1.2,
        },
        {
          imageKey: "whiteSmallTriangle",
          position: { x: 120, y: 0 },
          zIndex: 2,
        },
      ],
      custom: customTriangles,
    };

    return arrangements[arrangement] || arrangements.featured;
  };

  const triangles = getArrangement();

  return (
    <div
      style={{
        position: "relative",
        ...containerStyle,
      }}
    >
      {triangles.map((triangle, index) => {
        // For custom arrangement, use imageSrc directly
        const imageSrc =
          triangle.imageSrc ||
          (triangle.imageKey && triangleImages[triangle.imageKey]) ||
          "";

        return (
          <TriangleImage
            key={index}
            imageSrc={imageSrc}
            position={triangle.position}
            zIndex={triangle.zIndex}
            rotation={triangle.rotation || 0}
            scale={triangle.scale || 1}
            alt={triangle.alt || `Triangle decoration ${index + 1}`}
          />
        );
      })}
    </div>
  );
};
