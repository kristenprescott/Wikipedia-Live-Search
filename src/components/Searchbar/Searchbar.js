import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Searchbar/Searchbar.css";

const Searchbar = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    
    // run search immediately if this is initial page load
    if (term && !results.length) {
      search();
      // else throttle search requests with timer
    } else {
      // wait 500ms before executing search
      let timeoutID = setTimeout(() => {
        // do not search if input is empty
        if (term) {
          search();
        }
      }, 500);

      // CLEANUP: clear current timer
      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [term, results.length]);

  const searchResultsMapped = results.map((result) => {
    return (
      <div className="container" key={result.pageid}>
        <div className="content">
          <div className="article-title">
            <a
              className="article-link"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
              target="_blank"
              rel="noreferrer"
            >
              {result.title}
            </a>
          </div>
          {/* only use this in situations where you are 100% certain where all the content is coming from: */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* There are now span elements on the page with class “searchmatch”. Wikipedia does this because it makes it convenient to apply a style to the matching word in all the result snippets. This website also does something similar to this. If you use the search bar you will see the matching portion of your search term highlighted in the results. */}
        </div>
      </div>
    );
  });

  const handleChange = (e) => {
    setTerm(e.target.value);

    e.target.value = " ";
  };

  return (
    <div>
      <div className="search-container">
        <div className="search-wrapper">
          <label className="search-input-label">Search Wikipedia: </label>
          <input
            className="search-input"
            value={term}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-list">{searchResultsMapped}</div>
    </div>
  );
};

export default Searchbar;
