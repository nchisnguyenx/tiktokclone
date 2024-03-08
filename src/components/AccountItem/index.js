import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://www.shutterstock.com/image-photo/adorable-welsh-springer-spaniel-dog-600nw-1823409425.jpg"
        alt=""
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          Nguyen van A{" "}
          <span>
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
        </p>
        <span className={cx("username")}>nguyemn van a</span>
      </div>
    </div>
  );
}

export default AccountItem;
