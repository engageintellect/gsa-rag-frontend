/* eslint-disable react/no-unescaped-entities */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Nav />
      <div className="max-w-3xl mx-auto px-4 md:p-10 min-h-screen">
        <div className="text-3xl my-10 font-bold">
          Unleashing the Power of AI and RAG: Contextual Search for Web Data and
          Documents
        </div>

        <div className="text-2xl my-2 font-semibold">About The Data:</div>
        <p className="mb-5">
          The demo contains a preloaded dataset featuring 27 BUY.GSA.GOV Buyers
          Guide documents. This curated selection provides a realistic scenario
          to explore the system’s capabilities, including its ability to
          identify, analyze, and extract standard language from existing
          documents.{" "}
        </p>
        {/* <ul>
          <li>InductiveHealth Informatics, Inc.</li>
          <li>T-Metrics, Inc</li>
          <li>Aperia Solutions, Inc.</li>
        </ul> */}
      </div>
      <Footer />
    </>
  );
}
