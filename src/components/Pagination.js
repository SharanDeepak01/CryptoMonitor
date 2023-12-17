import React, { useContext, useState } from "react";
import arrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from "../context/CryptoContext";
import submitIcon from "../assets/submit-icon.svg";

export const Pagination = () => {
  let { page, setPage, perPage, setPerPage, cryptoData } =
    useContext(CryptoContext);
  const [pageInput, setPageInput] = useState();

  const totalNumber = Math.ceil(5000 / perPage);

  const handlePerPage = (e) => {
    e.preventDefault();
    setPerPage(pageInput);
  };

  const next = () => {
    if (page === totalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 5 >= totalNumber) {
      setPage(totalNumber - 1);
    } else {
      setPage(page + 5);
    }
  };

  const multiStepPrev = () => {
    if (page - 5 <= 1) {
      setPage(1);
    } else {
      setPage(page - 5);
    }
  };

  {
    return cryptoData?.length >= perPage ? (
      <div className="flex flex-col justify-center sm:flex-row items-center sm:justify-between mt-2">
        <form
          className="relative flex items-center font-nunito mr-12"
          onSubmit={handlePerPage}
        >
          <label className="relative flex justify-center items-center mr-2 font-normal">
            Per page
          </label>
          <input
            min={1}
            max={100}
            placeholder="10"
            className="w-10 rounded bg-gray-200
           placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan leading-4"
            type="number"
            name="perpage"
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
          />
          <button className="cursor-pointer ml-1" type="submit">
            <img className="w-full h-auto" src={submitIcon} alt="submit" />
          </button>
        </form>

        <ul className="flex items-center justify-end text-sm">
          {page !== 1 ? (
            <>
              <li className="flex items-center">
                <button className="outline-0 hover:text-cyan w-8">
                  <img
                    onClick={prev}
                    className="w-full h-auto rotate-180 hover:-translate-x-1"
                    src={arrow}
                    alt="left"
                  ></img>
                </button>
              </li>

              <li>
                <button
                  onClick={multiStepPrev}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg"
                >
                  ...
                </button>
              </li>
              <li>
                <button
                  onClick={prev}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                >
                  {page - 1}
                </button>
              </li>
            </>
          ) : null}

          <li>
            <button
              disabled
              className="outline-0 rounded-full w-8 h-8 flex items-center justify-center bg-cyan text-gray-300 mx-1.5"
            >
              {page}
            </button>
          </li>

          {page !== totalNumber ? (
            <>
              <li>
                <button
                  onClick={next}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                >
                  {page + 1}
                </button>
              </li>

              <li>
                <button
                  onClick={multiStepNext}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg"
                >
                  ...
                </button>
              </li>

              <li>
                <button
                  onClick={() => setPage(totalNumber)}
                  className="outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1.5"
                >
                  {totalNumber}
                </button>
              </li>

              <li>
                <button
                  className="outline-0 hover:text-cyan w-8 cursor-pointer hover:translate-x-1"
                  onClick={next}
                >
                  <img className="w-full h-auto" src={arrow} alt="right"></img>
                </button>
              </li>
            </>
          ) : null}
        </ul>
      </div>
    ) : null;
  }
};
