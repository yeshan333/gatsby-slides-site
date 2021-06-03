/*
 * @Author: yeshan333
 * @Date: 2021-04-29 17:22:14
 * @GitHub: https://github.com/yeshan333
 * @Contact: yeshan1329441308@gmail.com
 * @License: MIT
 * @LastEditTime: 2021-06-03 15:59:39
 * @Description: reference impl -> https://codepen.io/Aoyue/details/pLJqgE
 * @Links: Slides Card
 */
import React from 'react';
import { Row, Col, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import * as style from "./index.module.css";

interface Slide {
  title: string,
  date: string,
  link: string,
  desc: string,        // 每 21 个中文 or 38 个字母换行一次 \n
  image_src: string
}

interface FlipCardProps {
  slides: Array<Slide>
}

const FilpCard = (props: FlipCardProps) => {
  return (
    <>
      <div id="slides" className={style.title}>Recent Slides</div>
      <div className={style.container}>
        <Row gutter={[8, 16]}>
          {
            props.slides.map(slide => {
              return (
                <Col xs={24} sm={12} md={8} lg={8} key={slide.image_src}>
                  <div className={style.flip}>
                    <div className={style.front}
                      style={{
                        backgroundImage: `url(${slide.image_src})`
                      }}>
                      <div className={style.flip_front_title}>{slide.title}</div>
                    </div>
                    <div className={style.back}>
                      <div className={style.flip_back_title}>{slide.date}</div>
                      <p>{slide.desc}</p>
                      <Button className={style.back_button} danger icon={<SearchOutlined />}>
                        <a target="_blank" href={slide.link}>explore</a>
                      </Button>
                    </div>
                  </div>
                </Col>
              );
            })
          }
          {/*
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className={style.flip}>
              <div className={style.front}
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)`
                }}>
                <div className={style.flip_front_title}>LAKE</div>
              </div>
              <div className={style.back}>
                <div className={style.flip_back_title}>Angular</div>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                <Button danger icon={<SearchOutlined />}>
                  <a target="_blank" href="https://shansan.top">explore</a>
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className={style.flip}>
              <div className={style.front}
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)`
                }}>
                <div className={style.flip_front_title}>OCEAN</div>
              </div>
              <div className={style.back}>
                <div className={style.flip_back_title}>Angular</div>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                <Button danger icon={<SearchOutlined />}>
                  <a target="_blank" href="https://shansan.top">explore</a>
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className={style.flip}>
              <div className={style.front}
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)`
                }}>
                <div className={style.flip_front_title}>OCEAN</div>
              </div>
              <div className={style.back}>
                <div className={style.flip_back_title}>Angular</div>
                <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                <Button danger icon={<SearchOutlined />}>
                  <a target="_blank" href="https://shansan.top">explore</a>
                </Button>
              </div>
            </div>
          </Col>
          */}
        </Row>
      </div>
    </>
  );
}

export default FilpCard;


