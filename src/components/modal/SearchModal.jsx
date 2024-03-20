import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import "./modal.css";

export default function SearchModal({ showSearch, onSetShowSearch }) {
  const [query, setQuery] = useState("");

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    onSetShowSearch(false);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  console.log(query);

  return (
    <AnimatePresence>
      {showSearch && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-container"
          onClick={closeModal}
        >
          {/* this is the modal content */}
          <div className="modal" onClick={handleClick}>
            <span className="modal-close" onClick={closeModal}>
              <RxCrossCircled />
            </span>

            <h2>Search ...</h2>
            <div className="body">
              <input
                type="text"
                name="search"
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your food name.."
              />
              <div className="result">
                {query == "" && (
                  <h1 className="no-query">Please type something to search</h1>
                )}

                {query && (
                  <div className="loading-container">
                    <FaSpinner className="loading" />
                    <span>Loading</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
