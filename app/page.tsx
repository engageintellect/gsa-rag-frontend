"use client";

import { useEffect, useState, useRef } from "react";
import PocketBase from "pocketbase";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import path from "path";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";
import { FaLock } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { BiSolidMessageDetail } from "react-icons/bi";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null); // Add type annotation for inputRef
  const [query, setQuery] = useState("");
  const [sentQuery, setSentQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false); // Track authentication state
  const secretCode = "81Z70GSA"; // Define your secret code here

  const samplePrompts = [
    "I am planning to order laptops for my employees using GSS. What are things to be aware of?",
    "I am planning to implement a zero trust architecture. Can you provide implementation guidance? who can I contact in GSA ?",
    "I am planning to implement a zero trust architecture. Can you provide details of product and services offered by GSA to help me?",
  ];

  // async function getPages() {
  //   try {
  //     const testing = await fetch("/api/getPages", {
  //       method: "GET",
  //     });

  //     const json = await testing.json();
  //     console.log("result: ", json);
  //   } catch (err) {
  //     console.log("err:", err);
  //   }
  // }

  // async function createIndexAndEmbeddings() {
  //   try {
  //     const result = await fetch("/api/setup", {
  //       method: "POST",
  //     });
  //     const json = await result.json();
  //     console.log("result: ", json);
  //   } catch (err) {
  //     console.log("err:", err);
  //   }
  // }

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
          result: result,
          ip: window.location.hostname,
        };

        const record = await pb.collection("searches").create(data);
        console.log("search record added to PocketBase...");
      } catch (err) {
        console.log("err:", err);
      }
    }

    if (result) {
      addToSearches();
    }
  }, [result]);

  //Function to handle authentication
  function authenticate() {
    const userCode = prompt("Please enter the secret code:");
    if (userCode === secretCode) {
      setAuthenticated(true);
    } else {
      alert("Incorrect code. Please try again.");
    }
  }

  async function sendQuery() {
    if (!query) return;
    setResult("");
    setLoading(true);

    console.log("USER QUERY:", query);

    try {
      const response = await fetch("/api/sendToClaude", {
        method: "POST",
        body: JSON.stringify({ user_question: query }),
      });

      const json = await response.json();
      console.log("SERVER RESPONSE:", json);
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
          <Image
            src="/land_gradient.jpg"
            alt="logo"
            priority={true}
            className="w-full h-full max-h-48 sm:max-h-72 border border-gray-900 object-cover saturate-200"
            width={500}
            height={500}
          />
        </div>

        <div className="absolute top-0 w-full h-full max-h-72 flex justify-center items-center opacity-50 bg-gradient-to-b from-gray-950 to-gray-700"></div>

        <div className="absolute top-0 w-full h-full flex justify-center items-center py-10">
          <div className="hero h-full">
            <div className="hero-content text-center">
              <div className="max-w-3xl">
                <div className="font-semibold text-white drop-shadow">
                  <div className="flex flex-col sm:flex-row items-center justify-center sm:mb-10 gap-2">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <span className="bg-blue-400 rounded">
                          <CiSearch className="text-white h-10 w-10" />
                        </span>

                        <div className=" text-white font-light drop-shadow text-4xl sm:text-5xl uppercase">
                          buy.gsa.gov
                        </div>
                      </div>
                    </div>
                    <div className=" text-fuchsia-700 font-light drop-shadow text-2xl sm:text-3xl">
                      2.0
                    </div>
                  </div>
                </div>
                {/* <p className="py-3 text-white font-thin sm:text-lg drop-shadow">
                  You have questions, we have answers.
                </p> */}

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
      <main className="min-h-screen h-full flex flex-col bg-base-100 items-center max-w-3xl mx-auto border border-primary sm:rounded shadow-xl sm:-mt-20 mb-10 p-2 sm:p-5">
        {!authenticated ? (
          // Only show authentication input when not authenticated
          <div className="w-full flex justify-center p-2">
            <button
              className="btn sm:hover:brightness-110 group flex gap-2 items-center btn-error sm:hover:shadow transition-all duration-200"
              onClick={authenticate}
            >
              <div>enter code to use demo</div>

              <div>
                <FaLock className="w-7 h-7 sm:group-hover:scale-[102%] transition-all duration-200" />
              </div>
            </button>
          </div>
        ) : (
          // Show something else when authenticated
          <>
            <div className="bg-white flex gap-2 items-center border border-primary rounded w-full max-w-3xl mx-auto">
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

                <button
                  className="btn btn-primary  rounded-l-none hover:shadow group"
                  onClick={sendQuery}
                >
                  <div className="sm:group-hover:scale-105 sm:group-hover:animate-pulse transition-all duration-200">
                    <IoIosSend className="w-7 h-7 " />
                  </div>
                </button>
              </div>
            </div>
          </>
        )}

        <div className="w-full ">
          {!loading && (
            <>
              {!result && (
                <>
                  <div className="divider"></div>
                  <div className="text-xs">
                    <strong>Disclaimer: </strong>
                    This is a demo application. The purpose of this application
                    is to demonstrate the capabilities of large language models
                    and their potential applications in contextual search and
                    information retrieval.
                  </div>

                  <div className="divider"></div>
                  <div className="text-xs w-full">
                    <strong>Sample Prompts:</strong>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 w-full text-xs pb-5">
                    <div className="w-full text-left bg-base-100 border rounded-bl-none border-gray-900 rounded p-2 italic sm:hover:shadow transition-all duration-300">
                      <button
                        className="text-left italic"
                        onClick={() => setQuery(samplePrompts[0])}
                      >
                        {samplePrompts[0]}
                      </button>
                    </div>

                    <div className="w-full text-left bg-base-100 border rounded-bl-none border-gray-900 rounded p-2 italic sm:hover:shadow transition-all duration-300">
                      <button
                        className="text-left italic"
                        onClick={() => setQuery(samplePrompts[1])}
                      >
                        {samplePrompts[1]}
                      </button>
                    </div>
                    <div className="w-full text-left bg-base-100 border rounded-bl-none border-gray-900 rounded p-2 italic sm:hover:shadow transition-all duration-300">
                      <button
                        className="text-left italic"
                        onClick={() => setQuery(samplePrompts[2])}
                      >
                        {samplePrompts[2]}
                      </button>
                    </div>
                  </div>
                </>
              )}

              <div className="divider"></div>
            </>
          )}

          {loading && (
            <>
              <div className="flex flex-col items-center py-10">
                <div className="animate-pulse">
                  <ImSpinner2 className="w-36 h-36 animate-spin" />
                </div>

                <div className="animate-bounce flex flex-col items-center mt-5">
                  <div className="text-lg">Thinking...</div>
                </div>
                <div className="text">
                  This may take up to a minute in demo mode.
                </div>
              </div>
            </>
          )}

          {result ? (
            <div className="">
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="rounded-full shadow-md p-2 border border-gray-900 flex items-center justify-center">
                    <FaUser className="w-7 h-7" />
                  </div>
                </div>

                <div className="chat-header">Me</div>
                <div className="chat-bubble bg-gray-900 shadow-lg p-4">
                  {sentQuery}
                </div>
              </div>

              <div className="chat chat-start w-full">
                <div className="chat-image avatar">
                  <div className="rounded-full shadow-md p-2 border border-gray-900 flex items-center justify-center">
                    <FaRobot className="w-7 h-7" />
                  </div>
                </div>
                <div className="chat-header">GSA</div>
                <div className="chat-bubble shadow-lg bg-fuchsia-700 p-4">
                  {result && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: result.replace(/\n/g, "<br>"),
                      }}
                    />
                  )}
                </div>
                <div className="chat-footer">
                  {/* {result.link && (
                    <div className="my-5">
                      <a
                        href={`${
                          process.env.NEXT_PUBLIC_WIKI_URL
                        }/pages/${path.basename(result.link, ".md")}`}
                        target="_blank"
                        className="btn btn-outline"
                      >
                        {path.basename(result.link)}
                        Read More
                      </a>
                    </div>
                  )} */}
                </div>
              </div>

              <div className="divider"></div>

              {/* <div className="p-2 sm:px-10 text-sm">
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
              </div> */}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 w-full items-center justify-center max-w-lg">
          <a
            href="/about"
            className=" border border-gray-900 rounded group w-full"
          >
            <button className="btn btn-primary w-full">
              <div className="flex gap-2 items-center">
                <div>About the Data</div>

                <div className="sm:group-hover:scale-105 transition-all duration-200">
                  <FaDatabase className="w-6 h-6" />
                </div>
              </div>
            </button>
          </a>
          <a
            href="mailto:info@resonantlogic.com"
            target="_blank"
            className="w-full border border-gray-900 rounded group"
          >
            <button className="btn btn-primary w-full">
              <div className="flex gap-2 items-center">
                <div>Contact Us</div>

                <div className="sm:group-hover:scale-105 transition-all duration-200">
                  <BiSolidMessageDetail className="w-6 h-6" />
                </div>
              </div>
            </button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
