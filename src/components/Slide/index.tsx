/*
 * @Author: yeshan333
 * @Date: 2021-03-25 17:57:10
 * @GitHub: https://github.com/yeshan333
 * @Contact: yeshan1329441308@gmail.com
 * @License:
 * @LastEditTime: 2021-04-29 23:11:33
 * @Description:
 * @Links:
 */
import React from "react";

import * as style from "./index.module.css";

type slideProps = {
  title: string,
  src: string
}

const Slide = (props: slideProps) => {
  return (
    <div className={style.slide}>
      <iframe
        title={props.title}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={props.src} />
    </div>
  );
}

export default Slide;
