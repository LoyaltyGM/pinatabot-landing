import React from "react";
import { createRoot } from "react-dom/client";
import CustomCursor from "custom-cursor-react";

function Landing() {
    return (
        <>
            <div className="scrollbar-hide bg-black">
                <CustomCursor
                    targets={[".custom-cursor"]}
                    customClass="custom-cursor"
                    dimensions={45}
                    fill="#ABB8C3"
                    targetScale={2.5}
                    smoothness={{
                        movement: 0.17,
                        scale: 0.3,
                        opacity: 0.2,
                    }}
                    targetOpacity={0.5}
                />
                <h1>Hello!</h1>
            </div>
        </>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Landing />);
