import React from 'react';
import Naav from "../home/navbar";
import { Button, Card, Row, Col, Container } from 'react-bootstrap';

function Movies() {
  const cardStyle = {
    width: '18rem',
    backgroundColor: 'black',
    color: 'white',
  };

  return (
    <>
    <Naav />
    <Container>
      <Row>
        <Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="sz.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Suzume</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: すずめの戸締まり
                Synonyms: Suzume's Locking-Up
                Aired: Nov 11, 2022
                Premiered: Fall 2022
                Duration: 2h
                Status: Finished Airing
                MAL Score: 8.48
              </Card.Text>
              <a href="https://aniwatch.to/watch/suzumes-doorlocking-18190?ep=100501" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="opf.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>One Piece Film: Red</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ONE PIECE FILM RED
                Synonyms: One Piece Movie 15
                Aired: Aug 6, 2022
                Premiered: Summer 2022
                Duration: 1h 55m
                Status: Finished Airing
                MAL Score: 7.96
             </Card.Text>
              <a href="https://aniwatch.to/watch/one-piece-film-red-18236?ep=96071" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="j0.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Jujutsu Kaisen 0 Movie</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 劇場版 呪術廻戦 0
                Synonyms: Gekijouban Jujutsu Kaisen 0
                Aired: Dec 24, 2021
                Premiered: Fall 2021
                Duration: 1h 45m
                Status: Finished Airing
                MAL Score: 8.53
              </Card.Text>
              <a href="https://aniwatch.to/watch/jujutsu-kaisen-0-movie-17763?ep=90016" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="bw.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Black Clover: Sword of the Wizard King</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ブラッククローバー 魔法帝の剣
                Aired: Jun 16, 2023
                Premiered: Spring 2023
                Duration: 1h 50m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/black-clover-sword-of-the-wizard-king-17752?ep=102057" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="tj.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>The Journey</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese:The Journey,
                Aired: Jan 1, 2021,
                Premiered:Jan 1, 2021,
                Synonyms: The Journey,Journey
                Duration: 1h 49m,
                Status: Finished Airing,
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/the-journey-17743?ep=85145" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="sg.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Summer Ghost</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: サマーゴースト
                Synonyms: Project Common
                Aired: Jan 1, 2021
                Premiered: Winter 2021
                Duration: 39m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/summer-ghost-17477?ep=89373" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="bll.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Belle</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 竜とそばかすの姫
                Synonyms:Belle
                Aired: Jul 16, 2021
                Premiered: Winter 2021
                Duration: 2h 2m
                Studios: Studio Chizu
                Status: Finished Airing
                MAL Score: 7.51
              </Card.Text>  
              <a href="https://aniwatch.to/watch/belle-17395?ep=84757" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="jf.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Josee, the Tiger and the Fish</Card.Title>
              <Card.Text style={{ color: 'white' }}> 
                Japanese: ジョゼと虎と魚たち
                Aired: Dec 25, 2020
                Premiered: Winter 2020
                Duration: 1h 38m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/josee-the-tiger-and-the-fish-15750?ep=74948" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="har.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Harmagedon</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 幻魔大戦
                Synonyms: Ghenma Wars, Great War with Genma
                Aired: Mar 12, 1983
                Premiered:
                Duration: 2h 11m
                Status: Finished Airing
                MAL Score: 5.15
              </Card.Text>
              <a href="https://aniwatch.to/watch/harmagedon-10074?ep=64867" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="yn.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Your Name</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 君の名は。
                Synonyms: Name
                Aired: Aug 26, 2016
                Premiered: Fall 2016
                Duration: 1h 46m
                Status: Finished Airing
                MAL Score: 8.88
                Studios: CoMix Wave Films
              </Card.Text>
              <a href="https://aniwatch.to/your-name-10?ref=search" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="ip.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>I want to eat your pancreas</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 君の膵臓をたべたい
                Synonyms: KimiSui
                Aired: Sep 1, 2018
                Premiered: Fall 2018
                Duration: 1h 48m
                Status: Finished Airing
                MAL Score: 8.58
              </Card.Text>
              <a href="https://aniwatch.to/watch/i-want-to-eat-your-pancreas-70?ep=58336" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="ya.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Your Lie in April</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 四月は君の嘘
                Synonyms: April
                Aired: Oct 10, 2014 to Mar 20, 2015
                Premiered: Fall 2014
                Duration: 22m
                Status: Finished Airing
                MAL Score: 8.68
              </Card.Text>
              <a href="https://aniwatch.to/watch/your-lie-in-april-31?ep=926" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="yv.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Your Voice -KIMIKOE-</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: きみの声をとどけたい
                Synonyms: I Want to Deliver Your Voice
                Aired: Aug 25, 2017
                Premiered: Summer 2017
                Duration: 1h 34m
                Status: Finished Airing
                MAL Score: 7.04
              </Card.Text>
              <a href="https://aniwatch.to/watch/your-voice-kimikoe-3505?ep=97486" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="rw.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Ride Your Wave</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: きみと、波にのれたら
                Synonyms: Ride Your Wave,Wave
                Aired: Jun 21, 2019
                Premiered:
                Duration: 1h 35m
                Status: Finished Airing
                MAL Score: 7.48
              </Card.Text>
              <a href="https://aniwatch.to/watch/ride-your-wave-1622?ep=64876" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="te.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>To Your Eternity</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 不滅のあなたへ
                Synonyms: To You, the Immortal
                Aired: Apr 12, 2021 to ?
                Premiered: Spring 2021
                Duration: 25m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/to-your-eternity-15708?ep=57405" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="bb.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Bleach the Movie: Fade to Black</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 劇場版  君の名を呼ぶ
                Aired: Dec 13, 2008
                Premiered: Winter 2008
                Duration: 1h 34m
                Status: Finished Airing
                MAL Score: 7.53
              </Card.Text>
              <a href="https://aniwatch.to/watch/bleach-the-movie-fade-to-black-1492?ep=58326" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="sz.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Suzume</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: すずめの戸締まり
                Synonyms: Suzume's Locking-Up
                Aired: Nov 11, 2022
                Premiered: Fall 2022
                Duration: 2h
                Status: Finished Airing
                MAL Score: 8.48
              </Card.Text>
              <a href="https://aniwatch.to/watch/suzumes-doorlocking-18190?ep=100501" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="opf.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>One Piece Film: Red</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ONE PIECE FILM RED
                Synonyms: One Piece Movie 15
                Aired: Aug 6, 2022
                Premiered: Summer 2022
                Duration: 1h 55m
                Status: Finished Airing
                MAL Score: 7.96
             </Card.Text>
              <a href="https://aniwatch.to/watch/one-piece-film-red-18236?ep=96071" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="j0.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Jujutsu Kaisen 0 Movie</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 劇場版 呪術廻戦 0
                Synonyms: Gekijouban Jujutsu Kaisen 0
                Aired: Dec 24, 2021
                Premiered: Fall 2021
                Duration: 1h 45m
                Status: Finished Airing
                MAL Score: 8.53
              </Card.Text>
              <a href="https://aniwatch.to/watch/jujutsu-kaisen-0-movie-17763?ep=90016" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="bw.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Black Clover: Sword of the Wizard King</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ブラッククローバー 魔法帝の剣
                Aired: Jun 16, 2023
                Premiered: Spring 2023
                Duration: 1h 50m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/black-clover-sword-of-the-wizard-king-17752?ep=102057" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="tj.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>The Journey</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese:The Journey,
                Aired: Jan 1, 2021,
                Premiered:Jan 1, 2021,
                Synonyms: The Journey,Journey
                Duration: 1h 49m,
                Status: Finished Airing,
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/the-journey-17743?ep=85145" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="sg.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Summer Ghost</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: サマーゴースト
                Synonyms: Project Common
                Aired: Jan 1, 2021
                Premiered: Winter 2021
                Duration: 39m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/summer-ghost-17477?ep=89373" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="bll.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Belle</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 竜とそばかすの姫
                Synonyms:Belle
                Aired: Jul 16, 2021
                Premiered: Winter 2021
                Duration: 2h 2m
                Studios: Studio Chizu
                Status: Finished Airing
                MAL Score: 7.51
              </Card.Text>  
              <a href="https://aniwatch.to/watch/belle-17395?ep=84757" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="jf.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Josee, the Tiger and the Fish</Card.Title>
              <Card.Text style={{ color: 'white' }}> 
                Japanese: ジョゼと虎と魚たち
                Aired: Dec 25, 2020
                Premiered: Winter 2020
                Duration: 1h 38m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/josee-the-tiger-and-the-fish-15750?ep=74948" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="har.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Harmagedon</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 幻魔大戦
                Synonyms: Ghenma Wars, Great War with Genma
                Aired: Mar 12, 1983
                Premiered:
                Duration: 2h 11m
                Status: Finished Airing
                MAL Score: 5.15
              </Card.Text>
              <a href="https://aniwatch.to/watch/harmagedon-10074?ep=64867" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="yn.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Your Name</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 君の名は。
                Synonyms: Name
                Aired: Aug 26, 2016
                Premiered: Fall 2016
                Duration: 1h 46m
                Status: Finished Airing
                MAL Score: 8.88
                Studios: CoMix Wave Films
              </Card.Text>
              <a href="https://aniwatch.to/your-name-10?ref=search" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="ip.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>I want to eat your pancreas</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 君の膵臓をたべたい
                Synonyms: KimiSui
                Aired: Sep 1, 2018
                Premiered: Fall 2018
                Duration: 1h 48m
                Status: Finished Airing
                MAL Score: 8.58
              </Card.Text>
              <a href="https://aniwatch.to/watch/i-want-to-eat-your-pancreas-70?ep=58336" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="ya.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Your Lie in April</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 四月は君の嘘
                Synonyms: April
                Aired: Oct 10, 2014 to Mar 20, 2015
                Premiered: Fall 2014
                Duration: 22m
                Status: Finished Airing
                MAL Score: 8.68
              </Card.Text>
              <a href="https://aniwatch.to/watch/your-lie-in-april-31?ep=926" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="yv.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Your Voice -KIMIKOE-</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: きみの声をとどけたい
                Synonyms: I Want to Deliver Your Voice
                Aired: Aug 25, 2017
                Premiered: Summer 2017
                Duration: 1h 34m
                Status: Finished Airing
                MAL Score: 7.04
              </Card.Text>
              <a href="https://aniwatch.to/watch/your-voice-kimikoe-3505?ep=97486" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="rw.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Ride Your Wave</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: きみと、波にのれたら
                Synonyms: Ride Your Wave,Wave
                Aired: Jun 21, 2019
                Premiered:
                Duration: 1h 35m
                Status: Finished Airing
                MAL Score: 7.48
              </Card.Text>
              <a href="https://aniwatch.to/watch/ride-your-wave-1622?ep=64876" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="te.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>To Your Eternity</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 不滅のあなたへ
                Synonyms: To You, the Immortal
                Aired: Apr 12, 2021 to ?
                Premiered: Spring 2021
                Duration: 25m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/to-your-eternity-15708?ep=57405" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="bb.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Bleach the Movie: Fade to Black</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 劇場版  君の名を呼ぶ
                Aired: Dec 13, 2008
                Premiered: Winter 2008
                Duration: 1h 34m
                Status: Finished Airing
                MAL Score: 7.53
              </Card.Text>
              <a href="https://aniwatch.to/watch/bleach-the-movie-fade-to-black-1492?ep=58326" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="sz.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Suzume</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: すずめの戸締まり
                Synonyms: Suzume's Locking-Up
                Aired: Nov 11, 2022
                Premiered: Fall 2022
                Duration: 2h
                Status: Finished Airing
                MAL Score: 8.48
              </Card.Text>
              <a href="https://aniwatch.to/watch/suzumes-doorlocking-18190?ep=100501" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="opf.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>One Piece Film: Red</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ONE PIECE FILM RED
                Synonyms: One Piece Movie 15
                Aired: Aug 6, 2022
                Premiered: Summer 2022
                Duration: 1h 55m
                Status: Finished Airing
                MAL Score: 7.96
             </Card.Text>
              <a href="https://aniwatch.to/watch/one-piece-film-red-18236?ep=96071" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="j0.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Jujutsu Kaisen 0 Movie</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 劇場版 呪術廻戦 0
                Synonyms: Gekijouban Jujutsu Kaisen 0
                Aired: Dec 24, 2021
                Premiered: Fall 2021
                Duration: 1h 45m
                Status: Finished Airing
                MAL Score: 8.53
              </Card.Text>
              <a href="https://aniwatch.to/watch/jujutsu-kaisen-0-movie-17763?ep=90016" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="bw.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Black Clover: Sword of the Wizard King</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: ブラッククローバー 魔法帝の剣
                Aired: Jun 16, 2023
                Premiered: Spring 2023
                Duration: 1h 50m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/black-clover-sword-of-the-wizard-king-17752?ep=102057" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="tj.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>The Journey</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese:The Journey,
                Aired: Jan 1, 2021,
                Premiered:Jan 1, 2021,
                Synonyms: The Journey,Journey
                Duration: 1h 49m,
                Status: Finished Airing,
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/the-journey-17743?ep=85145" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="sg.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Summer Ghost</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: サマーゴースト
                Synonyms: Project Common
                Aired: Jan 1, 2021
                Premiered: Winter 2021
                Duration: 39m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/summer-ghost-17477?ep=89373" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="bll.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Belle</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 竜とそばかすの姫
                Synonyms:Belle
                Aired: Jul 16, 2021
                Premiered: Winter 2021
                Duration: 2h 2m
                Studios: Studio Chizu
                Status: Finished Airing
                MAL Score: 7.51
              </Card.Text>  
              <a href="https://aniwatch.to/watch/belle-17395?ep=84757" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="jf.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Josee, the Tiger and the Fish</Card.Title>
              <Card.Text style={{ color: 'white' }}> 
                Japanese: ジョゼと虎と魚たち
                Aired: Dec 25, 2020
                Premiered: Winter 2020
                Duration: 1h 38m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/josee-the-tiger-and-the-fish-15750?ep=74948" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="har.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Harmagedon</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 幻魔大戦
                Synonyms: Ghenma Wars, Great War with Genma
                Aired: Mar 12, 1983
                Premiered:
                Duration: 2h 11m
                Status: Finished Airing
                MAL Score: 5.15
              </Card.Text>
              <a href="https://aniwatch.to/watch/harmagedon-10074?ep=64867" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="yn.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Your Name</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 君の名は。
                Synonyms: Name
                Aired: Aug 26, 2016
                Premiered: Fall 2016
                Duration: 1h 46m
                Status: Finished Airing
                MAL Score: 8.88
                Studios: CoMix Wave Films
              </Card.Text>
              <a href="https://aniwatch.to/your-name-10?ref=search" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="ip.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>I want to eat your pancreas</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 君の膵臓をたべたい
                Synonyms: KimiSui
                Aired: Sep 1, 2018
                Premiered: Fall 2018
                Duration: 1h 48m
                Status: Finished Airing
                MAL Score: 8.58
              </Card.Text>
              <a href="https://aniwatch.to/watch/i-want-to-eat-your-pancreas-70?ep=58336" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="ya.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Your Lie in April</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 四月は君の嘘
                Synonyms: April
                Aired: Oct 10, 2014 to Mar 20, 2015
                Premiered: Fall 2014
                Duration: 22m
                Status: Finished Airing
                MAL Score: 8.68
              </Card.Text>
              <a href="https://aniwatch.to/watch/your-lie-in-april-31?ep=926" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="yv.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Your Voice -KIMIKOE-</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: きみの声をとどけたい
                Synonyms: I Want to Deliver Your Voice
                Aired: Aug 25, 2017
                Premiered: Summer 2017
                Duration: 1h 34m
                Status: Finished Airing
                MAL Score: 7.04
              </Card.Text>
              <a href="https://aniwatch.to/watch/your-voice-kimikoe-3505?ep=97486" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="rw.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Ride Your Wave</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: きみと、波にのれたら
                Synonyms: Ride Your Wave,Wave
                Aired: Jun 21, 2019
                Premiered:
                Duration: 1h 35m
                Status: Finished Airing
                MAL Score: 7.48
              </Card.Text>
              <a href="https://aniwatch.to/watch/ride-your-wave-1622?ep=64876" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="te.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>To Your Eternity</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 不滅のあなたへ
                Synonyms: To You, the Immortal
                Aired: Apr 12, 2021 to ?
                Premiered: Spring 2021
                Duration: 25m
                Status: Finished Airing
                MAL Score: ?
              </Card.Text>
              <a href="https://aniwatch.to/watch/to-your-eternity-15708?ep=57405" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col><Col>
          <Card className="mb-4" style={cardStyle}>
            <Card.Img variant="top" src="bb.jpg" alt=''/>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Bleach the Movie: Fade to Black</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Japanese: 劇場版  君の名を呼ぶ
                Aired: Dec 13, 2008
                Premiered: Winter 2008
                Duration: 1h 34m
                Status: Finished Airing
                MAL Score: 7.53
              </Card.Text>
              <a href="https://aniwatch.to/watch/bleach-the-movie-fade-to-black-1492?ep=58326" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Watch Now</Button>
              </a>
            </Card.Body>
          </Card>
        </Col>58
      </Row>
    </Container>
    </>
    
  );
  
}

export default Movies;