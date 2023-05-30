import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main";
import Detail from "./detail";
import { useState } from "react";
function Router() {
  const [detailValue, setDetailValue] = useState({});

  const handleDetailValue = (arr) => {
    setDetailValue(arr);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main detailValue={handleDetailValue} />} />
        <Route path="/detail" element={<Detail detailValue={detailValue} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
