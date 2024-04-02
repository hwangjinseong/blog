import { css } from "@/styled-system/css";
import { hstack } from "@/styled-system/patterns";
import { PropsWithChildren } from "react";

function Phrase({ children }: PropsWithChildren) {
  const phraseContainerStyle = hstack({
    w: "100%",
    h: "50px",
    alignItems: "center",
    marginY: "50px",
  });

  const phraseTextStyle = css({
    fontSize: "30px",
    sm: { fontSize: "35px" },
    fontWeight: "bold",
    color: "primary",
  });

  return (
    <div className={phraseContainerStyle}>
      <p className={phraseTextStyle}>{children}</p>
    </div>
  );
}

export default Phrase;
