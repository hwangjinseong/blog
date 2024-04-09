import { hstack } from "@/styled-system/patterns";
import { Header } from "@/widgets/header/ui";
import { Phrase } from "@/widgets/phrase";

function Home() {
  const containerStyle = hstack({
    width: "calc(100% - 54px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1020px",
    margin: "1rem auto 2rem",
  });

  return (
    <div className={containerStyle}>
      <Header />
      <Phrase>개발은 언제나 즐겁게!</Phrase>
    </div>
  );
}

export default Home;
