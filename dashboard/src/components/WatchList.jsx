import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../init/data";
import { useState } from "react";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, index }) => {
  const [showWatchlistActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy" placement="top" arrow>
          <button className="buy">B</button>
        </Tooltip>
        <Tooltip title="sell" placement="top" arrow>
          <button className="sell">S</button>
        </Tooltip>
        <Tooltip title="Analytics" placement="top" arrow>
          <button className="action">
            {" "}
            <BarChartOutlined className="icon" />{" "}
          </button>
        </Tooltip>
        <Tooltip title="more" placement="top" arrow>
          <button className="action">
            {" "}
            <MoreHoriz className="icon" />{" "}
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
