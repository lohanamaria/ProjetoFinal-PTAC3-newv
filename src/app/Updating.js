import Image from "next/image";
import styles from "./spinner.module.css";

export default function Spinner() {
return(
<Image width={100} height={100} alt="" src={"/6-dots-rotate.svg"} className={styles.image}/>
);
}