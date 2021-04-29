/*
 * @Author: yeshan333
 * @Date: 2021-04-29 17:22:14
 * @GitHub: https://github.com/yeshan333
 * @Contact: yeshan1329441308@gmail.com
 * @License: MIT
 * @LastEditTime: 2021-04-29 23:06:40
 * @Description: reference impl -> https://codepen.io/Aoyue/details/pLJqgE
 * @Links: Slides Card
 */
import React from 'react';
import { Row, Col, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import * as style from "./index.module.css";

const FilpCard = () => {
  return (
    <>
      <div id="slides" className={style.title}>Recent Slides</div>
      <div className={style.container}>
        <Row gutter={[8, 16]}>
          <Col xs={24} sm={12} md={8} lg={8}>
            <div className={style.flip}>
              <div className={style.front}
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)`
                }}>
                <div className={style.flip_front_title}>MOUNTAIN</div>
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
        </Row>
      </div>
    </>
  );
}

export default FilpCard;


