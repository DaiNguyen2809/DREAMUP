import React from "react";

const SubTitle = React.memo(({ children }) => {
    return <p className="mt-3 text-xl font-gilroy_bold_italic text-yellowCF">{children}</p>;
});
export default SubTitle;
