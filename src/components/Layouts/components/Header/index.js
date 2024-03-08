import { useEffect, useState } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/accsets";

import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Header() {
  // console.log(logo);

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Logo" />
        </div>

        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input type="text" placeholder="Tìm kiếm..." spellCheck={false} />
            <button className={cx("clear")}>
              {/* clear  */}
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>

            {/* Loading  */}
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              {/* Search  */}
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button primary to="/login">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
