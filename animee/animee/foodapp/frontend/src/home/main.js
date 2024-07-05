import React from 'react';
import Naav from "../home/navbar";
import { Carousel } from 'react-bootstrap';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';


const Main = () => {
  const cardStyle = {
    width: '18rem',
    backgroundColor: 'black',
    color: 'white',
  };
  return (
    <>
    <Naav />
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="wp1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="wp7.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="wp3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <br></br>
    <h2 style={{textAlign:'center'}}>Latest Animes</h2>
    <br></br>
    <Container>
      <Row>
        <Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="onepiece.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>One Piece</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ONE PIECE
                Aired: 1999 to ?
                Premiered: Fall 1999
                Duration: 24m
                Status: Currently Airing
                MAL Score: 8.62
                Genre:Adventure,Drama,SuperPower
              </Card.Text>
              <a href="https://aniwatch.to/watch/one-piece-100?ep=3036" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
       
              </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="juk.png" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Jujutsu Kaisen</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 呪術廻戦
                Aired: Jul 6, 2023 to ?
                Premiered: Summer 2023
                Duration: 24m
                Status: Currently Airing
                MAL Score: 8.68
                Genre:Magic,Fantasy,Action
              </Card.Text>

              <a href="https://aniwatch.to/watch/jujutsu-kaisen-tv-534?ep=10789" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="tr.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Tokyo Revengers</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 東京リベンジャーズ 天竺編
                Aired: Oct 4, 2023 to ?
                Premiered: Fall 2023
                Duration: 24m
                Status: Currently Airing
                MAL Score: ?
                Genre:Action,Drama
              </Card.Text>
              <a href="https://aniwatch.to/watch/tokyo-revengers-15585?ep=64630" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="naruto.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Naruto</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ナルト- 疾風伝
                Aired: Feb 15, 2007 to Mar 23, 2017
                Duration: 23m
                Status: Finished Airing
                MAL Score: 8.15
                Genre:Action,Adventure,SuperPower
              </Card.Text>
              <a href="https://aniwatch.to/watch/naruto-677?ep=12571" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="ds.png" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Demon Slayer</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 劇場版 鬼滅の刃 無限列車編
                Synonyms: Demon Slayer, Kimetsu no Yaiba
                Aired: Apr 9, 2023
                Status: Finished Airing
                Genre: Action, Adventure,SuperPower
              </Card.Text>
              <a href="https://aniwatch.to/watch/demon-slayer-kimetsu-no-yaiba-to-the-swordsmith-village-18335?ep=99568" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="at.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Attack on Titan</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 進撃の巨人
                Synonyms: AoT,Attack on Titan
                Duration: 23m
                Aired: Apr 7, 2013
                Status: Finished Airing
                MAL Score: ?
                Genre:Superpower,Fantasy
              </Card.Text>
              <a href="https://aniwatch.to/watch/attack-on-titan-112?ep=3303" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="bl.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Blue Lock</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ブルーロック
                Aired: Oct 9, 2022 to Mar 26, 2023
                Premiered: Fall 2022
                Duration: 24m
                Status: Finished Airing
                MAL Score: 8.41
                Genre:Action,Drama,Sports
              </Card.Text>
              <a href="https://aniwatch.to/watch/blue-lock-17889?ep=94538" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="hxh.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>HUNTER×HUNTER</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: HUNTER×HUNTER
                Synonyms: HxH
                Aired: 2011 to 2014
                Duration: 23m
                Status: Finished Airing
                MAL Score: 9.05
                Genre:Adventure,SuperPower,Fantasy
              </Card.Text>
              <a href="https://aniwatch.to/hunter-x-hunter-movie-2-the-last-mission-2585?ref=search" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="hp.png" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Hell's Paradise: Jigokuraku</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 地獄楽
                Synonyms: Hell's Paradise: Jigokuraku, Paradition
                Aired: Apr 1, 2023
                Status: Finished Airing
                Genre:Action,Fantasy
              </Card.Text>
              <a href="https://aniwatch.to/watch/hells-paradise-18332?ep=99938" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="ha.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>My Hero Academia</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 僕のヒーローアカデミア 
                Aired: Oct 1, 2022 to Mar 25, 2023
                Premiered: Fall 2022
                Duration: 24m
                Status: Finished Airing
                MAL Score: 8.42
                Genre:Action,SuperPower
              </Card.Text>
              <a href="https://aniwatch.to/watch/my-hero-academia-322?ep=6210" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="db.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Dragon Ball</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ドラゴンボール超
                Synonyms: Dragon Ball 
                Aired: 2015 to 2018
                Status: Finished Airing
                MAL Score: 7.46
                Genre:Fantasy,Action,Adventure,SuperPower
              </Card.Text>
              <a href="https://aniwatch.to/watch/my-hero-academia-322?ep=6210" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="dn.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Death Note</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: デスノート
                Synonyms: DN
                Aired: Oct 4, 2006 to Jun 27, 2007
                Duration: 23m
                Status: Finished Airing
                MAL Score: 8.63
                Genre:Thriller,Action
              </Card.Text>
              <a href="https://aniwatch.to/watch/death-note-60?ep=1464" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="ce.png" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Classroom of the Elite</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ようこそ実力至上主義の教室へ 2期
                Synonyms: Classroom of the Elite
                Duration: 23m
                Status: Finished Airing
                MAL Score: ?
                Genre:Drama,Thriller
              </Card.Text>
              <a href="https://aniwatch.to/watch/classroom-of-the-elite-713?ep=12865" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="ft.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>FAIRY TAIL</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese:（フェアリーテイル）
                Aired: Oct 12, 2009 to Mar 30, 2013
                Premiered: Fall 2009
                Status: Finished Airing
                MAL Score: 7.74
                Genre: Action, Adventure, Fantasy, Magic
              </Card.Text>
              <a href="https://aniwatch.to/watch/fairy-tail-930?ep=15627" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="hq.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Haikyu</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ハイキュー!!
                Aired: Apr 6, 2014 to Sep 21, 2014
                Premiered: Spring 2014
                Duration: 24m
                Status: Finished Airing
                MAL Score: 8.46
                Genre:Drama,Action,Sports
              </Card.Text>
              <a href="https://aniwatch.to/watch/haikyu-76?ep=1626" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="100.png" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Bucket List of the Dead</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ゾンビになるまでにしたい
                Aired: Jul 9, 2023 to ?
                Premiered: Summer 2023
                Duration: 23m
                Status: Currently Airing
                MAL Score: 8.42
                Genre:Thriller,Action
              </Card.Text>
              <a href="https://aniwatch.to/watch/zom-100-bucket-list-of-the-dead-18423?ep=103005" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="mt.png" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Mushoku Tensei</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 無職転生 
                Aired: Jul 3, 2023 to Sep 25, 2023
                Premiered: Summer 2023
                Duration: 23m
                Status: Finished Airing
                MAL Score: 8.69
                Genre:Magic,Adventure,Fantasy
              </Card.Text>
              <a href="https://aniwatch.to/mushoku-tensei-jobless-reincarnation-15820?ref=search" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="hm.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Horimiya</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ホリミヤ
                Aired: Jan 10, 2021 to Apr 4, 2021
                Premiered: Winter 2021
                Duration: 23m
                Status: Finished Airing
                MAL Score: ?
                Genre:Drama,Thriller
              </Card.Text>
              <a href="https://aniwatch.to/watch/horimiya-15733?ep=51286" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="opm.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>One Punch Man</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ワンパンマン
                Aired: Oct 5, 2015 to Dec 21, 2015
                Premiered: Fall 2015
                Duration: 24m
                Status: Finished Airing
                Genre:SuperPower,Action,Fantasy
              </Card.Text>
              <a href="https://aniwatch.to/watch/one-punch-man-63?ep=1501" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="tg.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Tokyo Ghoul</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 東京喰種-トーキョーグール-
                Aired:  2014 to  2014
                Premiered: Summer 2014
                Duration: 24m
                Status: Finished Airing
                MAL Score: 7.82
                Genre:Action,Drama
              </Card.Text>
              <a href="https://aniwatch.to/watch/tokyo-ghoul-a-3130?ep=31850" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    
    </>
  );
};

export default Main;
