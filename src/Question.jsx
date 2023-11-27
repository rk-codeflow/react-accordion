import React from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import questions from "./data";

function Question() {
  return (
    <main>
      <div className="section">
        <div className="article">
          <div className="que">
            <h2>I am a Question</h2>
            <button>
              <GoChevronDown />
            </button>
          </div>
          <h5>Answer</h5>
        </div>
      </div>
    </main>
  );
}

export default Question;
