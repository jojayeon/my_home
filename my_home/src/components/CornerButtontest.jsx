import React, { useState } from "react";

export default function CornerButtontest() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      style={{
        perspective: "1000px",
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#fefefe",
      }}
    >
      {/* 종이 컴포넌트 */}
      <div
        style={{
          width: "150px",
          height: "200px",
          position: "absolute",
          right: "40px",
          bottom: "40px",
          transformOrigin: "right bottom",
          transformStyle: "preserve-3d",
          transition: "transform 1s ease",
          transform: flipped
            ? "rotateZ(-45deg) rotateX(-180deg)"
            : "rotateZ(0deg) rotateX(0deg)",
          zIndex: 1,
        }}
      >
        {/* 앞면 */}
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            borderRadius: "8px",
          }}
        >
          앞면
        </div>

        {/* 뒷면 */}
        <div
          style={{
            backgroundColor: "#f0f0f0",
            width: "100%",
            height: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color: "#555",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
            borderRadius: "8px",
          }}
        >
          뒷면
        </div>
      </div>

      {/* 📌 버튼: 오른쪽 아래 */}
      {!flipped && (
        <button
          onClick={() => setFlipped(true)}
          style={{
            position: "absolute",
            right: "40px",
            bottom: "40px",
            padding: "12px 20px",
            backgroundColor: "#222",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            zIndex: 2,
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          다음 페이지 →
        </button>
      )}
    </div>
  );
}
