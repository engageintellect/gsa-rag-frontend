"use client";

import { useEffect, useState, useRef } from "react";
import PocketBase from "pocketbase";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import path from "path";
import { LiaCircleNotchSolid } from "react-icons/lia";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null); // Add type annotation for inputRef
  const [query, setQuery] = useState("");
  const [sentQuery, setSentQuery] = useState("");
  const [result, setResult] = useState({ text: "", link: "", source: "" });
  const [loading, setLoading] = useState(false);

  async function getPages() {
    try {
      const testing = await fetch("/api/getPages", {
        method: "GET",
      });

      const json = await testing.json();
      console.log("result: ", json);
    } catch (err) {
      console.log("err:", err);
    }
  }

  async function createIndexAndEmbeddings() {
    try {
      const result = await fetch("/api/setup", {
        method: "POST",
      });
      const json = await result.json();
      console.log("result: ", json);
    } catch (err) {
      console.log("err:", err);
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field on page load
    }
  }, []);

  useEffect(() => {
    async function addToSearches() {
      try {
        const pb = new PocketBase("https://engage-dev.com");
        const data = {
          query: sentQuery,
          result: result.text,
        };

        const record = await pb.collection("searches").create(data);
        console.log("search record added to PocketBase...");
      } catch (err) {
        console.log("err:", err);
      }
    }

    if (result.text) {
      addToSearches();
    }
  }, [result]);

  async function sendQuery() {
    if (!query) return;
    setResult({ text: "", link: "", source: "" });
    setLoading(true);

    console.log('hello there world')

    try {
      const response = await fetch("/api/read", {
        method: "POST",
        body: JSON.stringify(query),
      });

      const json = await response.json();
      setResult(json.data);
      setSentQuery(query);
      setLoading(false);
      setQuery("");
    } catch (err) {
      console.log("err:", err);
      setLoading(false);
    }
  }

  return (
    <div>
      <Nav />

      <div className="relative -z-[1]">
        <div className="w-full object-cover h-full relative">
          <Image src="/tech_network.jpg" alt="logo" className="w-full h-64 sm:h-72 md:h-80 border border-gray-900" width={200} height={200} />
        </div>

        <div className="absolute top-0 w-full h-full flex justify-center items-center opacity-50 bg-gradient-to-b from-gray-950 to-gray-700"></div>

        <div className="absolute top-0 w-full h-full flex justify-center items-center pb-10">
          <div className="hero h-full">
            <div className="hero-content text-center">
              <div className="max-w-lg">
                <div className="text-5xl sm:text-7xl font-semibold text-white drop-shadow">
                  Se<span className="text-fuchsia-700"></span>arch <span className="font-thin text-blue-400 drop-shadow">GSA</span>
                </div>
                <p className="py-3 text-white sm:text-lg drop-shadow">
                  You have questions, we have answers.
                </p>
                {/* <div className="bg-white flex gap-2 items-center border border-primary rounded">
                  <div>
                    <FaSearch className="text-primary h-7 w-7 pl-2" />
                  </div>
                  <div className="flex gap-2 w-full">
                    <input
                      ref={inputRef} // Add the ref to the input element
                      className="w-full focus:outline-none"
                      placeholder="Ask a question..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          sendQuery();
                        }
                      }}
                    />
                    <button className="btn btn-primary rounded-l-none hover:shadow" onClick={sendQuery}>
                      Search
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>







      <main className="min-h-screen flex flex-col bg-base-100 items-center max-w-3xl mx-auto border border-primary rounded shadow-lg -mt-20 mb-10 p-5">
        <div className="mb-10 w-full">


                <div className="bg-white flex gap-2 items-center border border-primary rounded mb-5 w-full max-w-lg mx-auto">
                  <div>
                    <FaSearch className="text-primary h-7 w-7 pl-2" />
                  </div>
                  <div className="flex gap-2 w-full">
                    <input
                      ref={inputRef} // Add the ref to the input element
                      className="w-full focus:outline-none"
                      placeholder="Ask a question..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          sendQuery();
                        }
                      }}
                    />
                    <button className="btn btn-primary rounded-l-none hover:shadow" onClick={sendQuery}>
                      Search
                    </button>
                  </div>
                </div>




          {loading && (
            <>
              <div className="flex flex-col items-center pb-10 bg-red-300">
                <div>
                  <LiaCircleNotchSolid className="w-32 h-32 animate-spin" />
                </div>

                <div className="animate-bounce flex flex-col items-center">
                  <div className="text-lg">Thinking...</div>
                </div>
              </div>
            </>
          )}

          {result.text ? (
            <div className="pb-10">
              <div className="chat chat-end">
                <div className="chat-header">Me</div>
                <div className="chat-bubble bg-purple-500 shadow-lg p-4">
                  {sentQuery}
                </div>
              </div>

              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full shadow-md">
                    <Image
                      src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80"
                      width={200}
                      height={200}
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  Robot
                  {/* <time className="text-xs opacity-50">{new Date}</time> */}
                </div>
                <div className="chat-bubble shadow-lg p-4">
                  {result.text && <div>{result.text}</div>}
                </div>
                <div className="chat-footer">
                  {result.link && (
                    <div className="my-5">
                      <a
                        href={`${
                          process.env.NEXT_PUBLIC_WIKI_URL
                        }/pages/${path.basename(result.link, ".md")}`}
                        target="_blank"
                        className="btn btn-outline"
                      >
                        {/* {path.basename(result.link)} */}
                        Read More
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="divider"></div>

              <div className="p-2 sm:px-10 text-sm">
                {result.source && (
                  <>
                    <div className="border-primary p-4">
                      <span className="font-bold">Response Source:</span>
                      <div
                        dangerouslySetInnerHTML={{ __html: result.source }}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* {searchHistory.length > 0 ? (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold">Search History</h2>
            <div className="flex flex-col gap-2">{JSON.stringify(result)}</div>
          </div>
        ) : (
          ""
        )} */}

        {/* consider removing this button from the UI once the embeddings are created ... */}
        <div className="flex -mt-10 flex-col sm:flex-row gap-2 sm:gap-5  w-full items-center justify-center max-w-lg">
          <div className="w-full border border-gray-900 rounded">
            <button className="btn btn-ghost w-full" onClick={createIndexAndEmbeddings}>
              Index Docs
            </button>
          </div>

          <div className="w-full h-full flex shadow border border-gray-900 rounded">
            <button className="btn btn-ghost w-full" onClick={getPages}>
              Get Pages
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
