import React from "react";

const NormalText = React.memo(({ children }) => {
    return <p className="mt-3 text-justify mb-6 text-lg leading-loose text-darkGreenCF">{children}</p>;
});
export default NormalText;
