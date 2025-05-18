import React from "react";

const Container = React.memo(({ children }) => {
    return <div className="w-full h-fit bg-lightCF flex flex-col justify-center items-center font-gilroy">{children}</div>;
});
export default Container;
