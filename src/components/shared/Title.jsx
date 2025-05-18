import React from "react";

const Title = React.memo(({ children }) => {
    return <h1 className="text-4xl font-gilroy_xbold text-greenCF">{children}</h1>;
});
export default Title;
